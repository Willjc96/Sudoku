import React from "react";
import styled from "styled-components";
import { easyUpdated, easyAnswer } from "./SolutionState";
import { incorrectGuessCount } from "./Grid";
const _ = require("lodash");

export default function Buttons() {
	const SubmitButton = styled.button`
		color: white;
		background-color: #4ad826;
		margin: 1%;
	`;

	const answerCheck = () => {
		console.log(easyUpdated, easyAnswer);
		if (_.isEqual(easyUpdated, easyAnswer)) {
			return alert(`Congratulations you did it with only ${Math.ceil(incorrectGuessCount)} incorrect guesses`);
		}
		return alert(`That's not quite right, so far you've had ${Math.ceil(incorrectGuessCount)} incorrect guesses. Keep trying!!!`);
	};
	return <SubmitButton onClick={answerCheck}>Submit</SubmitButton>;
}
