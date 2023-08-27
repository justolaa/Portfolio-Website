import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="certifications"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/D4E0BAQGhu6yKgqn-Tg/company-logo_200_200/0/1663665845885?e=1698883200&v=beta&t=lM4JBfJ4B9YisWOuUHp019NGLrUny--4f1TPfFVgy40"
								alt="Image"
								className="work-image"
							/>
							<div className="work-title">Google Digital Skills for Africa</div>
							<div className="work-subtitle">
								Grow With Google Africa
							</div>
							<div className="work-duration">Issued April 2021</div>
						</div>

						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_200_200/0/1608039227697?e=1698883200&v=beta&t=Ua5sEVseORmOviFdQkVqlzS1lMhNYJI75tcYbQqevEs"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">HTML, CSS and Javascript for Web Developers</div>
							<div className="work-subtitle">
								Coursera
							</div>
							<div className="work-duration">Issued December 2020</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
