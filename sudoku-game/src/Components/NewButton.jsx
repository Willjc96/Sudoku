import React, { useState } from "react";
import styled from "styled-components";
import {Button, theme,  CaretDownIcon} from "evergreen-ui"

export default function Buttons({ newGameEasy, newGameMedium, newGameHard }) {
	const [menuState, setMenuState] = useState(false);

	const changeMenuState = (e) => {
		setMenuState(!menuState);
	};

	// const NewButton = styled.Button`
	// 	color: white;
	// 	background-color: blue;
	// 	min-width: 55px;
	// 	margin: 1%;
	// 	margin-bottom: 0.5%;
	// `;
	// const DropdownButton = styled.button`
	// 	margin: 0.5px;
	// 	padding: 0;
	// 	height: 18px;
	// `;

  const theme = {getTextColor: '#234361'}

	const MenuDropdownContainer = styled.div`
		display: flex;
		flex-direction: column;
		position: absolute;
		margin-top: 55%;
    padding-bottom:1px;
	`;

	return (
    <Button height={30} fontSize={20} appearance="primary" intent="none" iconAfter={CaretDownIcon} onClick={changeMenuState}>
			New
			{menuState ? (
				<MenuDropdownContainer className="menu">
				<Button height={20} fontSize={15} appearance="minimal" theme={theme['getTextColor']} onClick={newGameEasy}> Easy </Button>
        <Button height={20} fontSize={15} appearance="minimal" color={theme['getTextColor']} onClick={newGameMedium}> Medium </Button>
				<Button height={20} fontSize={15} appearance="minimal" intent={theme['getTextColor']} onClick={newGameHard}> Hard </Button>
				</MenuDropdownContainer>
			) : null}
		</Button>
	);
}
