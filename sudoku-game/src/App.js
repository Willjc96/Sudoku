import "./App.css";
import Title from "./Components/Title";
import NewButton from "./Components/NewButton";
import SolutionButton from "./Components/SolutionButton";
import SubmitButton from "./Components/SubmitButton";
import Grid from "./Components/Grid";
import { useState } from "react";

function App() {
	const [toggleSolutionState, setToggleSolutionState] = useState(false);
	const [newGameEasyState, setNewGameEasyState] = useState(true);
	const [newGameMediumState, setNewGameMediumState] = useState(false);
	const [newGameHardState, setNewGameHardState] = useState(false);
	const toggleSolution = () => {
		setToggleSolutionState(!toggleSolutionState);
	};
	const newGameEasy = () => {
		setNewGameEasyState(true);
		setNewGameMediumState(false);
		setNewGameHardState(false);
	};
	const newGameMedium = () => {
		setNewGameEasyState(false);
		setNewGameMediumState(true);
		setNewGameHardState(false);
	};
	const newGameHard = () => {
		setNewGameEasyState(false);
		setNewGameMediumState(false);
		setNewGameHardState(true);
	};

	const newDifficulty = () => {
		if (newGameEasyState) {
			return "easy";
		} else if (newGameMediumState) {
			return "medium";
		} else if (newGameHardState) {
			return "hard";
		}
	};

	return (
		<div className="App">
			<Title />
			<NewButton newGameEasy={newGameEasy} newGameMedium={newGameMedium} newGameHard={newGameHard} />
			<SolutionButton toggleSolution={toggleSolution} />
			<SubmitButton />
			<Grid toggleSolutionState={toggleSolutionState} newDifficulty={newDifficulty()} />
		</div>
	);
}

export default App;
