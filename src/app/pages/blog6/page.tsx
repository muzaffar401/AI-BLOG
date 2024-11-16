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
                                Creating Stunning Visuals with Figma
                            </h1>

                            <Image
                                src="/post-6.jpg"
                                alt="Post Header Image"
                                className="header-img"
                                width={800}
                                height={450}
                            />
                        </div>
                    </section>

                    <section className="post-content post-container">
                        <h2 className="sub-heading">Creating Stunning Visuals with Figma</h2>
                        <p className="post-text">
                            Figma has emerged as one of the most powerful and popular tools for designing stunning visuals in the digital space. It’s a browser-based UI/UX design tool that allows designers to create and collaborate on design projects seamlessly. With its user-friendly interface and real-time collaboration features, Figma has become the go-to choice for many professionals working on web and mobile applications, as well as branding and marketing materials.
                        </p>
                        <p className="post-text">
                            One of the key strengths of Figma is its versatility. Designers can create wireframes, high-fidelity prototypes, and interactive user interfaces all within one platform. The ability to design, prototype, and share in real time makes it easy to iterate quickly and gather feedback. Whether you’re working solo or as part of a team, Figma’s cloud-based nature ensures that you’re always working with the latest version of your project.
                        </p>
                        <h2 className="sub-heading">Figma’s Collaborative Power</h2>
                        <p className="post-text">
                            Collaboration is at the heart of Figma’s design process. Designers, developers, and stakeholders can work together in real-time, eliminating the need for version control problems and allowing for faster decision-making. The tool’s commenting feature makes it easy to leave feedback, while its simple design system helps ensure consistency across all parts of the project. This collaborative environment is ideal for remote teams and those who require constant input from multiple parties.
                        </p>
                        <p className="post-text">
                            Additionally, Figma offers extensive libraries and design systems that enable designers to work efficiently by reusing components, styles, and assets across different projects. By using reusable assets and components, teams can ensure that their designs remain consistent and cohesive throughout the project’s lifecycle.
                        </p>
                        <p className="post-text">
                            In conclusion, Figma has transformed the way designers create and collaborate. Its ease of use, powerful design capabilities, and real-time collaboration features make it an indispensable tool for anyone looking to create stunning visuals and exceptional user experiences. Whether you’re designing a website, mobile app, or branding materials, Figma provides all the tools you need to bring your vision to life.
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
