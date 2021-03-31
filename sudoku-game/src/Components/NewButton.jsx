import React, { useState } from "react";
import styled from "styled-components";

export default function Buttons({ newGameEasy, newGameMedium, newGameHard }) {
	const [menuState, setMenuState] = useState(false);

	const changeMenuState = (e) => {
		setMenuState(!menuState);
	};

	const NewButton = styled.button`
		color: white;
		background-color: blue;
		min-width: 55px;
		margin: 1%;
		margin-bottom: 0.5%;
	`;
	const DropdownButton = styled.button`
		margin: 0.5px;
		padding: 0;
		height: 18px;
	`;

	const MenuDropdownContainer = styled.div`
		display: flex;
		flex-direction: column;
		position: absolute;
		margin-top: 3px;
	`;

	return (
		<NewButton onClick={changeMenuState}>
			New
			{menuState ? (
				<MenuDropdownContainer className="menu">
					<DropdownButton onClick={newGameEasy}> Easy </DropdownButton>
					<DropdownButton onClick={newGameMedium}> Medium </DropdownButton>
					<DropdownButton onClick={newGameHard}> Hard </DropdownButton>
				</MenuDropdownContainer>
			) : null}
		</NewButton>
	);
}
