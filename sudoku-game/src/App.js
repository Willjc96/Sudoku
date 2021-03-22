import "./App.css";
import Title from "./Components/Title";
import NewButton from "./Components/NewButton";
import SolutionButton from "./Components/SolutionButton";
import SubmitButton from "./Components/SubmitButton";
import Grid from "./Components/Grid";

function App() {
	return (
		<div className="App">
			<Title />
			<NewButton />
			<SolutionButton />
			<SubmitButton />
			<Grid />
		</div>
	);
}

export default App;
