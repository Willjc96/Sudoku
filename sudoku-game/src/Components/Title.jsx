import React from "react";
import styled from "styled-components";

export default function Title() {
	const Title = styled.h1`
		color: white;
		background: #ad1c1c;
		margin: 1% auto 0;
		margin-top: 20px;
	`;

	return <Title>Sudoku</Title>;
}
