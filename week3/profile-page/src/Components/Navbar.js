import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
	return (
		<div>
			{/* navbar */}
			<nav className="navbar navbar-expand-lg navbar-light">
				<a className="navbar-brand" href="#">
					<img src="images/icons8-react-native-48.png" alt="" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav m-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Experience
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link disabled" href="#">
								Education
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link disabled" href="#">
								Skills
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link disabled" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
