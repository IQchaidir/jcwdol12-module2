import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1 data-test-id="header">about page</h1>
      <Link href="/" data-test-id="link-homepage">
        homepage
      </Link>
    </div>
  );
}
