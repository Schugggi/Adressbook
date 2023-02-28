import Head from "next/head";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function Home() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const { data: session, status } = useSession();

  function handleLogin() {
    console.log(status);
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
        <div class="flex justify-center items-center h-screen">
          <div class="space-y-4">
            <h1>Address Book</h1>
            <h2>Hello {session?.user.name}</h2>

            {/* Name Input */}
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">What is your name?</span>
                <span class="label-text-alt">*</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Number Input */}
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">
                  What is the Number of your Contact
                </span>
                <span class="label-text-alt">*</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>

            {/* Email Input */}
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">
                  What is the Email of your Contact
                </span>
                <span class="label-text-alt">*</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Description Input */}
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">
                  Any Description for your contact?
                </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Add Button */}
            <button className="btn btn-primary" onClick={handleLogin}>
              Hinzufügen
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
