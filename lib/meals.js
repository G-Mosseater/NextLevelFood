import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); //simulates a loading state
  // throw new Error("error loading meals")
  return db.prepare("SELECT * FROM meals").all();
}
export async function getMeal(slug) {
  if (!slug) return null; 
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
// if the function is async, it returns a promise
// add dynamic statements like the slug to protect from sql injections
// Save a new meal into the database
// Needs: slugify (to create URL-friendly slugs) and xss (to sanitize user input)
export async function saveMeal(meal) {
  // Create a slug from the meal title ("Best Pasta" → "best-pasta")
  meal.slug = slugify(meal.title, { lower: true });

  // Sanitize instructions to remove dangerous HTML (protect against XSS attacks)
  meal.instructions = xss(meal.instructions);

  // Extract the image file extension 
  const extension = meal.image.name.split(".").pop();

  // Build a new file name based on the slug and extension ("best-pasta.jpg")
  const fileName = `${meal.slug}.${extension}`;

  // Create a writable stream (opens a path in /public/images to save the file)
  const stream = fs.createWriteStream(`public/images/${fileName}`);

  // Convert the uploaded image into a buffer (binary data we can save)
  const bufferedImage = await meal.image.arrayBuffer(); // returns a promise, so we `await`

  // Write the image data to the stream (actually saves the image file)
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  // Replace the image property with the path we just saved (to store in DB)
  meal.image = `/images/${fileName}`;

  // Insert the meal into the database
  db.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES
      (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
  `).run(meal); // `@field` automatically pulls values from the `meal` object
}