import React from "react";

const AddressList = ({ contacts }) => {
  return (
    <>
      <div className="flex justify-center items-center text-center h-screen">
        <div className="space-y-4">
          <h1 className="font-bold text-5xl">AddressList</h1>
          {contacts?.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head*/}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Email</th>
                    <th>Description</th>
                  </tr>
                </thead>
                {contacts.map((contact, index) => (
                  <tr key={contact.id} className="active">
                    <td>{index + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.number}</td>
                    <td>{contact.email}</td>
                    <td>{contact.description}</td>
                  </tr>
                ))}
              </table>
            </div>
          ) : (
            <div>No contacts found.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddressList;
