import ContactForm from "./ContactForm";
import React from "react";


export const Contact = () => {
    return (
        <section id="contact" className="section text-gray py-14 lg:mt-48 flex flex-col">
             <div data-aos="fade-down" className='text-cyan text-[3rem] md:text-[8rem] text-center font-bold'>
            Contact me!
             </div>
           <ContactForm/>
        </section>
    );   
}