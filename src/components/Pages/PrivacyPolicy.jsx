import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-container bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Privacy Policy for CyberMart</h1>
            <p className="mb-4"><strong>Last Updated:</strong> 9-5-2023</p>

            <h2 className="text-xl font-semibold mt-4 mb-2">1. Introduction</h2>
            <p className="mb-4">Welcome to CyberMart. We respect the privacy of our users and are committed to protecting it. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website.</p>

            <h2 className="text-xl font-semibold mt-4 mb-2">2. Collection of Information</h2>
            <p className="mb-2">We collect personal information such as:</p>
            <ul className="list-disc pl-5 mb-4">
                <li className="mb-1">Name</li>
                <li className="mb-1">Email address</li>
                <li className="mb-1">Shipping and billing address</li>
                <li className="mb-1">Payment details</li>
                <li className="mb-1">Any other information you provide to us</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4 mb-2">3. Use of Information</h2>
            <p className="mb-2">We use the information we collect to:</p>
            <ul className="list-disc pl-5 mb-4">
                <li className="mb-1">Process and fulfill orders</li>
                <li className="mb-1">Respond to customer inquiries</li>
                <li className="mb-1">Send promotional emails (with your consent)</li>
                <li className="mb-1">Improve our website and services</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4 mb-2">4. Sharing of Information</h2>
            <p className="mb-2">We do not sell or share your personal information with third parties, except:</p>
            <ul className="list-disc pl-5 mb-4">
                <li className="mb-1">To process payments</li>
                <li className="mb-1">To deliver products</li>
                <li className="mb-1">When required by law</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4 mb-2">5. Cookies</h2>
            <p className="mb-2">We use cookies to:</p>
            <ul className="list-disc pl-5 mb-4">
                <li className="mb-1">Remember items in your shopping cart</li>
                <li className="mb-1">Understand how users interact with our website</li>
                <li className="mb-1">Improve user experience</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4 mb-2">6. Security</h2>
            <p className="mb-4">We implement a variety of security measures to protect your personal information, including encryption and secure servers.</p>

            <h2 className="text-xl font-semibold mt-4 mb-2">7. Third-Party Links</h2>
            <p className="mb-4">Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites.</p>

            <h2 className="text-xl font-semibold mt-4 mb-2">8. Changes to This Policy</h2>
            <p className="mb-4">We may update this Privacy Policy from time to time. Any changes will be posted on this page.</p>

            <h2 className="text-xl font-semibold mt-4 mb-2">9. Contact Us</h2>
            <p className="mb-4">If you have questions about this Privacy Policy, please contact us at <a href="mailto:connect@akirawebsolutions.com" className="text-blue-500 hover:underline">connect@akirawebsolutions.com</a>.</p>
        </div>
    );
}

export default PrivacyPolicy;
