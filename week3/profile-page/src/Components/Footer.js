import React from "react";
import {headTag} from "./Info";

const inputStyle = {
	width: "100%",
	height: "60%",
	margin: "auto",
};

const Footer = (props) => {
	return (
		<div style={{width: "80%", margin: "auto"}}>
			<div className="row">
				<form className="col-lg-6" action="/compose" method="post">
					<h3 style={headTag}>{props.title}</h3>
					<div className="form-group m-3">
						<label>Name</label>
						<input type="text" className="form-control" name="composeName" autocomplete="off" style={inputStyle} />
						<label>Surname</label>
						<input type="text" className="form-control" name="composeSurname" autocomplete="off" style={inputStyle} />
						<label>E-mail</label>
						<input type="email" className="form-control" name="composeEmail" autocomplete="off" style={inputStyle} />
					</div>
					<div className="form-group m-3">
						<label>Text</label>
						<textarea className="form-control" cols="30" rows="5" name="composeContent" autocomplete="off" style={inputStyle}></textarea>
					</div>

					<button type="submit" className="btn btn-outline-primary m-3" name="button">
						Submit
					</button>
				</form>
				<div className="col-lg-6">
					<h3 style={headTag}>{props.title1}</h3>
					<img src="images\skilImage.png" style={inputStyle} alt="" />
				</div>
			</div>
			<hr />
		</div>
	);
};

export default Footer;
