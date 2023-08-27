import React from "react";

function article_1() {
	return {
		date: "3rd August 2023",
		title: "Why you Need Custom Hooks and How to Create Custom Hooks. (React.js)",
		description:
			"It saves you the trouble of reinventing the wheel.Developers can encapsulate and reuse code within functional components by using custom Hooks in React.",
		keywords: [
			"Hooks",
			"Custom Hooks",
			"React.js",
			"Fetch",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/i71Uz2QPzpA/upload/a25d56d835fb3d119a9714dd0f8e9349.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
						alt="random"
						className="randImage"
					/>
				
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "Nil",
		title: "Nil",
		description:
			"Nil",
		style: ``,
		keywords: [
			"Nil",
			"Nil",
			"Nil",
			"Nil",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
