import { revalidateTag } from "next/cache";

export default function About() {
  revalidateTag("users-collection");
  return <div>Hello, this is about page</div>;
}
