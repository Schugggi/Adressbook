import Head from "next/head";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import NavBar from "./components/NavBar";
import InfoInput from "./components/InfoInput";

export default function Home() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const { data: session, status } = useSession();

  function handleAddressEntry() {
    console.log("index.js: in handleAddressEntry");
    console.log("index.js: in handleAddressEntry : after if statement");
    fetch(
      `/api/AddressEntryHandler?name=${name}&number=${number}&email=${email}&description=${description}`
    ).then((res) => {
      switch (res.status) {
        case 411:
          alert("Name not Valid");
          break;
        case 412:
          alert("Number not Valid");
          break;
        case 413:
          alert("Email not Valid");
          break;
        case 200:
          alert("Success!")
          setName("");
          setNumber("");
          setEmail("");
          setDescription("");
          break;
        default:
          console.log(res.status);
      }
    });
  }
  if (status === "unauthenticated") {
    window.location.replace("api/auth/signin");
  }
  return (
    <>
      <Head>
        <title>Adressbuch</title>
      </Head>
      <main>
        <NavBar></NavBar>
        <div className="flex justify-center items-center h-screen">
          <div className="space-y-4">
            <h1 className="font-bold text-5xl">Address Book</h1>
            <h2 className="italic text-xl">Hello {session?.user.name}</h2>
            {/* Name Input */}
            <InfoInput
              value={name}
              setValue={setName}
              info="What is your name?"
              required="*"
            />
            {/* Number Input */}
            <InfoInput
              value={number}
              setValue={setNumber}
              info="What is the Number of your Contact"
              required="*"
            />
            {/* Email Input */}
            <InfoInput
              value={email}
              setValue={setEmail}
              info="What is the Email of your Contact"
              required="*"
            />
            {/* Description Input */}
            <InfoInput
              value={description}
              setValue={setDescription}
              info="Any Description for your contact?"
              required=""
            />
            {/* Add Button */}
            <div className="flex justify-center">
              <button className="btn btn-primary" onClick={handleAddressEntry}>
                Kontakt hinzufügen
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
