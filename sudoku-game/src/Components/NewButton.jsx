import React, { useState } from "react";
import styled from "styled-components";
import { Button, Popover, Position, Menu, CaretDownIcon } from "evergreen-ui";

export default function Buttons({ newGameEasy, newGameMedium, newGameHard }) {
	const [menuState, setMenuState] = useState(false);

	const changeMenuState = (e) => {
		setMenuState(!menuState);
	};

	const MenuDropdownContainer = styled.div`
		display: flex;
		flex-direction: column;
		position: relative;
		margin-top: 70%;
		padding-bottom: 1px;
		@media (max-width: 430px) {
			margin-top: 80%;
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
		<>
			<Popover
				position={Position.BOTTOM}
				content={
					<Menu>
						<Menu.Group>
							<Menu.Item width={200} onClick={newGameEasy}>
								Easy
							</Menu.Item>
							<Menu.Item width={200} onClick={newGameMedium}>
								Medium
							</Menu.Item>
							<Menu.Item width={200} onClick={newGameHard}>
								Hard
							</Menu.Item>
						</Menu.Group>
					</Menu>
				}
			>
				<Button marginTop={10} height={resizeBtn()} fontSize={resizeText()} appearance="primary" intent="none" iconAfter={CaretDownIcon}>
					New
				</Button>
			</Popover>
			{/* // <Button */}
			{/* // 	marginTop={10}
		// 	height={resizeBtn()}
		// 	width={65}
		// 	fontSize={resizeText()}
		// 	appearance="primary"
		// 	intent="none"
		// 	iconAfter={CaretDownIcon}
		// 	onClick={changeMenuState}
		// >
		// 	New
		// 	{menuState ? ( */}
			{/* // 		<MenuDropdownContainer className="menu">
		// 			<Button height={20} fontSize={15} appearance="minimal" onClick={newGameEasy} alignItems="left">
		// 				Easy
		// 			</Button>
		// 			<Button height={20} fontSize={15} appearance="minimal" onClick={newGameMedium}>
		// 				Medium
		// 			</Button>
		// 			<Button height={20} fontSize={15} appearance="minimal" onClick={newGameHard}>
		// 				Hard
		// 			</Button>
		// 		</MenuDropdownContainer>
		// 	) : null}
		// </Button> */}
		</>
	);
}
