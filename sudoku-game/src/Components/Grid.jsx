import React from "react";
import styled from "styled-components";
import { easyGrid, easyUpdated, easyAnswer, mediumAnswer, mediumGrid, mediumUpdated } from "./SolutionState";

const MainGrid = styled.div`
	border: solid black 6px;
	width: 540px;
	height: 540px;
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	display: grid;
`;
const Cell = styled.input`
	border: 1.5px solid black;
	width: 100%;
`;
const ContainerOne = styled.div`
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	border: 3px solid black;
`;
const ContainerTwo = styled.div`
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	border: 3px solid black;
`;
const ContainerThree = styled.div`
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	border: 3px solid black;
`;
const ContainerFour = styled.div`
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	border: 3px solid black;
`;
const ContainerFive = styled.div`
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	border: 3px solid black;
`;
const ContainerSix = styled.div`
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	border: 3px solid black;
`;
const ContainerSeven = styled.div`
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	border: 3px solid black;
`;
const ContainerEight = styled.div`
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	border: 3px solid black;
`;
const ContainerNine = styled.div`
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	border: 3px solid black;
`;

const difficulty = easyGrid;

function displayValue(value) {
	if (difficulty[value] !== 0) {
		return difficulty[value];
	}
}

function isNonZero(value) {
	if (!!difficulty[value] === true) {
		return true;
	}
}

const updatedValue = (e) => {
	const id = e.target.id;
	const value = e.target.value;
	easyUpdated[id] = +value;
};

export default function Title() {
	return (
		<>
			<MainGrid>
				<ContainerOne>
					<Cell id="oneOne" onChange={updatedValue} value={displayValue("oneOne")} disabled={isNonZero("oneOne")}></Cell>
					<Cell id="oneTwo" onChange={updatedValue} value={displayValue("oneTwo")} disabled={isNonZero("oneTwo")}></Cell>
					<Cell id="oneThree" onChange={updatedValue} value={displayValue("oneThree")} disabled={isNonZero("oneThree")}></Cell>
					<Cell id="oneFour" onChange={updatedValue} value={displayValue("oneFour")} disabled={isNonZero("oneFour")}></Cell>
					<Cell id="oneFive" onChange={updatedValue} value={displayValue("oneFive")} disabled={isNonZero("oneFive")}></Cell>
					<Cell id="oneSix" onChange={updatedValue} value={displayValue("oneSix")} disabled={isNonZero("oneSix")}></Cell>
					<Cell id="oneSeven" onChange={updatedValue} value={displayValue("oneSeven")} disabled={isNonZero("oneSeven")}></Cell>
					<Cell id="oneEight" onChange={updatedValue} value={displayValue("oneEight")} disabled={isNonZero("oneEight")}></Cell>
					<Cell id="oneNine" onChange={updatedValue} value={displayValue("oneNine")} disabled={isNonZero("oneNine")}></Cell>
				</ContainerOne>
				<ContainerTwo>
					<Cell id="twoOne" onChange={updatedValue} value={displayValue("twoOne")} disabled={isNonZero("twoOne")}></Cell>
					<Cell id="twoTwo" onChange={updatedValue} value={displayValue("twoTwo")} disabled={isNonZero("twoTwo")}></Cell>
					<Cell id="twoThree" onChange={updatedValue} value={displayValue("twoThree")} disabled={isNonZero("twoThree")}></Cell>
					<Cell id="twoFour" onChange={updatedValue} value={displayValue("twoFour")} disabled={isNonZero("twoFour")}></Cell>
					<Cell id="twoFive" onChange={updatedValue} value={displayValue("twoFive")} disabled={isNonZero("twoFive")}></Cell>
					<Cell id="twoSix" onChange={updatedValue} value={displayValue("twoSix")} disabled={isNonZero("twoSix")}></Cell>
					<Cell id="twoSeven" onChange={updatedValue} value={displayValue("twoSeven")} disabled={isNonZero("twoSeven")}></Cell>
					<Cell id="twoEight" onChange={updatedValue} value={displayValue("twoEight")} disabled={isNonZero("twoEight")}></Cell>
					<Cell id="twoNine" onChange={updatedValue} value={displayValue("twoNine")} disabled={isNonZero("twoNine")}></Cell>
				</ContainerTwo>
				<ContainerThree>
					<Cell id="threeOne" onChange={updatedValue} value={displayValue("threeOne")} disabled={isNonZero("threeOne")}></Cell>
					<Cell id="threeTwo" onChange={updatedValue} value={displayValue("threeTwo")} disabled={isNonZero("threeTwo")}></Cell>
					<Cell id="threeThree" onChange={updatedValue} value={displayValue("threeThree")} disabled={isNonZero("threeThree")}></Cell>
					<Cell id="threeFour" onChange={updatedValue} value={displayValue("threeFour")} disabled={isNonZero("threeFour")}></Cell>
					<Cell id="threeFive" onChange={updatedValue} value={displayValue("threeFive")} disabled={isNonZero("threeFive")}></Cell>
					<Cell id="threeSix" onChange={updatedValue} value={displayValue("threeSix")} disabled={isNonZero("threeSix")}></Cell>
					<Cell id="threeSeven" onChange={updatedValue} value={displayValue("threeSeven")} disabled={isNonZero("threeSeven")}></Cell>
					<Cell id="threeEight" onChange={updatedValue} value={displayValue("threeEight")} disabled={isNonZero("threeEight")}></Cell>
					<Cell id="threeNine" onChange={updatedValue} value={displayValue("threeNine")} disabled={isNonZero("threeNine")}></Cell>
				</ContainerThree>
				<ContainerFour>
					<Cell id="fourOne" onChange={updatedValue} value={displayValue("fourOne")} disabled={isNonZero("fourOne")}></Cell>
					<Cell id="fourTwo" onChange={updatedValue} value={displayValue("fourTwo")} disabled={isNonZero("fourTwo")}></Cell>
					<Cell id="fourThree" onChange={updatedValue} value={displayValue("fourThree")} disabled={isNonZero("fourThree")}></Cell>
					<Cell id="fourFour" onChange={updatedValue} value={displayValue("fourFour")} disabled={isNonZero("fourFour")}></Cell>
					<Cell id="fourFive" onChange={updatedValue} value={displayValue("fourFive")} disabled={isNonZero("fourFive")}></Cell>
					<Cell id="fourSix" onChange={updatedValue} value={displayValue("fourSix")} disabled={isNonZero("fourSix")}></Cell>
					<Cell id="fourSeven" onChange={updatedValue} value={displayValue("fourSeven")} disabled={isNonZero("fourSeven")}></Cell>
					<Cell id="fourEight" onChange={updatedValue} value={displayValue("fourEight")} disabled={isNonZero("fourEight")}></Cell>
					<Cell id="fourNine" onChange={updatedValue} value={displayValue("fourNine")} disabled={isNonZero("fourNine")}></Cell>
				</ContainerFour>
				<ContainerFive>
					<Cell id="fiveOne" onChange={updatedValue} value={displayValue("fiveOne")} disabled={isNonZero("fiveOne")}></Cell>
					<Cell id="fiveTwo" onChange={updatedValue} value={displayValue("fiveTwo")} disabled={isNonZero("fiveTwo")}></Cell>
					<Cell id="fiveThree" onChange={updatedValue} value={displayValue("fiveThree")} disabled={isNonZero("fiveThree")}></Cell>
					<Cell id="fiveFour" onChange={updatedValue} value={displayValue("fiveFour")} disabled={isNonZero("fiveFour")}></Cell>
					<Cell id="fiveFive" onChange={updatedValue} value={displayValue("fiveFive")} disabled={isNonZero("fiveFive")}></Cell>
					<Cell id="fiveSix" onChange={updatedValue} value={displayValue("fiveSix")} disabled={isNonZero("fiveSix")}></Cell>
					<Cell id="fiveSeven" onChange={updatedValue} value={displayValue("fiveSeven")} disabled={isNonZero("fiveSeven")}></Cell>
					<Cell id="fiveEight" onChange={updatedValue} value={displayValue("fiveEight")} disabled={isNonZero("fiveEight")}></Cell>
					<Cell id="fiveNine" onChange={updatedValue} value={displayValue("fiveNine")} disabled={isNonZero("fiveNine")}></Cell>
				</ContainerFive>
				<ContainerSix>
					<Cell id="sixOne" onChange={updatedValue} value={displayValue("sixOne")} disabled={isNonZero("sixOne")}></Cell>
					<Cell id="sixTwo" onChange={updatedValue} value={displayValue("sixTwo")} disabled={isNonZero("sixTwo")}></Cell>
					<Cell id="sixThree" onChange={updatedValue} value={displayValue("sixThree")} disabled={isNonZero("sixThree")}></Cell>
					<Cell id="sixFour" onChange={updatedValue} value={displayValue("sixFour")} disabled={isNonZero("sixFour")}></Cell>
					<Cell id="sixFive" onChange={updatedValue} value={displayValue("sixFive")} disabled={isNonZero("sixFive")}></Cell>
					<Cell id="sixSix" onChange={updatedValue} value={displayValue("sixSix")} disabled={isNonZero("sixSix")}></Cell>
					<Cell id="sixSeven" onChange={updatedValue} value={displayValue("sixSeven")} disabled={isNonZero("sixSeven")}></Cell>
					<Cell id="sixEight" onChange={updatedValue} value={displayValue("sixEight")} disabled={isNonZero("sixEight")}></Cell>
					<Cell id="sixNine" onChange={updatedValue} value={displayValue("sixNine")} disabled={isNonZero("sixNine")}></Cell>
				</ContainerSix>
				<ContainerSeven>
					<Cell id="sevenOne" onChange={updatedValue} value={displayValue("sevenOne")} disabled={isNonZero("sevenOne")}></Cell>
					<Cell id="sevenTwo" onChange={updatedValue} value={displayValue("sevenTwo")} disabled={isNonZero("sevenTwo")}></Cell>
					<Cell id="sevenThree" onChange={updatedValue} value={displayValue("sevenThree")} disabled={isNonZero("sevenThree")}></Cell>
					<Cell id="sevenFour" onChange={updatedValue} value={displayValue("sevenFour")} disabled={isNonZero("sevenFour")}></Cell>
					<Cell id="sevenFive" onChange={updatedValue} value={displayValue("sevenFive")} disabled={isNonZero("sevenFive")}></Cell>
					<Cell id="sevenSix" onChange={updatedValue} value={displayValue("sevenSix")} disabled={isNonZero("sevenSix")}></Cell>
					<Cell id="sevenSeven" onChange={updatedValue} value={displayValue("sevenSeven")} disabled={isNonZero("sevenSeven")}></Cell>
					<Cell id="sevenEight" onChange={updatedValue} value={displayValue("sevenEight")} disabled={isNonZero("sevenEight")}></Cell>
					<Cell id="sevenNine" onChange={updatedValue} value={displayValue("sevenNine")} disabled={isNonZero("sevenNine")}></Cell>
				</ContainerSeven>
				<ContainerEight>
					<Cell id="eightOne" onChange={updatedValue} value={displayValue("eightOne")} disabled={isNonZero("eightOne")}></Cell>
					<Cell id="eightTwo" onChange={updatedValue} value={displayValue("eightTwo")} disabled={isNonZero("eightTwo")}></Cell>
					<Cell id="eightThree" onChange={updatedValue} value={displayValue("eightThree")} disabled={isNonZero("eightThree")}></Cell>
					<Cell id="eightFour" onChange={updatedValue} value={displayValue("eightFour")} disabled={isNonZero("eightFour")}></Cell>
					<Cell id="eightFive" onChange={updatedValue} value={displayValue("eightFive")} disabled={isNonZero("eightFive")}></Cell>
					<Cell id="eightSix" onChange={updatedValue} value={displayValue("eightSix")} disabled={isNonZero("eightSix")}></Cell>
					<Cell id="eightSeven" onChange={updatedValue} value={displayValue("eightSeven")} disabled={isNonZero("eightSeven")}></Cell>
					<Cell id="eightEight" onChange={updatedValue} value={displayValue("eightEight")} disabled={isNonZero("eightEight")}></Cell>
					<Cell id="eightNine" onChange={updatedValue} value={displayValue("eightNine")} disabled={isNonZero("eightNine")}></Cell>
				</ContainerEight>
				<ContainerNine>
					<Cell id="nineOne" onChange={updatedValue} value={displayValue("nineOne")} disabled={isNonZero("nineOne")}></Cell>
					<Cell id="nineTwo" onChange={updatedValue} value={displayValue("nineTwo")} disabled={isNonZero("nineTwo")}></Cell>
					<Cell id="nineThree" onChange={updatedValue} value={displayValue("nineThree")} disabled={isNonZero("nineThree")}></Cell>
					<Cell id="nineFour" onChange={updatedValue} value={displayValue("nineFour")} disabled={isNonZero("nineFour")}></Cell>
					<Cell id="nineFive" onChange={updatedValue} value={displayValue("nineFive")} disabled={isNonZero("nineFive")}></Cell>
					<Cell id="nineSix" onChange={updatedValue} value={displayValue("nineSix")} disabled={isNonZero("nineSix")}></Cell>
					<Cell id="nineSeven" onChange={updatedValue} value={displayValue("nineSeven")} disabled={isNonZero("nineSeven")}></Cell>
					<Cell id="nineEight" onChange={updatedValue} value={displayValue("nineEight")} disabled={isNonZero("nineEight")}></Cell>
					<Cell id="nineNine" onChange={updatedValue} value={displayValue("nineNine")} disabled={isNonZero("nineNine")}></Cell>
				</ContainerNine>
			</MainGrid>
		</>
	);
}

// changed prettier print width setting
// Title dissapears because of margin
// Could give containers an id and only have one type of container
