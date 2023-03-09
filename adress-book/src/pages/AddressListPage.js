const { default: NavBar } = require("./components/NavBar");
const { default: AddressList } = require("./components/AddressList");
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";


export default function AddressListPage() {
  const { data: session, status } = useSession();
  const [contacts, setContacts] = useState([]);

  function fetchContacts() {
    return fetch("/api/AddressExitHandler")
      .then(res => res.json())
      .catch(err => console.log(err))
  };
  
  useEffect(() => {
    fetchContacts()
      .then(data => setContacts(data))
  }, []);
  
  console.log(contacts)
  

  if (status === "unauthenticated") {
    window.location.replace("api/auth/signin");
  }

  return (
    <div>
      <header></header>
      <NavBar></NavBar>
      <div>
        <AddressList contacts={contacts.data}></AddressList>
      </div>
    </div>
  );
}
