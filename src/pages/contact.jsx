import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import INFO from "../data/user";
import "./styles/contact.css";
import ReactGA from 'react-ga4'; 

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

const handleButtonClick = () => {
  ReactGA.event({
    category: 'Contact', // Category of the event
    action: 'Contact-Ola', // Action to describe the event
    label: 'Contact' // Optional label for more details
  });
};
	return (
		<React.Fragment>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in getting in touch with
							me. I welcome your feedback, questions, and
							suggestions. If you have a specific question,
							comment or collaboration offer, please feel free to email me directly at
							&nbsp;{" "}
							<a onClick={handleButtonClick} href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. Additionally, if you prefer to connect on
							social media, you can find me on{" "}
							<a onClick={handleButtonClick}
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.instagram}
							</a>
							. Thanks again for your interest, and I look forward
							to hearing from you!
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
