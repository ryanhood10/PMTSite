import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { validateEmail } from '../utils/validators';
import { Link } from "react-router-dom";

function useVisible(initialVisibility = false) {
    const [isVisible, setIsVisible] = useState(initialVisibility);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        });

        const currentRef = ref.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return [ref, isVisible];
}

const fields = ['name', 'email', 'message'];

const NewsLetter = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
        
        fields.forEach((field) => {
            if (!formData[field].trim()) {
                newErrors[field] = 'Input field is required.';
            } else if (field === 'email' && !validateEmail(formData[field])) {
                newErrors[field] = 'Invalid email address.';
            }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                const emailData = {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                };
                try {
                    const response = await axios.post('https://ryans-portfolio.herokuapp.com/contact', emailData);
                    alert(response.data.message);
                } catch (error) {
                    if (error.response) {
                        console.error('Response Error:', error.response.data);
                    } else if (error.request) {
                        console.error('Request Error:', error.request);
                    } else {
                        console.error('Error:', error.message);
                    }
                    alert('Failed to send email.');
                }
                
            } catch (error) {
                console.error(error);
                alert('Failed to send email.');
            }
        }
    };

    const [newsletterRef, newsletterVisible] = useVisible();

    const animationClasses = (isVisible) => 
        `transform transition-all duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`;

    return (
        <div ref={newsletterRef} className={`w-full py-8 md:py-16 px-4 ${animationClasses(newsletterVisible)}`}>
            <div className="max-w-[1240px] mx-auto grid"> 
                <div className="">
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold py-1 md:py-2">🤖 Want to enhance efficiency and elevate customer satisfaction with a chatbot?
                    <br></br>
                    🖥️ Need a website or application developed that boosts your online presence? </h1>
                    <p>See how we can improve your business and save you time!</p>
                </div>
                <div className="my-2 md:my-4">
                    <div className="flex flex-col items-center bg-gray-50">
                        <form className="w-full" onSubmit={handleSubmit}>
                            <h1>Contact</h1>
                            {fields.map((field) => (
                                <div key={field} className="my-2">
                                    <p className="text-sm md:text-base">{field[0].toUpperCase() + field.slice(1)}:</p>
                                    {field !== 'message' ? (
                                        <input
                                            type={field === 'email' ? 'email' : 'text'}
                                            id={field}
                                            name={field}
                                            placeholder={field[0].toUpperCase() + field.slice(1)}
                                            className='p-2 md:p-3 flex w-full rounded-md bg-gray-200 text-black'
                                            value={formData[field]}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    ) : (
                                        <textarea
                                            placeholder="Message"
                                            className='p-2 md:p-3 min-h-[100px] md:min-h-[200px] flex w-full rounded-md text-black bg-gray-200'
                                            name="message"
                                            id="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                        ></textarea>
                                    )}
                                    {errors[field] && <span className="error">{errors[field]}</span>}
                                </div>
                            ))}
                            <button type="submit" className="bg-[#FF0033] w-[200px] rounded-md font-bold my-3 md:my-6 mx-auto py-2 md:py-3 text-white hover:bg-purple-300">Send Email</button>
                        </form>
                    </div>
                    <p className="text-sm md:text-base">
                        Learn more about our established techniques on our{" "}
                        <Link to="/solutions" className="text-[#FF0033]">
                            Solutions
                        </Link>{" "}
                        page.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NewsLetter;
