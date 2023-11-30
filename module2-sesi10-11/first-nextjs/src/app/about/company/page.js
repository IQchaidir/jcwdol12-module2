import axios from "axios";
import ButtonBack from "../../../components/ButtonBack";
import { getServerTime } from "./utils";
import ListUser from "./ListUser";

export const metadata = {
  title: "About - Company",
};

async function getUsers() {
  const res = await fetch("http://localhost:3001/users", {
    next: { tags: ["users-collection"] },
  });
  const data = await res.json();

  console.log("lagi fetch nih");

  return data;
}

export default async function Company() {
  const users = await getUsers();
  const serverTime = await getServerTime("caching");

  return (
    <>
      <div>
        ini page company
        {serverTime}
        <ButtonBack />
      </div>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
      <div style={{ marginTop: "20px" }}>
        <ListUser />
      </div>
    </>
  );
}
