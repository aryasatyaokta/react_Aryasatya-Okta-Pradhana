import React from 'react'
import { Link } from 'react-router-dom';
import '../Main.css';
import Hero from '../assets/hero.png';
import Circle from '../assets/circle.png';

export default function LandingPage() {

  return (
    <> 
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <a className="navbar-brand">Simple Header</a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a
                    className="btn btn-sm btn-hover nav-link"
                    aria-current="page"
                    href="#"
                    >
                    Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Features
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Pricing
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">FAQs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    About
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        {/* main */}
        <main className="contents">
            <div className="row">
            <div className="content-wrapper">
                <div style={{ marginLeft: "auto", marginTop: "15rem" }}>
                <h1>Better Solutions For Your Business</h1>
                <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                    We are team of talented designers making website with Bootstrap
                </p>
                <button id="subStart" type="submit">
                    Get Started
                </button>
                <button id="subWatch" type="submit">
                    Watch Video
                </button>
                <Link to="/create-product">
                    <button className="btn btn-primary text-white">Create Product</button>
                </Link>
                </div>
                <img className="img-landing" src={Hero} alt="" srcSet="" />
            </div>
            <div className="content-two-wrapper">
                <h1>Join Our Newslatter</h1>
                <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster magna
                </p>
                <div className="content-join">
                <input type="text" />
                <br />
                <br />
                <button>Get Started</button>
                </div>
            </div>
            </div>
        </main>
        {/* footer */}
        <footer>
            <div className="grid-container">
            <div className="grid-item-one">
                <h2>ARSHA</h2>
                <p>A108 Adam Street New York, NY 535022 United States</p>
                <p>
                <b>Phone:</b>+1 5589 55488 55
                </p>
                <p></p>
                <p>
                <b>Email: </b>info@example.com
                </p>
                <p></p>
            </div>
            <div className="grid-item-two">
                <h2>Useful Links</h2>
                <p>
                <a href="#">Home</a>
                </p>
                <p>
                <a href="#">About us</a>
                </p>
                <p>
                <a href="#">Services</a>
                </p>
                <p>
                <a href="#">Terms of Service</a>
                </p>
                <p>
                <a href="#">Privacy Policy</a>
                </p>
            </div>
            <div className="grid-item-three">
                <h2>Our Service</h2>
                <p>Web Design</p>
                <p>Web Development</p>
                <p>Product Management</p>
                <p>Marketing</p>
                <p>Graphic Design</p>
            </div>
            <div className="grid-item-four">
                <h2>Our Social Networks</h2>
                <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna derita
                valies
                </p>
                <div className="crcl">
                <img src={Circle} alt="" />
                <img src={Circle} alt="" />
                <img src={Circle} alt="" />
                <img src={Circle} alt="" />
                <img src={Circle} alt="" />
                </div>
            </div>
            </div>
        </footer>
        <div className="footer-down">
            <p style={{ marginRight: "auto", marginLeft: 80 }}>
            © Copyright <b>Arsha</b>. All Rights Reserved
            </p>
            <p style={{ marginLeft: "auto", marginRight: 80 }}>
            Designed by BootstrapMade
            </p>
        </div>
    </>
  )
}
