import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div>
					<h2> Input Format </h2>
					<p>
						First line contains <span>N.N</span> lines follow, each
						having a PAN number.
					</p>
					<h2> Constraints </h2>
					<li className="App-link">
						<span>1≤N≤10</span>
					</li>
					<li className="App-link">
						Each char is an uppercase letter,i.e.,
						<span>char ∈ ['A','Z'].</span>
					</li>
					<li className="App-link">
						Each digit lies between 0 und 9, i.e.,
						<span>digit ∈ [0,9].</span>
					</li>
					<li className="App-link">
						The lenght of the PAN number is always 10, i.e.,
						<span>length (PAN)=10</span>
					</li>
					<li className="App-link">
						Every character in PAN is either char or digit
						satisfying the above constraints.
					</li>
					<h2> Output Format </h2>
					<p>
						For every PAN number listed, print YES if it is valid
						and NO if it isn't.
					</p>
				</div>
			</header>
		</div>
	);
}

export default App;
