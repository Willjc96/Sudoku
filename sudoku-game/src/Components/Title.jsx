import React from "react";
import styled from "styled-components";

export default function Title() {
	const Title = styled.h1`
		color: white;
		background: #ad1c1c;
		margin-left: 500px;
		margin-right: 500px;
		margin-top: 20px;
	`;

	return <Title>Sudoku</Title>;
}
