"use client";
import { useRef } from "react";
import styles from "./image-picker.module.css";
import { useState } from "react";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  //connecting the button with the input using a ref
  const imageInputRef = useRef();
  function handlePick() {
    imageInputRef.current.click();
  }

  function handleImageChange(e) {
    // Get the first file the user picked from the file input

    const file = e.target.files[0]; //the files will exist because the target of the event is the input
    if (!file) {
      // If no file was selected (user canceled or cleared input), reset the state

      setPickedImage(null);
    }
    // Create a new FileReader to read the file contents

    const fileReader = new FileReader();
    // Define what happens once the file has been read

    fileReader.onload = () => {
      // fileReader.result contains the file data as a base64-encoded URL
      // We store it in state so it can be used in an <img> tag for preview
      setPickedImage(fileReader.result);
    };
    // Start reading the file as a Data URL (base64 string)

    fileReader.readAsDataURL(file);
  }
  return (
    <>
      <div className={styles.picker}>
        <label htmlFor={name}> {label}</label>
        <div className={styles.controls}>
          {pickedImage && (
            <div className={styles.preview}>
              <Image src={pickedImage} alt="Image selected" fill />
            </div>
          )}

          <input
            className={styles.input}
            type="file"
            id={name}
            accept="image/png, image/jpeg"
            name={name}
            ref={imageInputRef}
            onChange={handleImageChange}
            
          />
          {/* button must be type button so it will not submit the form */}
          <button className={styles.button} type="button" onClick={handlePick}>
            Pick an image
          </button>
        </div>
      </div>
    </>
  );
}
