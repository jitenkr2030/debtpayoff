import React, { useState } from 'react';
import { contactSupport } from '../../services/supportService';

const ContactSupport = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleContactSupport = async (e) => {
    e.preventDefault();
    try {
      await contactSupport({ subject, message });
      // Optionally, reset form fields or show success message
    } catch (error) {
      console.error('Failed to contact support', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
      <h2>Contact Support</h2>
      <form onSubmit={handleContactSupport}>
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactSupport;
