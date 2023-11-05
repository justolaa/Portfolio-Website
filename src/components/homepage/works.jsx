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
							    src={require('../image/Google.png')}
								alt="Google"
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
								src={require('../image/coursera.png')}
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
