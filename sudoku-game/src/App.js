import "./App.css";
import Title from "./Components/Title";
import NewButton from "./Components/NewButton";
import SolutionButton from "./Components/SolutionButton";
import SubmitButton from "./Components/SubmitButton";
import Grid from "./Components/Grid";
import { useState } from "react";

function App() {
	const [toggleSolutionState, setToggleSolutionState] = useState(false);
	const toggleSolution = () => {
		setToggleSolutionState(!toggleSolutionState);
	};
	return (
		<div className="App">
			{console.log(toggleSolutionState)}
			<Title />
			<NewButton />
			<SolutionButton toggleSolution={toggleSolution} />
			<SubmitButton />
			<Grid toggleSolutionState={toggleSolutionState} />
		</div>
	);
}

export default App;
