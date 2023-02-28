const { default: NavBar } = require("./components/NavBar");
const { default: AddressList } = require("./components/AddressList");
import { useState } from 'react';

export default function AddressListPage(){
    const [contacts, setContacts] = useState([]);
    return(
        <div>
            <header>

            </header>
            <NavBar></NavBar>
            <div>
                <AddressList></AddressList>
            </div>
        </div>
    );
}