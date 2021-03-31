import React from "react";
import styled from "styled-components";
import {Button} from "evergreen-ui"

export default function Buttons({ toggleSolution }) {
	// const SolutionButton = styled.Button`
	// 	color: white;
	// 	background-color: #e00e0e;
	// 	margin: 1%;
	// `;

	return <Button marginLeft={20} height={30} fontSize={20} appearance="primary" intent="danger" onClick={toggleSolution}> Show Solution </Button>
}
