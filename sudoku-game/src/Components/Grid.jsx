import React from "react";
import styled from "styled-components";

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

const easyGrid = {
	oneOne: 0,
	oneTwo: 2,
	oneThree: 0,
	oneFour: 5,
	oneFive: 0,
	oneSix: 0,
	oneSeven: 0,
	oneEight: 6,
	oneNine: 0,
	twoOne: 5,
	twoTwo: 0,
	twoThree: 3,
	twoFour: 1,
	twoFive: 4,
	twoSix: 0,
	twoSeven: 0,
	twoEight: 9,
	twoNine: 0,
	threeOne: 0,
	threeTwo: 4,
	threeThree: 0,
	threeFour: 3,
	threeFive: 0,
	threeSix: 0,
	threeSeven: 0,
	threeEight: 0,
	threeNine: 1,
	fourOne: 0,
	fourTwo: 0,
	fourThree: 6,
	fourFour: 0,
	fourFive: 4,
	fourSix: 8,
	fourSeven: 0,
	fourEight: 0,
	fourNine: 0,
	fiveOne: 0,
	fiveTwo: 0,
	fiveThree: 9,
	fiveFour: 0,
	fiveFive: 0,
	fiveSix: 0,
	fiveSeven: 0,
	fiveEight: 0,
	fiveNine: 6,
	sixOne: 5,
	sixTwo: 0,
	sixThree: 8,
	sixFour: 0,
	sixFive: 0,
	sixSix: 7,
	sixSeven: 0,
	sixEight: 0,
	sixNine: 0,
	sevenOne: 0,
	sevenTwo: 8,
	sevenThree: 0,
	sevenFour: 0,
	sevenFive: 7,
	sevenSix: 0,
	sevenSeven: 9,
	sevenEight: 1,
	sevenNine: 5,
	eightOne: 9,
	eightTwo: 0,
	eightThree: 5,
	eightFour: 6,
	eightFive: 8,
	eightSix: 0,
	eightSeven: 0,
	eightEight: 0,
	eightNine: 7,
	nineOne: 0,
	nineTwo: 0,
	nineThree: 0,
	nineFour: 0,
	nineFive: 0,
	nineSix: 0,
	nineSeven: 0,
	nineEight: 0,
	nineNine: 4,
};

const mediumGrid = {
	oneOne: 0,
	oneTwo: 4,
	oneThree: 0,
	oneFour: 0,
	oneFive: 0,
	oneSix: 1,
	oneSeven: 0,
	oneEight: 9,
	oneNine: 0,
	twoOne: 0,
	twoTwo: 9,
	twoThree: 1,
	twoFour: 0,
	twoFive: 0,
	twoSix: 0,
	twoSeven: 0,
	twoEight: 0,
	twoNine: 8,
	threeOne: 5,
	threeTwo: 0,
	threeThree: 8,
	threeFour: 4,
	threeFive: 0,
	threeSix: 6,
	threeSeven: 0,
	threeEight: 0,
	threeNine: 1,
	fourOne: 0,
	fourTwo: 0,
	fourThree: 5,
	fourFour: 8,
	fourFive: 3,
	fourSix: 0,
	fourSeven: 0,
	fourEight: 0,
	fourNine: 0,
	fiveOne: 9,
	fiveTwo: 0,
	fiveThree: 0,
	fiveFour: 2,
	fiveFive: 0,
	fiveSix: 4,
	fiveSeven: 7,
	fiveEight: 8,
	fiveNine: 0,
	sixOne: 0,
	sixTwo: 0,
	sixThree: 0,
	sixFour: 6,
	sixFive: 0,
	sixSix: 0,
	sixSeven: 0,
	sixEight: 0,
	sixNine: 3,
	sevenOne: 0,
	sevenTwo: 5,
	sevenThree: 7,
	sevenFour: 2,
	sevenFive: 0,
	sevenSix: 0,
	sevenSeven: 0,
	sevenEight: 0,
	sevenNine: 0,
	eightOne: 4,
	eightTwo: 0,
	eightThree: 6,
	eightFour: 0,
	eightFive: 0,
	eightSix: 0,
	eightSeven: 0,
	eightEight: 0,
	eightNine: 0,
	nineOne: 8,
	nineTwo: 0,
	nineThree: 0,
	nineFour: 7,
	nineFive: 0,
	nineSix: 0,
	nineSeven: 0,
	nineEight: 6,
	nineNine: 5,
};

// changed prettier print width setting
// Changed names of inner/outer div
// reorganised cell information with id first
// shortened cell info/ used functions to make code dry
// cell data now isnt hardcoded
// added a medium grid
// added difficulty variable to swap between grids
// Title dissapears because of margin
// Could give containers an id and only have one type of container

const difficulty = mediumGrid;

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
	);
}

// const GridTemplate = styled.div`
// 	/* box-sizing: content-box; */
// 	border: 3px solid black;
// 	border-right: 2px solid black;
// 	margin: auto;
// 	display: grid;
// 	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
// 	border-color: blue;
// 	background-color: blanchedalmond;
// `;
