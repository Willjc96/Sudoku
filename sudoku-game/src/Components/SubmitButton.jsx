import React from "react";
import { easyUpdated, easyAnswer } from "./SolutionState";
import { incorrectGuessCount } from "./Grid";
import { Button } from "evergreen-ui";
const _ = require("lodash");

export default function Buttons() {
	const resizeBtn = () => {
		if (window.innerWidth < 430) {
			return 20;
		}
		return 30;
	};

	const resizeText = () => {
		return window.innerWidth < 430 ? 15 : 20;
	};

	const answerCheck = () => {
		if (_.isEqual(easyUpdated, easyAnswer)) {
			return alert(`Congratulations you did it with only ${Math.ceil(incorrectGuessCount)} incorrect guesses`);
		}
		return alert(`That's not quite right, so far you've had ${Math.ceil(incorrectGuessCount)} incorrect guesses. Keep trying!!!`);
	};
	return (
		<Button marginLeft={20} marginTop={10} height={resizeBtn()} fontSize={resizeText()} appearance="primary" intent="success" onClick={answerCheck}>
			Submit
		</Button>
	);
}
