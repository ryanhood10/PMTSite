import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return [ref, isVisible];
}

function Footer() {
    const [footerRef, footerVisible] = useVisible();

    const animationClasses = (isVisible) => 
        `transform transition-all duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`;

    return (
        <footer ref={footerRef} className={`max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-600 ${animationClasses(footerVisible)}`}>
            <div className='lg:col-span-3 flex justify-between space-x-10'>
                <div>
                <h1 className='text-[#84BD00] font-bold text-4xl text-center'> Connect with us Further  </h1>
                    <p className='py-4'>
                    Connect with us on LinkedIn, Facebook, or send us an email at:   
                    <a href="pterhaar@pmtsite.com" className='text-[#001489] font-bold'>
                    pterhaar@pmtsite.com
                    </a>
                    </p>

                    <nav>
                        <ul className="flex justify-between md:w-[75%] my-6">
                            <li>
                                <Link to="/Contact">
                                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='lg:col-span-3 flex justify-between'>
                    <div>
                        <Link to="/solutions" className="text-[#001489] text-xl font-bold">
                            Solutions
                        </Link>
                        <ul>
                            <li className='py-2 text-sm'>Electrical Services</li>
                            <li className='py-2 text-sm'>Plumbing and HVAC Services</li>
                            <li className='py-2 text-sm'>Carpentry Services</li>
                            <li className='py-2 text-sm'>Project Management</li>
                            <li className='py-2 text-sm'>General Contracting</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
