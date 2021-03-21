import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Info from "./Components/Info";
import Skill from "./Components/Skill";
import Footer from "./Components/Footer";

function App() {
	return (
		<div className="App">
			<div>
				<Navbar />
				<Header />
				<Info title="About" name="Rashid Ybarm" feature="33 years old & Male" image1="images//about.jpg" image2="images//about1.jpg" />
				<Info
					title="Experince"
					experince="Web developer"
					experince1="IT consultant"
					image1="images//experience.jpg"
					image2="images//experience1.jpg"
				/>
				<Info
					title="Education"
					edu="Dokuz Eylul Universty"
					edu1="Anatolian Universty"
					image1="images//universty.jpg"
					image2="images//universty1.jpg"
				/>
				<Skill title="General" />
				<Footer title="Contact" title1="Skills" />
			</div>
		</div>
	);
}

export default App;
