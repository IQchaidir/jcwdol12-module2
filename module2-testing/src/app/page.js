import Link from "next/link";

export default function Home() {
  return (
    <nav>
      <h1 data-test-id="header">Homepage</h1>
      <Link data-test-id="link-about" href="/about">
        about page
      </Link>
    </nav>
  );
}
