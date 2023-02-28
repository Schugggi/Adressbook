const { default: NavBar } = require("./components/NavBar");
const { default: AddressList } = require("./components/AddressList");
import { useState } from 'react';

export default function AddressListPage(){
    const [contacts, setContacts] = useState([]);
    
    useEffect(() => {
        setContacts(fetchContacts())
      }, []);

    return(
        <div>
            <header>

            </header>
            <NavBar></NavBar>
            <div>
                <AddressList contacts={contacts}></AddressList>
            </div>
        </div>
    );
}