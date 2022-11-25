import React from 'react';
import { useState } from "react";

function ContactsPage(props) {

  const [contact, setContact] = useState("");

  const changeInput = (event) => {
    setContact(event.target.value);
  }

  const addContact = () => {
    console.log(contact);
    setContact("");
  }

  const clearContact = () => {
    setContact("");
  }

  return (
    <>
      <input type="text" value={contact}
             onChange={changeInput}/>
      <button onClick={addContact}>add</button>
      <button onClick={clearContact}>clear</button>
    </>
  );
}

export default ContactsPage;