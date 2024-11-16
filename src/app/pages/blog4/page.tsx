"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import $ from "jquery"; // Install jQuery with `npm install jquery`

const PostPage: React.FC = () => {
    useEffect(() => {
        // Filter functionality
        $(document).ready(function () {
            $(".filter-item").click(function () {
                const value = $(this).attr("data-filter");
                if (value === "all") {
                    $(".post-box").show(1000);
                } else {
                    $(".post-box").not("." + value).hide(1000);
                    $(".post-box").filter("." + value).show(1000);
                }
            });
            // Active filter toggle
            $(".filter-item").click(function () {
                $(this).addClass("active-filter").siblings().removeClass("active-filter");
            });
        });

        // Shadow toggle for header on scroll
        const header = document.querySelector("header");
        const handleScroll = () => {
            if (header) {
                header.classList.toggle("shadow", window.scrollY > 0);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <html lang="en">
                <head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Document</title>
                    <link
                        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                        rel="stylesheet"
                    />
                </head>
                <body>
                    <header>
                        <div className="nav container">
                            <a href="/" className="logo">
                                AI <span>Blog</span>
                            </a>

                            <a href="#" className="login">
                                Login
                            </a>
                        </div>
                    </header>

                    <section className="post-header">
                        <div className="header-content post-container">
                            <a href="/" className="back-home">
                                Back to Home
                            </a>

                            <h1 className="header-title">
                                Mastering UX Design with Adobe XD
                            </h1>

                            <Image
                                src="/post-4.jpg"
                                alt="Post Header Image"
                                className="header-img"
                                width={800}
                                height={450}
                            />
                        </div>
                    </section>

                    <section className="post-content post-container">
                        <h2 className="sub-heading">Mastering UX Design with Adobe XD</h2>
                        <p className="post-text">
                            Adobe XD has become one of the most popular tools for creating exceptional UX designs. It offers a powerful platform that allows designers to create, prototype, and share their design ideas seamlessly. With its intuitive interface and extensive feature set, Adobe XD helps designers streamline their workflow and collaborate with ease. Whether you're creating wireframes, high-fidelity designs, or interactive prototypes, Adobe XD can support every stage of the design process.
                        </p>
                        <p className="post-text">
                            One of the key features of Adobe XD is its ability to create responsive designs. With artboards for different screen sizes, designers can easily create designs that adapt to various devices, from mobile phones to desktops. This flexibility is crucial in today’s multi-device world, where users expect seamless experiences across platforms.
                        </p>
                        <h2 className="sub-heading">Creating Best UX Designs</h2>
                        <p className="post-text">
                            To create the best UX designs, it's essential to understand user needs and behaviors. Using Adobe XD’s user experience design tools, designers can build user personas, map out user journeys, and define interactions that make the product intuitive and easy to navigate. By testing prototypes and iterating designs based on user feedback, designers can refine the experience to ensure it meets user expectations.
                        </p>
                        <p className="post-text">
                            Adobe XD also allows for collaboration between team members. Designers, developers, and stakeholders can work together in real time, providing feedback directly within the design file. This streamlined communication helps reduce revisions and ensures everyone is on the same page throughout the project.
                        </p>
                        <p className="post-text">
                            In conclusion, mastering UX design with Adobe XD means leveraging its powerful features to create user-friendly, visually appealing, and interactive designs. By following a user-centered design process and using Adobe XD’s advanced tools, designers can ensure that their products are not only functional but also provide a delightful experience for users.
                        </p>
                    </section>


                    <div className="share post-container">
                        <span className="share-title">Share this article</span>
                        <div className="social">
                            <a href="https://www.facebook.com/profile.php?id=100059563837220&mibextid=ZbWKwL">
                                <i className="bx bxl-facebook"></i>
                            </a>
                            <a href="https://x.com/Muzaffar401?t=5Oo42XPN4flIP3PEomc2Vg&s=09">
                                <i className="bx bxl-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/muzaffar______ahmed/?igsh=MXN5amZzcWU4eDRtZg%3D%3D">
                                <i className="bx bxl-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/muzaffar-ahmed-b8652b2a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                <i className="bx bxl-linkedin"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer container">
                        <p>&#169; AI-BLOGS All Rights Reserved</p>
                        <div className="social">
                            <a href="https://www.facebook.com/profile.php?id=100059563837220&mibextid=ZbWKwL">
                                <i className="bx bxl-facebook"></i>
                            </a>
                            <a href="https://x.com/Muzaffar401?t=5Oo42XPN4flIP3PEomc2Vg&s=09">
                                <i className="bx bxl-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/muzaffar______ahmed/?igsh=MXN5amZzcWU4eDRtZg%3D%3D">
                                <i className="bx bxl-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/muzaffar-ahmed-b8652b2a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                <i className="bx bxl-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </body>
            </html>
        </>
    );
};

export default PostPage;
