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
                                5 Tips for Optimizing Mobile User Experience
                            </h1>

                            <Image
                                src="/post-8.jpg"
                                alt="Post Header Image"
                                className="header-img"
                                width={800}
                                height={450}
                            />
                        </div>
                    </section>

                    <section className="post-content post-container">
                        <h2 className="sub-heading">5 Tips for Optimizing Mobile User Experience</h2>
                        <p className="post-text">
                            Mobile user experience (UX) plays a crucial role in the success of your app or website. A seamless, intuitive, and engaging experience is key to retaining users and ensuring they return. Here are five practical tips to optimize mobile UX:
                        </p>
                        <p className="post-text">
                            1. **Prioritize Mobile-First Design**: Design with a mobile-first approach by focusing on simplicity and essential features. Mobile screens are smaller, so every element should have a clear purpose and be easily accessible. Use larger fonts, simplified navigation, and compact layouts for a more user-friendly interface.
                        </p>
                        <p className="post-text">
                            2. **Improve Page Load Speed**: Users expect fast-loading apps and websites. Slow page loads can lead to high bounce rates. Compress images, optimize assets, and minimize the use of heavy scripts to ensure your app or website performs well on mobile devices.
                        </p>
                        <p className="post-text">
                            3. **Ensure Touchscreen Accessibility**: Make sure that all interactive elements are touch-friendly. Buttons and links should be large enough to be easily tapped without accidentally hitting other elements. Also, ensure that your app supports gestures, such as swiping and pinching, to make navigation more intuitive.
                        </p>
                        <p className="post-text">
                            4. **Simplify Navigation**: Mobile screens are limited in space, so effective navigation is essential. Use clear icons, concise menus, and avoid clutter. Implement sticky navigation bars and easy-to-find search features to help users quickly find what they need.
                        </p>
                        <p className="post-text">
                            5. **Optimize for One-Handed Use**: Many users access mobile apps with one hand, so design with this in mind. Place key actions (like buttons and navigation) within easy reach of the thumb. Avoid placing essential elements in the top corners where they may be difficult to tap with one hand.
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
