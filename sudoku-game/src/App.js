import "./App.css";
import Title from "./Components/Title";
import NewButton from "./Components/NewButton";
import SolutionButton from "./Components/SolutionButton";
import SubmitButton from "./Components/SubmitButton";
import Grid from "./Components/Grid";
import styled from "styled-components";
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
		setToggleSolutionState(false);
		setNewGameEasyState(true);
		setNewGameMediumState(false);
		setNewGameHardState(false);
	};
	const newGameMedium = () => {
		setToggleSolutionState(false);
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
			return "Easy";
		} else if (newGameMediumState) {
			return "Medium";
		} else if (newGameHardState) {
			return "Hard";
		}
	};

	const Difficulty = styled.h2`
		padding-bottom: 1%;
	`;

	return (
		<div className="App">
			<Title />
			<Difficulty>Level: {newDifficulty()}</Difficulty>
			<NewButton newGameEasy={newGameEasy} newGameMedium={newGameMedium} newGameHard={newGameHard} />
			<SolutionButton toggleSolution={toggleSolution} />
			<SubmitButton />
			<Grid toggleSolutionState={toggleSolutionState} setToggleSolutionState={setToggleSolutionState} newDifficulty={newDifficulty()} />
		</div>
	);
}

export default App;
