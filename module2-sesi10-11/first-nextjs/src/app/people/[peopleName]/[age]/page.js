export default function Page({ params }) {
  return (
    <div>
      <span>
        hello, {params.peopleName} ({params.age})
      </span>
    </div>
  );
}
