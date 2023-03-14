import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


export const About = (props: any) => {
    return (
        <section id="about" className="section text-white p-[2rem] sm:p-[6rem]">
            <div className="bg-aquamarine h-full w-full rounded-xl p-5 flex flex-col lg:flex-row justify-center ">
                <div
                className=" mx-auto w-full flex flex-col justify-center lg:border-r">
                    <div className="text-cyan text-center flex justify-center items-center text-[2.5rem] sm:text-[3.5rem]">
                        Michał Leśniak
                    </div>
                    <div className="text-white flex justify-center gap-5 text-[2rem] sm:text-[3rem] ">
                        <button className="hover:text-cyan">
                            <FontAwesomeIcon icon={faInstagram} />
                        </button>
                        <button className="hover:text-cyan">
                            <FontAwesomeIcon icon={faGithub} />
                        </button>
                        <button className="hover:text-cyan">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </button>

                    </div>
                </div>
                <div 
                className="p-5 sm:mx-auto w-full text-center flex flex-col justify-center items-center sm:text-[1.2rem] lg:border-l">
                    <div className="flex flex-col justify-center items-center flex-1">
                        <span className="text-[1.5rem]" >Hello!</span>
                        <span className="text-[1rem] sm:text-[1.5rem]">Nice to see you on my page! </span>
                        
                       <span className="text-[0.8rem] sm:text-[1.2rem] pt-5 sm:p-5">
                        I am a student at Wroclaw University of science. I'm in 3rd-year Control Engineering and Robotics. 
                        Since last year I'm learning how to develop web services. 
                        I will become a Frontend developer, I use React and Angular Framework. 
                        I am passionate about gym training, boxing, cars, and motorcycle. 
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}