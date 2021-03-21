import React from "react";
import "../styles/header.css";
const Header = () => {
	return (
		<div style={{marginTop: "40px"}}>
			<img style={{width: "15%", height: "15%"}} className="mx-auto d-block rounded-circle" src="images\myAvatar (2).png" alt="profile image" />
			<p className="jobInfo">Jr. Full Stack Web Developer</p>
			<hr />
		</div>
	);
};

export default Header;
