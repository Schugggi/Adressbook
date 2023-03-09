import React from "react";

const AddressList = ({ contacts }) => {
  return (
    <>
      <div>AddressList</div>
      {contacts?.length > 0 ? 
        <div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Number</th>
                <th>Email</th>
                <th>Description</th>
              </tr>
            </thead>
            {contacts.map((contact, index) => 
              <tr key={contact.id}>
                <td>{index + 1}</td>
                <td>{contact.name}</td>
                <td>{contact.number}</td>
                <td>{contact.email}</td>
                <td>{contact.description}</td>
              </tr>
            )}
          </table>
        </div> 
       : (
        <div>No contacts found.</div>
      )}
    </>
  );
};

export default AddressList;
