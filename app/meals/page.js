import MealsGrid from "@/components/meals/meals-grid";
import styles from "./page.module.css";
import Link from "next/link";
import { Suspense } from "react";
import  {getMeals}  from "@/lib/meals";

export const metadata = {
  title: "All meals",
  description: "Some really important description here as well",
};

async function Meals() {
  const meals = await getMeals();

  console.log(meals);
  return <MealsGrid meals={meals} />;
}
export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Meals created <span className={styles.highlight}>by you!</span>
        </h1>
        <p>
          Congratulations, you’ve cooked something that didn’t set the kitchen
          on fire. Now share it here so we can all politely pretend it looks
          edible.
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Upload Regret Here</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={<p className={styles.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
