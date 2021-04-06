import React, { useState } from "react";
import styled from "styled-components";
import { Button, CaretDownIcon } from "evergreen-ui";

export default function Buttons({ newGameEasy, newGameMedium, newGameHard }) {
	const [menuState, setMenuState] = useState(false);

	const changeMenuState = (e) => {
		setMenuState(!menuState);
	};

	const MenuDropdownContainer = styled.div`
		display: flex;
		flex-direction: column;
		position: absolute;
		margin-top: 55%;
		padding-bottom: 1px;
		@media (max-width: 430px) {
			margin-top: 120%;
		}
	`;

	const resizeBtn = () => {
		if (window.innerWidth < 430) {
			return 20;
		}
		return 30;
	};

	const resizeText = () => {
		return window.innerWidth < 430 ? 15 : 20;
	};

	return (
		<Button
			marginTop={10}
			height={resizeBtn()}
			fontSize={resizeText()}
			appearance="primary"
			intent="none"
			iconAfter={CaretDownIcon}
			onClick={changeMenuState}
		>
			New
			{menuState ? (
				<MenuDropdownContainer className="menu">
					<Button height={20} fontSize={15} appearance="minimal" onClick={newGameEasy} alignItems="left">
						Easy
					</Button>
					<Button height={20} fontSize={15} appearance="minimal" onClick={newGameMedium}>
						Medium
					</Button>
					<Button height={20} fontSize={15} appearance="minimal" onClick={newGameHard}>
						Hard
					</Button>
				</MenuDropdownContainer>
			) : null}
		</Button>
	);
}
