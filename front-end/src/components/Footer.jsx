import React from 'react';
import { assets } from '../assets/assets';


const Footer = () => {
    return (
        <footer className="bg-gray-100 py-10">
            <div className="container mx-auto flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 text-sm px-5">
                {/* Logo and Description */}
                <div>
                    <img src={assets.logo} className="mb-0.05 w-40" alt="Company Logo" />
                    <p className="w-full md:w-3/4 text-gray-600">
                        First ever online store for virtual fitting rooms.
                    </p>
                     <p className="w-full md:w-3/4 text-gray-600">
                        Not just about clothes, but technology.
                    </p>
                     <p className="w-full md:w-3/4 text-gray-600">
                        We are a team of students from HCMUS, we are passionate about creating a better experience for fashion enthusiasts.
                    </p>
                    <p className="w-full md:w-3/4 font-semibold text-gray-800">
                        We are Fashion Fit.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="font-medium text-gray-800 mb-4">Navigation</h3>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <a href="/home" className="hover:text-gray-800 transition">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/collection" className="hover:text-gray-800 transition">
                                Collection
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-gray-800 transition">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-gray-800 transition">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="font-medium text-gray-800 mb-4">Contact Us</h3>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <a href="mailto:support@example.com" className="hover:text-gray-800 transition">
                                hcmus@student.edu.vn
                            </a>
                        </li>
                        <li>
                            <a href="tel:+1234567890" className="hover:text-gray-800 transition">
                                +1 234 567 890
                            </a>
                        </li>
                        <li>Nguyen Van Cu, District 5, Ho Chi Minh City</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-10 border-t pt-5 text-center text-gray-600 text-xs">
                <p>&copy; 2024 Fashion Fit. All Rights Reserved.</p>
                <p>Privacy Policy | Terms of Service</p>
            </div>
        </footer>
    );
};

export default Footer;
