import React from "react";
import styled from "styled-components";
import { easyUpdated, easyAnswer } from "./SolutionState";
const _ = require("lodash");

export default function Buttons() {
	const SubmitButton = styled.button`
		color: white;
		background-color: #4ad826;
		margin: 1%;
	`;

	const answerCheck = () => {
		console.log(_.isEqual(easyUpdated, easyAnswer));
	};

	return <SubmitButton onClick={answerCheck}>Submit</SubmitButton>;
}
