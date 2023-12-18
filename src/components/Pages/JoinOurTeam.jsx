import React from "react";
// import ContactForm from "./ContactForm"; // Import the ContactForm component

const JoinOurTeam = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto">
                <div className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                    <h1 className="text-[#84BD00] text-xl font-bold">Join Our Team at PMT Site</h1>
                    <p>
                        Are you looking for a rewarding career in the contracting industry?
                        <br/>
                         PMT Site offers exciting opportunities for individuals who are passionate about construction and dedicated to excellence. Join us in building a brighter future in Nashville!
                    </p>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto pt-8 pb-2">
                <div>
                    <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        Why Choose PMT Site?
                    </h2>
                    <p>
                        At PMT Site, we value our team members and provide a supportive environment for professional growth. Here's why you should consider joining us:
                    </p>
                    <ul className="py-2 px-2 font-semibold text-lg list-disc list-inside pl-6 text-[#84BD00]">
                        <li>Great Company Culture: Enjoy a positive and collaborative work environment.</li>
                        <li>Competitive Pay: We offer competitive salaries and benefits.</li>
                        <li>Quality Benefits: Access high-quality benefits for you and your family.</li>
                        <li>Opportunities to Grow Internally: We encourage growth and advancement within the organization.</li>
                    </ul>
                </div>
            </div>

            {/* Include the ContactForm component here */}
            {/* <ContactForm /> */}

        </div>
    );
}

export default JoinOurTeam;
