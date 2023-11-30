async function getUser(id) {
  const res = await fetch(`http://localhost:3001/users/${id}`, {
    next: { revalidate: 5 },
  });
  const data = await res.json();

  console.log("lagi fetch nih");

  return data;
}

export default async function Page({ params }) {
  const user = await getUser(params.id);

  return (
    <div>
      {user.id} {user.name}
    </div>
  );
}
