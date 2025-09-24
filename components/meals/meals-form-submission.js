"use client";
import { useFormStatus } from "react-dom";
export default function MealsFormSubmit() {
  // Call the hook. It returns an object, and we grab the "pending" property from it.
  // "pending" is true if the form is currently being submitted.

  const { pending } = useFormStatus(); // Import the React hook that gives us information about the form state

  return (
    // The button will be disabled while the form is submitting (pending = true).

    <button disabled={pending}>
      {pending ? "Submitting..." : "Share meal"}
    </button>
  );
}
