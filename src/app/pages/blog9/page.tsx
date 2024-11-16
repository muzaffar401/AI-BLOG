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
                                Designing for Accessibility
                            </h1>

                            <Image
                                src="/post-9.jpg"
                                alt="Post Header Image"
                                className="header-img"
                                width={800}
                                height={450}
                            />
                        </div>
                    </section>

                    <section className="post-content post-container">
                        <h2 className="sub-heading">Designing for Accessibility</h2>
                        <p className="post-text">
                            Designing for accessibility ensures that digital products are usable by people with various disabilities, including those with visual, auditory, motor, and cognitive impairments. It is essential to make websites and applications inclusive, providing an equal user experience for everyone.
                        </p>
                        <p className="post-text">
                            One of the foundational principles of accessible design is ensuring proper color contrast. Poor contrast between text and background colors can make it difficult for users with visual impairments to read content. Use high-contrast color schemes to enhance readability and reduce eye strain.
                        </p>
                        <h2 className="sub-heading">Key Accessibility Features</h2>
                        <p className="post-text">
                            Another critical aspect is providing text alternatives for non-text content. This includes using descriptive alt text for images, ensuring that screen readers can describe the content effectively. Video content should also include captions and transcripts for those with hearing impairments.
                        </p>
                        <p className="post-text">
                            Additionally, keyboard navigation is an essential feature for users with motor impairments. Ensure that your website or app is fully navigable via the keyboard, offering an alternative to mouse-based navigation. This can involve logical tabbing, accessible form fields, and clear focus indicators.
                        </p>
                        <p className="post-text">
                            In conclusion, designing for accessibility benefits everyone. By making products usable by people with disabilities, you improve the overall user experience, increase audience reach, and comply with accessibility standards and regulations.
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
