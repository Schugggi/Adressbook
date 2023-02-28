import Head from "next/head";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function Home() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const { data: session, status } = useSession();

  function handleAddressEntry(){
    console.log("index.js: in handleAddressEntry")
      console.log("index.js: in handleAddressEntry : after if statement")
      fetch(`/api/AddressHandler?name=${name}&number=${number}&email=${email}&description=${description}`)
      .then((res) => {
        switch(res.status){
          case 411:
            alert("Name not Valid")
            break
          case 412:
            alert("Number not Valid")
            break
          case 413:
            alert("Email not Valid")
            break
          case 200:
            setName("")
            setNumber("")
            setEmail("")
            setDescription("")
            break
          default:
            console.log(res.status)
        }
      })
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
        <div className="flex justify-center items-center h-screen">
          <div className="space-y-4">
            <h1>Address Book</h1>
            <h2>Hello {session?.user.name}</h2>

            {/* Name Input */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">What is your name?</span>
                <span className="label-text-alt">*</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Number Input */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">
                  What is the Number of your Contact
                </span>
                <span className="label-text-alt">*</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>

            {/* Email Input */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">
                  What is the Email of your Contact
                </span>
                <span className="label-text-alt">*</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Description Input */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">
                  Any Description for your contact?
                </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Add Button */}
            <button className="btn btn-primary" onClick={handleAddressEntry}>
              Hinzufügen
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
