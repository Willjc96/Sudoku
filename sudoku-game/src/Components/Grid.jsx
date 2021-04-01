import React from "react";
import styled from "styled-components";
import { easyGrid, easyUpdated, easyAnswer, mediumAnswer, mediumGrid, mediumUpdated } from "./SolutionState";

var incorrectGuessCount = 0;

function resetFields() {
	const inputArray = document.querySelectorAll("input");
	inputArray.forEach((input) => {
		input.value = "";
		input.className = "correct";
	});
}

export default function Grid({ toggleSolutionState, newDifficulty }) {
	const MainGrid = styled.div`
		position: absolute;
		top: 220px;
		left: 35%;
		border: solid black 6px;
		border-bottom: solid black 12px;
		width: 30%;
		height: 0;
		padding-bottom: 30%;
		display: grid;
		grid-template: repeat(3, 1fr) / repeat(3, 1fr);
		margin: 1% auto 0;
	`;
	const Cell = styled.input`
		border: 1.5px solid black;
		position: relative;
		width: 100%;
		height: 0;
		padding-top: 50%;
		padding-bottom: 50%;
		font-size: 1.8vw;
		font-weight: bolder;
		background-color: #d8d8d8;
	`;
	const Container = styled.div`
		position: relative;
		width: 100%;
		height: 0;
		padding-bottom: 100%;
		display: grid;
		grid-template: repeat(3, 1fr) / repeat(3, 1fr);
		border: 3px solid black;
	`;

	let difficulty = null;
	let answer = null;
	let updated = null;
	if (newDifficulty === "Easy") {
		resetFields();
		incorrectGuessCount = 0;
		difficulty = easyGrid;
		updated = easyUpdated;
		answer = easyAnswer;
	} else if (newDifficulty === "Medium") {
		resetFields();
		incorrectGuessCount = 0;
		difficulty = mediumGrid;
		updated = mediumUpdated;
		answer = mediumAnswer;
	}
	//  else if (newDifficulty === "Hard") {
	// 	difficulty = hardGrid;
	//  updated = hardUpdated
	//   answer = hardAnswer
	// }

	function displayValue(value) {
		if (difficulty[value] !== 0) {
			return difficulty[value];
		}
		if (toggleSolutionState) {
			return answer[value];
		}
	}

	function isNonZero(value) {
		if (!!difficulty[value] === true) {
			return true;
		} else return false;
	}

	const updatedValue = (e) => {
		const id = e.target.id;
		const value = e.target.value;
		if (+value !== answer[id] && +value.length !== 0) {
			e.target.className = "incorrect";
			incorrectGuessCount++;
		} else if (+value === answer[id]) {
			e.target.className = "correct";
		}
		updated[id] = +value;
	};
	return (
		<>
			<MainGrid>
				<Container>
					<Cell
						id="oneOne"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("oneOne")}
						disabled={isNonZero("oneOne")}
						autoComplete="off"
					></Cell>
					<Cell
						id="oneTwo"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("oneTwo")}
						disabled={isNonZero("oneTwo")}
						autoComplete="off"
					></Cell>
					<Cell
						id="oneThree"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("oneThree")}
						disabled={isNonZero("oneThree")}
						autoComplete="off"
					></Cell>
					<Cell
						id="oneFour"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("oneFour")}
						disabled={isNonZero("oneFour")}
						autoComplete="off"
					></Cell>
					<Cell
						id="oneFive"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("oneFive")}
						disabled={isNonZero("oneFive")}
						autoComplete="off"
					></Cell>
					<Cell
						id="oneSix"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("oneSix")}
						disabled={isNonZero("oneSix")}
						autoComplete="off"
					></Cell>
					<Cell
						id="oneSeven"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("oneSeven")}
						disabled={isNonZero("oneSeven")}
						autoComplete="off"
					></Cell>
					<Cell
						id="oneEight"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("oneEight")}
						disabled={isNonZero("oneEight")}
						autoComplete="off"
					></Cell>
					<Cell
						id="oneNine"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("oneNine")}
						disabled={isNonZero("oneNine")}
						autoComplete="off"
					></Cell>
				</Container>
				<Container>
					<Cell
						id="twoOne"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("twoOne")}
						disabled={isNonZero("twoOne")}
						autoComplete="off"
					></Cell>
					<Cell
						id="twoTwo"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("twoTwo")}
						disabled={isNonZero("twoTwo")}
						autoComplete="off"
					></Cell>
					<Cell
						id="twoThree"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("twoThree")}
						disabled={isNonZero("twoThree")}
						autoComplete="off"
					></Cell>
					<Cell
						id="twoFour"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("twoFour")}
						disabled={isNonZero("twoFour")}
						autoComplete="off"
					></Cell>
					<Cell
						id="twoFive"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("twoFive")}
						disabled={isNonZero("twoFive")}
						autoComplete="off"
					></Cell>
					<Cell
						id="twoSix"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("twoSix")}
						disabled={isNonZero("twoSix")}
						autoComplete="off"
					></Cell>
					<Cell
						id="twoSeven"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("twoSeven")}
						disabled={isNonZero("twoSeven")}
						autoComplete="off"
					></Cell>
					<Cell
						id="twoEight"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("twoEight")}
						disabled={isNonZero("twoEight")}
						autoComplete="off"
					></Cell>
					<Cell
						id="twoNine"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("twoNine")}
						disabled={isNonZero("twoNine")}
						autoComplete="off"
					></Cell>
				</Container>
				<Container>
					<Cell
						id="threeOne"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("threeOne")}
						disabled={isNonZero("threeOne")}
						autoComplete="off"
					></Cell>
					<Cell
						id="threeTwo"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("threeTwo")}
						disabled={isNonZero("threeTwo")}
						autoComplete="off"
					></Cell>
					<Cell
						id="threeThree"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("threeThree")}
						disabled={isNonZero("threeThree")}
						autoComplete="off"
					></Cell>
					<Cell
						id="threeFour"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("threeFour")}
						disabled={isNonZero("threeFour")}
						autoComplete="off"
					></Cell>
					<Cell
						id="threeFive"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("threeFive")}
						disabled={isNonZero("threeFive")}
						autoComplete="off"
					></Cell>
					<Cell
						id="threeSix"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("threeSix")}
						disabled={isNonZero("threeSix")}
						autoComplete="off"
					></Cell>
					<Cell
						id="threeSeven"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("threeSeven")}
						disabled={isNonZero("threeSeven")}
						autoComplete="off"
					></Cell>
					<Cell
						id="threeEight"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("threeEight")}
						disabled={isNonZero("threeEight")}
						autoComplete="off"
					></Cell>
					<Cell
						id="threeNine"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("threeNine")}
						disabled={isNonZero("threeNine")}
						autoComplete="off"
					></Cell>
				</Container>
				<Container>
					<Cell
						id="fourOne"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("fourOne")}
						disabled={isNonZero("fourOne")}
						autoComplete="off"
					></Cell>
					<Cell
						id="fourTwo"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("fourTwo")}
						disabled={isNonZero("fourTwo")}
						autoComplete="off"
					></Cell>
					<Cell
						id="fourThree"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("fourThree")}
						disabled={isNonZero("fourThree")}
						autoComplete="off"
					></Cell>
					<Cell
						id="fourFour"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("fourFour")}
						disabled={isNonZero("fourFour")}
						autoComplete="off"
					></Cell>
					<Cell
						id="fourFive"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("fourFive")}
						disabled={isNonZero("fourFive")}
						autoComplete="off"
					></Cell>
					<Cell
						id="fourSix"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("fourSix")}
						disabled={isNonZero("fourSix")}
						autoComplete="off"
					></Cell>
					<Cell
						id="fourSeven"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("fourSeven")}
						disabled={isNonZero("fourSeven")}
						autoComplete="off"
					></Cell>
					<Cell
						id="fourEight"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("fourEight")}
						disabled={isNonZero("fourEight")}
						autoComplete="off"
					></Cell>
					<Cell
						id="fourNine"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("fourNine")}
						disabled={isNonZero("fourNine")}
						autoComplete="off"
					></Cell>
				</Container>
				<Container>
					<Cell
						id="fiveOne"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("fiveOne")}
						disabled={isNonZero("fiveOne")}
						autoComplete="off"
					></Cell>
					<Cell
						id="fiveTwo"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("fiveTwo")}
						disabled={isNonZero("fiveTwo")}
						autoComplete="off"
					></Cell>
					<Cell
						id="fiveThree"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("fiveThree")}
						disabled={isNonZero("fiveThree")}
						autoComplete="off"
					></Cell>
					<Cell
						id="fiveFour"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("fiveFour")}
						disabled={isNonZero("fiveFour")}
						autoComplete="off"
					></Cell>
					<Cell
						id="fiveFive"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("fiveFive")}
						disabled={isNonZero("fiveFive")}
						autoComplete="off"
					></Cell>
					<Cell
						id="fiveSix"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("fiveSix")}
						disabled={isNonZero("fiveSix")}
						autoComplete="off"
					></Cell>
					<Cell
						id="fiveSeven"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("fiveSeven")}
						disabled={isNonZero("fiveSeven")}
						autoComplete="off"
					></Cell>
					<Cell
						id="fiveEight"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("fiveEight")}
						disabled={isNonZero("fiveEight")}
						autoComplete="off"
					></Cell>
					<Cell
						id="fiveNine"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("fiveNine")}
						disabled={isNonZero("fiveNine")}
						autoComplete="off"
					></Cell>
				</Container>
				<Container>
					<Cell
						id="sixOne"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("sixOne")}
						disabled={isNonZero("sixOne")}
						autoComplete="off"
					></Cell>
					<Cell
						id="sixTwo"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("sixTwo")}
						disabled={isNonZero("sixTwo")}
						autoComplete="off"
					></Cell>
					<Cell
						id="sixThree"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("sixThree")}
						disabled={isNonZero("sixThree")}
						autoComplete="off"
					></Cell>
					<Cell
						id="sixFour"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("sixFour")}
						disabled={isNonZero("sixFour")}
						autoComplete="off"
					></Cell>
					<Cell
						id="sixFive"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("sixFive")}
						disabled={isNonZero("sixFive")}
						autoComplete="off"
					></Cell>
					<Cell
						id="sixSix"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("sixSix")}
						disabled={isNonZero("sixSix")}
						autoComplete="off"
					></Cell>
					<Cell
						id="sixSeven"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("sixSeven")}
						disabled={isNonZero("sixSeven")}
						autoComplete="off"
					></Cell>
					<Cell
						id="sixEight"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("sixEight")}
						disabled={isNonZero("sixEight")}
						autoComplete="off"
					></Cell>
					<Cell
						id="sixNine"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("sixNine")}
						disabled={isNonZero("sixNine")}
						autoComplete="off"
					></Cell>
				</Container>
				<Container>
					<Cell
						id="sevenOne"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("sevenOne")}
						disabled={isNonZero("sevenOne")}
						autoComplete="off"
					></Cell>
					<Cell
						id="sevenTwo"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("sevenTwo")}
						disabled={isNonZero("sevenTwo")}
						autoComplete="off"
					></Cell>
					<Cell
						id="sevenThree"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("sevenThree")}
						disabled={isNonZero("sevenThree")}
						autoComplete="off"
					></Cell>
					<Cell
						id="sevenFour"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("sevenFour")}
						disabled={isNonZero("sevenFour")}
						autoComplete="off"
					></Cell>
					<Cell
						id="sevenFive"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("sevenFive")}
						disabled={isNonZero("sevenFive")}
						autoComplete="off"
					></Cell>
					<Cell
						id="sevenSix"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("sevenSix")}
						disabled={isNonZero("sevenSix")}
						autoComplete="off"
					></Cell>
					<Cell
						id="sevenSeven"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("sevenSeven")}
						disabled={isNonZero("sevenSeven")}
						autoComplete="off"
					></Cell>
					<Cell
						id="sevenEight"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("sevenEight")}
						disabled={isNonZero("sevenEight")}
						autoComplete="off"
					></Cell>
					<Cell
						id="sevenNine"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("sevenNine")}
						disabled={isNonZero("sevenNine")}
						autoComplete="off"
					></Cell>
				</Container>
				<Container>
					<Cell
						id="eightOne"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("eightOne")}
						disabled={isNonZero("eightOne")}
						autoComplete="off"
					></Cell>
					<Cell
						id="eightTwo"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("eightTwo")}
						disabled={isNonZero("eightTwo")}
						autoComplete="off"
					></Cell>
					<Cell
						id="eightThree"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("eightThree")}
						disabled={isNonZero("eightThree")}
						autoComplete="off"
					></Cell>
					<Cell
						id="eightFour"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("eightFour")}
						disabled={isNonZero("eightFour")}
						autoComplete="off"
					></Cell>
					<Cell
						id="eightFive"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("eightFive")}
						disabled={isNonZero("eightFive")}
						autoComplete="off"
					></Cell>
					<Cell
						id="eightSix"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("eightSix")}
						disabled={isNonZero("eightSix")}
						autoComplete="off"
					></Cell>
					<Cell
						id="eightSeven"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("eightSeven")}
						disabled={isNonZero("eightSeven")}
						autoComplete="off"
					></Cell>
					<Cell
						id="eightEight"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("eightEight")}
						disabled={isNonZero("eightEight")}
						autoComplete="off"
					></Cell>
					<Cell
						id="eightNine"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("eightNine")}
						disabled={isNonZero("eightNine")}
						autoComplete="off"
					></Cell>
				</Container>
				<Container>
					<Cell
						id="nineOne"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("nineOne")}
						disabled={isNonZero("nineOne")}
						autoComplete="off"
					></Cell>
					<Cell
						id="nineTwo"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("nineTwo")}
						disabled={isNonZero("nineTwo")}
						autoComplete="off"
					></Cell>
					<Cell
						id="nineThree"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("nineThree")}
						disabled={isNonZero("nineThree")}
						autoComplete="off"
					></Cell>
					<Cell
						id="nineFour"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("nineFour")}
						disabled={isNonZero("nineFour")}
						autoComplete="off"
					></Cell>
					<Cell
						id="nineFive"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("nineFive")}
						disabled={isNonZero("nineFive")}
						autoComplete="off"
					></Cell>
					<Cell
						id="nineSix"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("nineSix")}
						disabled={isNonZero("nineSix")}
						autoComplete="off"
					></Cell>
					<Cell
						id="nineSeven"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("nineSeven")}
						disabled={isNonZero("nineSeven")}
						autoComplete="off"
					></Cell>
					<Cell
						id="nineEight"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("nineEight")}
						disabled={isNonZero("nineEight")}
						autoComplete="off"
					></Cell>
					<Cell
						id="nineNine"
						onChange={updatedValue}
						maxLength="1"
						value={displayValue("nineNine")}
						disabled={isNonZero("nineNine")}
						autoComplete="off"
					></Cell>
				</Container>
			</MainGrid>
		</>
	);
}
export { incorrectGuessCount };
// changed prettier print width setting
// Title dissapears because of margin
// Could give containers an id and only have one type of container
