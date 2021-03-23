import React, { useState } from "react";
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

export default function Title() {
	return (
		<>
			<MainGrid>
				<ContainerOne>
					<Cell id="OneOne" value={displayValue("oneOne")} disabled={isNonZero("oneOne")}></Cell>
					<Cell id="OneTwo" value={displayValue("oneTwo")} disabled={isNonZero("oneTwo")}></Cell>
					<Cell id="OneThree" value={displayValue("oneThree")} disabled={isNonZero("oneThree")}></Cell>
					<Cell id="OneFour" value={displayValue("oneFour")} disabled={isNonZero("oneFour")}></Cell>
					<Cell id="OneFive" value={displayValue("oneFive")} disabled={isNonZero("oneFive")}></Cell>
					<Cell id="OneSix" value={displayValue("oneSix")} disabled={isNonZero("oneSix")}></Cell>
					<Cell id="OneSeven" value={displayValue("oneSeven")} disabled={isNonZero("oneSeven")}></Cell>
					<Cell id="OneEight" value={displayValue("oneEight")} disabled={isNonZero("oneEight")}></Cell>
					<Cell id="OneNine" value={displayValue("oneNine")} disabled={isNonZero("oneNine")}></Cell>
				</ContainerOne>
				<ContainerTwo>
					<Cell id="TwoOne" value={displayValue("twoOne")} disabled={isNonZero("twoOne")}></Cell>
					<Cell id="TwoTwo" value={displayValue("twoTwo")} disabled={isNonZero("twoTwo")}></Cell>
					<Cell id="TwoThree" value={displayValue("twoThree")} disabled={isNonZero("twoThree")}></Cell>
					<Cell id="TwoFour" value={displayValue("twoFour")} disabled={isNonZero("twoFour")}></Cell>
					<Cell id="TwoFive" value={displayValue("twoFive")} disabled={isNonZero("twoFive")}></Cell>
					<Cell id="TwoSix" value={displayValue("twoSix")} disabled={isNonZero("twoSix")}></Cell>
					<Cell id="TwoSeven" value={displayValue("twoSeven")} disabled={isNonZero("twoSeven")}></Cell>
					<Cell id="TwoEight" value={displayValue("twoEight")} disabled={isNonZero("twoEight")}></Cell>
					<Cell id="TwoNine" value={displayValue("twoNine")} disabled={isNonZero("twoNine")}></Cell>
				</ContainerTwo>
				<ContainerThree>
					<Cell id="ThreeOne" value={displayValue("threeOne")} disabled={isNonZero("threeOne")}></Cell>
					<Cell id="ThreeTwo" value={displayValue("threeTwo")} disabled={isNonZero("threeTwo")}></Cell>
					<Cell id="ThreeThree" value={displayValue("threeThree")} disabled={isNonZero("threeThree")}></Cell>
					<Cell id="ThreeFour" value={displayValue("threeFour")} disabled={isNonZero("threeFour")}></Cell>
					<Cell id="ThreeFive" value={displayValue("threeFive")} disabled={isNonZero("threeFive")}></Cell>
					<Cell id="ThreeSix" value={displayValue("threeSix")} disabled={isNonZero("threeSix")}></Cell>
					<Cell id="ThreeSeven" value={displayValue("threeSeven")} disabled={isNonZero("threeSeven")}></Cell>
					<Cell id="ThreeEight" value={displayValue("threeEight")} disabled={isNonZero("threeEight")}></Cell>
					<Cell id="ThreeNine" value={displayValue("threeNine")} disabled={isNonZero("threeNine")}></Cell>
				</ContainerThree>
				<ContainerFour>
					<Cell id="FourOne" value={displayValue("fourOne")} disabled={isNonZero("fourOne")}></Cell>
					<Cell id="FourTwo" value={displayValue("fourTwo")} disabled={isNonZero("fourTwo")}></Cell>
					<Cell id="FourThree" value={displayValue("fourThree")} disabled={isNonZero("fourThree")}></Cell>
					<Cell id="FourFour" value={displayValue("fourFour")} disabled={isNonZero("fourFour")}></Cell>
					<Cell id="FourFive" value={displayValue("fourFive")} disabled={isNonZero("fourFive")}></Cell>
					<Cell id="FourSix" value={displayValue("fourSix")} disabled={isNonZero("fourSix")}></Cell>
					<Cell id="FourSeven" value={displayValue("fourSeven")} disabled={isNonZero("fourSeven")}></Cell>
					<Cell id="FourEight" value={displayValue("fourEight")} disabled={isNonZero("fourEight")}></Cell>
					<Cell id="FourNine" value={displayValue("fourNine")} disabled={isNonZero("fourNine")}></Cell>
				</ContainerFour>
				<ContainerFive>
					<Cell id="FiveOne" value={displayValue("fiveOne")} disabled={isNonZero("fiveOne")}></Cell>
					<Cell id="FiveTwo" value={displayValue("fiveTwo")} disabled={isNonZero("fiveTwo")}></Cell>
					<Cell id="FiveThree" value={displayValue("fiveThree")} disabled={isNonZero("fiveThree")}></Cell>
					<Cell id="FiveFour" value={displayValue("fiveFour")} disabled={isNonZero("fiveFour")}></Cell>
					<Cell id="FiveFive" value={displayValue("fiveFive")} disabled={isNonZero("fiveFive")}></Cell>
					<Cell id="FiveSix" value={displayValue("fiveSix")} disabled={isNonZero("fiveSix")}></Cell>
					<Cell id="FiveSeven" value={displayValue("fiveSeven")} disabled={isNonZero("fiveSeven")}></Cell>
					<Cell id="FiveEight" value={displayValue("fiveEight")} disabled={isNonZero("fiveEight")}></Cell>
					<Cell id="FiveNine" value={displayValue("fiveNine")} disabled={isNonZero("fiveNine")}></Cell>
				</ContainerFive>
				<ContainerSix>
					<Cell id="SixOne" value={displayValue("sixOne")} disabled={isNonZero("sixOne")}></Cell>
					<Cell id="SixTwo" value={displayValue("sixTwo")} disabled={isNonZero("sixTwo")}></Cell>
					<Cell id="SixThree" value={displayValue("sixThree")} disabled={isNonZero("sixThree")}></Cell>
					<Cell id="SixFour" value={displayValue("sixFour")} disabled={isNonZero("sixFour")}></Cell>
					<Cell id="SixFive" value={displayValue("sixFive")} disabled={isNonZero("sixFive")}></Cell>
					<Cell id="SixSix" value={displayValue("sixSix")} disabled={isNonZero("sixSix")}></Cell>
					<Cell id="SixSeven" value={displayValue("sixSeven")} disabled={isNonZero("sixSeven")}></Cell>
					<Cell id="SixEight" value={displayValue("sixEight")} disabled={isNonZero("sixEight")}></Cell>
					<Cell id="SixNine" value={displayValue("sixNine")} disabled={isNonZero("sixNine")}></Cell>
				</ContainerSix>
				<ContainerSeven>
					<Cell id="SevenOne" value={displayValue("sevenOne")} disabled={isNonZero("sevenOne")}></Cell>
					<Cell id="SevenTwo" value={displayValue("sevenTwo")} disabled={isNonZero("sevenTwo")}></Cell>
					<Cell id="SevenThree" value={displayValue("sevenThree")} disabled={isNonZero("sevenThree")}></Cell>
					<Cell id="SevenFour" value={displayValue("sevenFour")} disabled={isNonZero("sevenFour")}></Cell>
					<Cell id="SevenFive" value={displayValue("sevenFive")} disabled={isNonZero("sevenFive")}></Cell>
					<Cell id="SevenSix" value={displayValue("sevenSix")} disabled={isNonZero("sevenSix")}></Cell>
					<Cell id="SevenSeven" value={displayValue("sevenSeven")} disabled={isNonZero("sevenSeven")}></Cell>
					<Cell id="SevenEight" value={displayValue("sevenEight")} disabled={isNonZero("sevenEight")}></Cell>
					<Cell id="SevenNine" value={displayValue("sevenNine")} disabled={isNonZero("sevenNine")}></Cell>
				</ContainerSeven>
				<ContainerEight>
					<Cell id="EightOne" value={displayValue("eightOne")} disabled={isNonZero("eightOne")}></Cell>
					<Cell id="EightTwo" value={displayValue("eightTwo")} disabled={isNonZero("eightTwo")}></Cell>
					<Cell id="EightThree" value={displayValue("eightThree")} disabled={isNonZero("eightThree")}></Cell>
					<Cell id="EightFour" value={displayValue("eightFour")} disabled={isNonZero("eightFour")}></Cell>
					<Cell id="EightFive" value={displayValue("eightFive")} disabled={isNonZero("eightFive")}></Cell>
					<Cell id="EightSix" value={displayValue("eightSix")} disabled={isNonZero("eightSix")}></Cell>
					<Cell id="EightSeven" value={displayValue("eightSeven")} disabled={isNonZero("eightSeven")}></Cell>
					<Cell id="EightEight" value={displayValue("eightEight")} disabled={isNonZero("eightEight")}></Cell>
					<Cell id="EightNine" value={displayValue("eightNine")} disabled={isNonZero("eightNine")}></Cell>
				</ContainerEight>
				<ContainerNine>
					<Cell id="NineOne" value={displayValue("nineOne")} disabled={isNonZero("nineOne")}></Cell>
					<Cell id="NineTwo" value={displayValue("nineTwo")} disabled={isNonZero("nineTwo")}></Cell>
					<Cell id="NineThree" value={displayValue("nineThree")} disabled={isNonZero("nineThree")}></Cell>
					<Cell id="NineFour" value={displayValue("nineFour")} disabled={isNonZero("nineFour")}></Cell>
					<Cell id="NineFive" value={displayValue("nineFive")} disabled={isNonZero("nineFive")}></Cell>
					<Cell id="NineSix" value={displayValue("nineSix")} disabled={isNonZero("nineSix")}></Cell>
					<Cell id="NineSeven" value={displayValue("nineSeven")} disabled={isNonZero("nineSeven")}></Cell>
					<Cell id="NineEight" value={displayValue("nineEight")} disabled={isNonZero("nineEight")}></Cell>
					<Cell id="NineNine" value={displayValue("nineNine")} disabled={isNonZero("nineNine")}></Cell>
				</ContainerNine>
			</MainGrid>
		</>
	);
}

// changed prettier print width setting
// Title dissapears because of margin
// Could give containers an id and only have one type of container
