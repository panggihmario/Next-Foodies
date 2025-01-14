"use client";
import Image from "next/image";
import classes from "./image-picker.module.css";
import { useRef, useState } from "react";
export default function ImagePicker({ label, name }) {
  const imageRef = useRef();
  const [pickedImage, setPickedImage] = useState();
  function handleClick() {
    imageRef.current.click();
  }

  function handleChangeImage(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && (
            <Image src={pickedImage} fill alt="The image selected by user" />
          )}
        </div>
        <input
          type="file"
          className={classes.input}
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageRef}
          onChange={handleChangeImage}
        />
        <button onClick={handleClick} className={classes.button} type="button">
          Pick an Image
        </button>
      </div>
    </div>
  );
}
