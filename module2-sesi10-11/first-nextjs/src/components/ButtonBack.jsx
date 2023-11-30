"use client";

import { useRouter } from "next/navigation";

export default function ButtonBack() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push("/")}>
      kembali ke home
    </button>
  );
}
