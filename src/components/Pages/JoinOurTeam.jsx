import React from "react";
// import ContactForm from "./ContactForm"; // Import the ContactForm component

const JoinOurTeam = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto">
                <div className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                    <h1 className="text-[#84BD00] text-xl font-bold">Join Our Team at PMT Site</h1>
                    <p>
                        Are you looking for a rewarding career in the contracting industry? PMT Site offers exciting opportunities for individuals who are passionate about construction and dedicated to excellence. Join us in building a brighter future in Nashville!
                    </p>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto pt-8 pb-12">
                <div>
                    <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        Why Choose PMT Site?
                    </h2>
                    <p>
                        At PMT Site, we value our team members and provide a supportive environment for professional growth. Here's why you should consider joining us:
                    </p>
                    <ul className="py-2 px-2 font-semibold text-lg list-disc list-inside pl-6 text-[#84BD00]">
                        <li>Opportunities for Advancement: We believe in nurturing talent and promoting from within.</li>
                        <li>Comprehensive Training: Our team members receive the training they need to excel in their roles.</li>
                        <li>Collaborative Culture: Work alongside experienced professionals and learn from the best.</li>
                        <li>Safety First: We prioritize the safety of our team members and provide the necessary resources.</li>
                        <li>Competitive Compensation: Enjoy competitive pay and benefits as part of our team.</li>
                    </ul>
                </div>
            </div>

            {/* Include the ContactForm component here */}
            {/* <ContactForm /> */}

            <div className="max-w-[1240px] mx-auto pt-8 pb-12">
                <div>
                    <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        Ready to Join PMT Site?
                    </h2>
                    <p>
                        If you're passionate about construction and ready to be a part of our growing team, we'd love to hear from you. Fill out the form below to get started on your career with PMT Site.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default JoinOurTeam;
