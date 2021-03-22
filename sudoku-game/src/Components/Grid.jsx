import React from "react";
import styled from "styled-components";

export default function Title() {
	const GridTemplate = styled.div`
		/* box-sizing: content-box; */
		border: 3px solid black;
		border-right: 2px solid black;
		margin: auto;
		width: 540px;
		height: 540px;
		display: grid;
		grid-template: repeat(3, 60px) / repeat(3, 60px);
		border-color: blue;
		background-color: blanchedalmond;
	`;

	return <GridTemplate />;
}
