import React from "react";
import cv from "/content/images/cv.pdf";

export default function CVPage() {
  return (
    <embed src={cv} alt="cv" width="100%" height="1500px" />
  )
}