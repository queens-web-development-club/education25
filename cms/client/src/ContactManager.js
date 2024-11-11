import React, { useState, useEffect } from 'react';

function ContactManager() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await fetch('/contacts');
      const data = await response.json();
      setContacts(data);
    };
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/contacts/${id}`, { method: 'DELETE' });
    setContacts(contacts.filter(contact => contact._id !== id));
  };

  return (
    <div className="contact-manager">
      <h3>Contacts</h3>
      <button>Add New Contact</button>
      {contacts.map(contact => (
        <div key={contact._id} className="contact-item">
          <p>Name: {contact.firstName} {contact.lastName}</p>
          <p>Subject: {contact.subject}</p>
          <button onClick={() => handleDelete(contact._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ContactManager;
