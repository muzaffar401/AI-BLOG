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
                                Blockchain Beyond Cryptocurrency
                            </h1>

                            <Image
                                src="/post-7.jpg"
                                alt="Post Header Image"
                                className="header-img"
                                width={800}
                                height={450}
                            />
                        </div>
                    </section>

                    <section className="post-content post-container">
                        <h2 className="sub-heading">Blockchain Beyond Cryptocurrency</h2>
                        <p className="post-text">
                            While blockchain technology is often associated with cryptocurrency, its applications extend far beyond digital currencies. Blockchain is a decentralized, distributed ledger that ensures transparency, security, and immutability of data. This makes it suitable for a wide range of industries, from healthcare to supply chain management, finance, and even voting systems. The potential of blockchain is enormous, and its ability to revolutionize how data is stored and shared is just beginning to be fully realized.
                        </p>
                        <p className="post-text">
                            One key area where blockchain is making an impact is in supply chain management. By using blockchain to track products and verify transactions, companies can ensure the authenticity and quality of goods from the point of origin to the final consumer. This provides transparency and can help prevent fraud, reduce costs, and improve efficiency in global supply chains.
                        </p>
                        <h2 className="sub-heading">Blockchain in Healthcare</h2>
                        <p className="post-text">
                            In the healthcare industry, blockchain has the potential to improve patient care and data security. With blockchain, patient records can be stored in a secure, immutable manner, making it easier for healthcare providers to access up-to-date and accurate medical histories. This can reduce errors, improve diagnosis accuracy, and enhance overall care coordination. Additionally, blockchain can streamline billing and insurance processes, ensuring faster claims processing and preventing fraudulent claims.
                        </p>
                        <p className="post-text">
                            Another promising application of blockchain is in digital identity management. With traditional identity systems, personal data is often centralized, making it vulnerable to hacking and unauthorized access. Blockchain-based solutions offer a decentralized approach, allowing individuals to maintain control of their identity and securely share personal information when needed. This has the potential to improve privacy and reduce identity theft.
                        </p>
                        <p className="post-text">
                            In conclusion, blockchain technology offers far more than just cryptocurrency. Its ability to securely and transparently record transactions is opening up new possibilities across various industries. Whether it’s improving supply chains, securing healthcare data, or enabling decentralized identity management, blockchain is proving to be a transformative technology with the potential to change the way we live and do business.
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
