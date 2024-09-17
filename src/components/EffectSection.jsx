import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { useState } from "react";
import { useEffect } from "react";

export default function EffectSection() {
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(false);

  async function fetchUsers() {
    console.log("Is load..");
    setloading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
    setloading(false);
    console.log("Loaded");
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  function openModal() {
    setModal(true);
  }
  return (
    <section>
      <h3>Effects</h3>
      <Button onClick={openModal}>Открыть информацию</Button>

      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla</p>
        <Button onClick={() => setModal(false)}>Close</Button>
      </Modal>
      {loading && <p>Loading...</p>}
      {!loading && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
