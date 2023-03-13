import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const About = (props:any) => {
    return (
        <section id="about" className={` ${props.isHovered ? "" : "" } section text-white p-[100px]` }>
            <div className="bg-aquamarine h-full w-full rounded-xl p-5 flex flex-col lg:flex-row justify-center ">
                <div className=" mx-auto w-full flex flex-col justify-center lg:border-r-2">
                    <div className="text-cyan justify-center items-center flex text-[48px]">
                       Michał Leśniak
                    </div>
                    <div className="text-white flex justify-center gap-5 text-[30px] ">
                        <button className="hover:text-cyan">
                            <FontAwesomeIcon icon={faInstagram} />
                        </button>
                        <button className="hover:text-cyan">
                            <FontAwesomeIcon icon={faGithub } />
                        </button>
                        <button className="hover:text-cyan">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </button>
                        
                    </div>
                </div>
                <div className="p-5 mx-auto w-full text-center flex flex-col justify-center items-center">
                    <span>Hello!</span>
                    <span>Nice to see you at my page! </span>


                    <span className="p-5">I am student of Wroclaw Unieversity of science. Im on 3rd year Automatics and Robotics Enginnering. 
                     Since last year im learning how develop web services. Im passionate about gym training, box, cars and bike.</span>
                 </div>
                
            </div>
        </section>
    );   
}