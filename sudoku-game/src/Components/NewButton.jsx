import React from "react";
import styled from "styled-components";

export default function Buttons() {
	const NewButton = styled.button`
		color: white;
		background-color: blue;
		margin: 1%;
	`;

	return <NewButton>New</NewButton>;
}
