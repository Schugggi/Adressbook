import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { useSession } from 'next-auth/react'


export default function Home() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const { data: session, status } = useSession();
  
  function handleLogin(){
    console.log(status);
  }
  if(status === "unauthenticated"){
    window.location.replace("api/auth/signin");
  }
  return (
    <>
      <Head>
        <title>Adressbuch</title>
      </Head>
      <main className={styles.main}>
        <h1>Adressbuch</h1>
        <h2>Hello {session?.user.name}</h2>

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
