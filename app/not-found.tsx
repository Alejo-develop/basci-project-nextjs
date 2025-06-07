import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section>
      <h1>404</h1>
      <p>Page not Found</p>

      <Link href="/">Back</Link>
    </section>
  );
}
