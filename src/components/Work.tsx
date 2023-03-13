import Img1 from "../assets/work1.jpg";

export const Work = () => {
    return (
        <section id="work" className="md:pt-[50px]">
            <div className="text-white/80 grid xl:grid-cols-2  lg:h-full w-full">
                <div className="grid xl:grid-cols-1 md:grid-cols-2 lg:h-fit lg:mt-20">
                    <div className="flex xl:col-span-3 flex-col justify-center items-center ">
                        <img className="h-[400px] w-[350px] " src={Img1} alt=""/>  
                        <button className="pt-5 text-gray hover:text-cyan">{"<Read More/>"}</button>
                    </div>
                    <div className="xl:col-span-2 flex flex-col items-left py-10 px-10">
                        <div className="text-gray font-bold text-[30px] mx-auto">
                            Title of Project
                        </div>
                        <div className="text-gray text-center pt-10 md:pr-10 xl:px-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ducimus blanditiis incidunt aliquam, consectetur repudiandae distinctio vero maiores ut dicta sunt accusamus ea assumenda doloribus voluptatibus laudantium ab molestias perspiciatis.
                        </div>
                        <div className="hidden md:flex xl:hidden 2xl:flex md:flex-col text-gray pt-10">
                            <span className="font-bold text-[20px] 2xl:mx-auto">Skills:</span>
                            <ul className="list-disc pl-5  2xl:flex 2xl:gap-x-10 2xl:justify-center">
                                <li>
                                    Spring
                                </li>
                                <li>
                                    React
                                </li>
                                <li>
                                    Css/Html
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid xl:grid-cols-1 md:grid-cols-2 lg:h-fit lg:mt-20 mt-20">
                    <div className="flex xl:col-span-3 flex-col justify-center items-center ">
                        <img className="h-[400px] w-[350px] " src={Img1} alt=""/>  
                        <button className="pt-5 text-gray hover:text-cyan">{"<Read More/>"}</button>
                    </div>
                    <div className="xl:col-span-2 flex flex-col items-left py-10 px-10">
                        <div className="text-gray font-bold text-[30px] mx-auto">
                            Title of Project
                        </div>
                        <div className="text-gray text-center pt-10 md:pr-10 xl:px-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ducimus blanditiis incidunt aliquam, consectetur repudiandae distinctio vero maiores ut dicta sunt accusamus ea assumenda doloribus voluptatibus laudantium ab molestias perspiciatis.
                        </div>
                        <div className="hidden md:flex xl:hidden 2xl:flex md:flex-col text-gray pt-10">
                            <span className="font-bold text-[20px] 2xl:mx-auto">Skills:</span>
                            <ul className="list-disc pl-5  2xl:flex 2xl:gap-x-10 2xl:justify-center">
                                <li>
                                    Spring
                                </li>
                                <li>
                                    React
                                </li>
                                <li>
                                    Css/Html
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );   
}