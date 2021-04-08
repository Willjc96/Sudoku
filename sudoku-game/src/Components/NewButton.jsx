import React from "react";
import { Button, Popover, Position, Menu, CaretDownIcon } from "evergreen-ui";

export default function Buttons({ newGameEasy, newGameMedium, newGameHard }) {
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
		</>
	);
}
