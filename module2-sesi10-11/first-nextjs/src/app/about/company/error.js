"use client";

export default function ErrorCompany({ error, reset }) {
  return (
    <div>
      ah rusak {error.message}
      <button onClick={() => reset()}>refresh ulang</button>
    </div>
  );
}
