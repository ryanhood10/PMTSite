import React from "react";
import Team from '../../images/team.jpeg'
import Team2 from '../../images/team2.png'

// import ContactForm from "./ContactForm"; // Import the ContactForm component

const JoinOurTeam = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto">
                <div className="md:text-xl sm:text-lg font-bold py-2">
                    <h1 className="text-[#84BD00] text-4xl py-2 font-bold">Construction Careers | Join Our Team at PMT Site.</h1>
                    <p>
                        Are you looking for a rewarding career in the contracting industry?
                        <br/>
                         PMT Site offers exciting opportunities for middle tennessee individuals who are passionate about construction and dedicated to excellence.
                         <br/>
                         <br/>
                          Join us in building a brighter future in Nashville!
                    </p>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto flex pt-8 pb-2 space-x-8">
            <img src={Team2} className="h-64 rounded-3xl"></img>
                <div>
                    <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        Why Choose PMT Site?
                    </h2>
                    <p>
                        At PMT Site, we value our team members and provide a supportive environment for professional growth. Here's why you should consider joining us:
                    </p>
                    <ul className="py-2 px-2 font-semibold text-lg list-disc list-inside pl-6 text-[#84BD00]">
                        <li><span className="font-bold">Great Company Culture:</span> Enjoy a positive and collaborative work environment.</li>
                        <li><span className="font-bold">Competitive Pay:</span> We offer competitive salaries and benefits.</li>
                        <li><span className="font-bold">Quality Benefits:</span> Access high-quality benefits for you and your family.</li>
                        <li><span className="font-bold">Opportunities to Grow Internally:</span> We encourage growth and advancement within the organization.</li>
                    </ul>
                <p><a href='/NuestroEquipo' className="text-xl text-blue-400 font-bold hover:text-blue-600">"¿Hablas español? Haz clic aquí."</a></p>
                </div>
            </div>


        </div>
    );
}

export default JoinOurTeam;
