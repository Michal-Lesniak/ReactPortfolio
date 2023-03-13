import Img1 from "../assets/work1.jpg";
import ContactForm from "./ContactForm";

export const Contact = () => {
    return (
        <section id="contact" className="section text-gray mt-48 flex flex-col">
             <div className='text-cyan text-[75px] md:text-[100px] text-center font-bold'>
            Contact me!
             </div>
           <ContactForm/>
        </section>
    );   
}