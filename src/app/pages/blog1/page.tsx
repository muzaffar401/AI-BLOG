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
                                Top Mobile Development Trends in 2024
                            </h1>

                            <Image
                                src="/post-1.jpg"
                                alt="Post Header Image"
                                className="header-img"
                                width={800}
                                height={450}
                            />
                        </div>
                    </section>

                    <section className="post-content post-container">
                        <h2 className="sub-heading">Top Mobile Development Trends in 2024</h2>
                        <p className="post-text">
                            As mobile technology continues to evolve, 2024 is expected to bring some exciting developments to the mobile app development landscape. The focus will be on improving user experience, integrating new technologies, and making mobile apps smarter, faster, and more secure. Below are the key trends shaping mobile app development this year.
                        </p>
                        <p className="post-text">
                            One of the most significant trends is the growing use of Artificial Intelligence (AI) and Machine Learning (ML) in mobile apps. These technologies allow for smarter and more personalized user experiences. AI can power features such as intelligent chatbots, personalized content recommendations, and predictive text, while ML can enhance user engagement through data-driven insights and real-time decision-making.
                        </p>
                        <h2 className="sub-heading">5G Technology and Enhanced Connectivity</h2>
                        <p className="post-text">
                            Another major trend in mobile development is the adoption of 5G technology. With faster internet speeds and lower latency, 5G will unlock new possibilities for mobile apps. This enhanced connectivity will allow for seamless video streaming, faster downloads, and real-time communication, improving the overall user experience. Developers will need to optimize apps to take advantage of 5G's capabilities for improved performance.
                        </p>
                        <p className="post-text">
                            Additionally, the rise of the Internet of Things (IoT) continues to shape mobile development. As more devices become interconnected, mobile apps are playing a crucial role in managing and controlling these devices. Apps designed for IoT will integrate with smart home systems, wearable devices, and more, providing users with a greater level of convenience and control over their environments.
                        </p>
                        <p className="post-text">
                            In terms of design, there is a strong focus on user-centric interfaces. With mobile users demanding faster, more intuitive, and visually appealing experiences, designers are embracing minimalism and responsiveness in their designs. Mobile-first design principles are becoming standard, ensuring that apps are optimized for mobile devices before being adapted for desktops or other platforms.
                        </p>
                        <p className="post-text">
                            Lastly, security continues to be a top priority in mobile app development. With the increase in cyber threats, developers are focusing on implementing advanced security measures such as biometric authentication, end-to-end encryption, and secure cloud storage to protect users' data and privacy.
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
