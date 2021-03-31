import React from "react";
import styled from "styled-components";
import { easyUpdated, easyAnswer } from "./SolutionState";
import { incorrectGuessCount } from "./Grid";
import {Button} from "evergreen-ui"
const _ = require("lodash");

export default function Buttons() {
	// const SubmitButton = styled.button`
	// 	color: white;
	// 	background-color: #4ad826;
	// 	margin: 1%;
	// `;

	const answerCheck = () => {
		console.log(easyUpdated, easyAnswer);
		if (_.isEqual(easyUpdated, easyAnswer)) {
			return alert(`Congratulations you did it with only ${Math.ceil(incorrectGuessCount)} incorrect guesses`);
		}
		return alert(`That's not quite right, so far you've had ${Math.ceil(incorrectGuessCount)} incorrect guesses. Keep trying!!!`);
	};
	return <Button marginLeft={20} height={30} fontSize={20} appearance="primary" intent="success" onClick={answerCheck}>Submit</Button>
}
