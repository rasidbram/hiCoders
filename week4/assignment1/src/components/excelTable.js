import React from "react";

import ReadExcell from "../services/excelService";

const Table = function () {
	return (
		<div>
			<input
				type="file"
				onChange={e => {
					const file = e.target.files[0];
					let list = ReadExcell(file);
					list.then(data => {
						data.map(person => {
							document.querySelector("#table").innerHTML += `<tr>
              <td>${person.NAME}</td>
              <td>${person.SURNAME}</td>
              <td>${person.AGE}</td>
              <td>${person.GENDER}</td>
              </tr>`;
						});
					});
				}}></input>
			<table>
				<thead>
					<th>NAME</th>
					<th>SURNAME</th>
					<th>AGE</th>
					<th>GENDER</th>
				</thead>
				<tbody id="table"></tbody>
			</table>
		</div>
	);
};

export default Table;
