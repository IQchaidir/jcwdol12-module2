"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function ListUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    // const data = await res.json();

    return setUsers(res.data);
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
