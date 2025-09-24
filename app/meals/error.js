"use client";
import React from "react";
// can use the error prop
export default function Error() {
  return (
    <>
      <main className="error">
        <h1> An error occured!</h1>
        <p>Failed to fetch data</p>
      </main>
    </>
  );
}
