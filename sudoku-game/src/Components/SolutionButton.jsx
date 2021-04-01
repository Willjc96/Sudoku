import React from "react";
import { Button } from "evergreen-ui";

export default function Buttons({ toggleSolution }) {
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
		<Button marginLeft={20} marginTop={10} height={resizeBtn()} fontSize={resizeText()} appearance="primary" intent="danger" onClick={toggleSolution}>
			Show Solution
		</Button>
	);
}
