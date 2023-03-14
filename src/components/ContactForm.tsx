import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // do something with the form data (e.g. send an email)
    console.log({ name, email, message });
    // reset the form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
         <form data-aos="fade-up" onSubmit={handleSubmit} className="m-[1rem] md:my-[5rem] border rounded p-12 sm:w-[500px] ">
      <div className="mb-4">
        <label htmlFor="name" className="block font-bold mb-2">
          Name:
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-transparent border-b focus:border-b-cyan w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block  font-bold mb-2">
          Email:
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent appearance-none border-b focus:border-b-cyan w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block font-bold mb-2">
          Message:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-transparent border-b py-2 px-3 outline-none w-full
                        placeholder:text-white focus:border-cyan transition-all
                        resize-none mb-12"
          rows={5}
          required
        ></textarea>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className=" text-gray hover:text-cyan font-bold py-2 px-4 "
        >
          {"<Submit/>"}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;