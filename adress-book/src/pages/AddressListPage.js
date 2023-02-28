const { default: NavBar } = require("./components/NavBar");
const { default: AddressList } = require("./components/AddressList");
import { useSession } from "next-auth/react";
import { useState } from "react";

const { data: session, status } = useSession();

export default function AddressListPage() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch(`/api/AddressExitHandler`);
  }, []);

  useEffect(() => {
    setContacts(fetchContacts());
  }, []);

  if (status === "unauthenticated") {
    window.location.replace("api/auth/signin");
  }

  return (
    <div>
      <header></header>
      <NavBar></NavBar>
      <div>
        <AddressList contacts={contacts}></AddressList>
      </div>
    </div>
  );
}
