import React from "react";
import styled from "styled-components";

export default function Buttons({ toggleSolution }) {
	const SolutionButton = styled.button`
		color: white;
		background-color: #e00e0e;
		margin: 1%;
	`;

	return <SolutionButton onClick={toggleSolution}>Show Solution</SolutionButton>;
}
