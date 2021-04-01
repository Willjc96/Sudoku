import React from "react";
import styled from "styled-components";

export default function Title() {
	const Title = styled.h1`
		font-size: 400%;
		letter-spacing: 0.1em;
		color: #2b332b;
		padding: 5px;
	`;

	return <Title>Sudoku</Title>;
}
