import React from "react";
import {headTag} from "./Info";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const skillPhotos = [
	{url: "images/about1.jpg"},
	{url: "images/about.jpg"},
	{url: "images/experience.jpg"},
	{url: "images/experience1.jpg"},
	{url: "images/universty.jpg"},
	{url: "images/universty1.jpg"},
];
const Skill = (props) => {
	const settings = {
		className: "slides",
		infinite: true,
		speed: 500,
		dots: true,
		fade: true,
		slidesToShow: 1,
		arrows: true,
		slidesToScroll: 1,
	};

	return (
		<div>
			<h3 style={headTag}>{props.title}</h3>
			<Slider {...settings} style={{margin: "35px auto 55px"}}>
				{skillPhotos.map((n) => {
					return (
						<div>
							<img style={{width: "470px", height: "330", margin: "auto", borderRadius: "7px"}} src={n.url} />
						</div>
					);
				})}
			</Slider>
			<hr />
		</div>
	);
};

export default Skill;
