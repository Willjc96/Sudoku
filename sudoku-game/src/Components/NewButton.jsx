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
		margin: 1%;
	`;
	const DropdownButton = styled.button``;

	const MenuDropdownContainer = styled.div`
		display: flex;
		flex-direction: column;
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
