'use client'
import { useEffect } from 'react'
 
export default function ErrorComponent({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong! - {error.message}</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => {}
        }
      >
        Try again
      </button>
    </div>
  )
}