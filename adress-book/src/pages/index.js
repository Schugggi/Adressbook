import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");


  function handleLogin(){

  }

  return (
    <>
      <Head>
        <title>Adressbuch</title>
      </Head>
      <main className={styles.main}>
        <h1>Adressbuch</h1>

        <div>
          <p>Name</p>
          <input value={name} onChange={(e) => setName(e.target.value)} />

          <p>Nummer</p>
          <input value={number} onChange={(e) => setNumber(e.target.value)} />

          <p>Email</p>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />

          <p>Beschreibung</p>
          <input value={description} onChange={(e) => setDescription(e.target.value)} />

          <button onClick={handleLogin}>Hinzufügen</button>
        </div>
      </main>
    </>
  );
}
