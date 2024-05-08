import React from 'react';

const ContactLogo = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <img
        src="contact_logo.png"
        alt="Contact logo"
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />

      {isOpen && (
        <div>
          <h2>Contact Information</h2>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ContactLogo;