import React from "react";
import styled from "styled-components";

const OuterDiv = styled.div`
	border: solid black 6px;
	width: 540px;
	height: 540px;
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	display: grid;
`;
const InnerDiv = styled.input`
	border: 1.5px solid black;
	width: 100%;
`;
const ContainerDivOne = styled.div`
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	border: 3px solid black;
`;
const ContainerDivTwo = styled.div`
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	border: 3px solid black;
`;
const ContainerDivThree = styled.div`
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	border: 3px solid black;
`;
const ContainerDivFour = styled.div`
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	border: 3px solid black;
`;
const ContainerDivFive = styled.div`
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	border: 3px solid black;
`;
const ContainerDivSix = styled.div`
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	border: 3px solid black;
`;
const ContainerDivSeven = styled.div`
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	border: 3px solid black;
`;
const ContainerDivEight = styled.div`
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	border: 3px solid black;
`;
const ContainerDivNine = styled.div`
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	border: 3px solid black;
`;

const easyStart = {
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

export default function Title() {
	return (
		<OuterDiv id="outer">
			<ContainerDivOne>
				<InnerDiv id="OneOne" disabled={!!easyStart["oneOne"]}></InnerDiv>
				<InnerDiv id="OneTwo" disabled={!!easyStart["oneTwo"]}></InnerDiv>
				<InnerDiv id="OneThree" disabled={!!easyStart["oneThree"]}></InnerDiv>
				<InnerDiv id="OneFour" disabled={!!easyStart["oneFour"]}></InnerDiv>
				<InnerDiv id="OneFive" disabled={!!easyStart["oneFive"]}></InnerDiv>
				<InnerDiv id="OneSix" disabled={!!easyStart["oneSix"]}></InnerDiv>
				<InnerDiv id="OneSeven" disabled={!!easyStart["oneSeven"]}></InnerDiv>
				<InnerDiv id="OneEight" disabled={!!easyStart["oneEight"]}></InnerDiv>
				<InnerDiv id="OneNine" disabled={!!easyStart["oneNine"]}></InnerDiv>
			</ContainerDivOne>
			<ContainerDivTwo>
				<InnerDiv id="TwoOne" disabled={!!easyStart["twoOne"]}></InnerDiv>
				<InnerDiv id="TwoTwo" disabled={!!easyStart["twoTwo"]}></InnerDiv>
				<InnerDiv id="TwoThree" disabled={!!easyStart["twoThree"]}></InnerDiv>
				<InnerDiv id="TwoFour" disabled={!!easyStart["twoFour"]}></InnerDiv>
				<InnerDiv id="TwoFive" disabled={!!easyStart["twoFive"]}></InnerDiv>
				<InnerDiv id="TwoSix" disabled={!!easyStart["twoSix"]}></InnerDiv>
				<InnerDiv id="TwoSeven" disabled={!!easyStart["twoSeven"]}></InnerDiv>
				<InnerDiv id="TwoEight" disabled={!!easyStart["twoEight"]}></InnerDiv>
				<InnerDiv id="TwoNine" disabled={!!easyStart["twoNine"]}></InnerDiv>
			</ContainerDivTwo>
			<ContainerDivThree>
				<InnerDiv id="ThreeOne" disabled={!!easyStart["threeOne"]}></InnerDiv>
				<InnerDiv id="ThreeTwo" disabled={!!easyStart["threeTwo"]}></InnerDiv>
				<InnerDiv id="ThreeThree" disabled={!!easyStart["threeThree"]}></InnerDiv>
				<InnerDiv id="ThreeFour" disabled={!!easyStart["threeFour"]}></InnerDiv>
				<InnerDiv id="ThreeFive" disabled={!!easyStart["threeFive"]}></InnerDiv>
				<InnerDiv id="ThreeSix" disabled={!!easyStart["threeSix"]}></InnerDiv>
				<InnerDiv id="ThreeSeven" disabled={!!easyStart["threeSeven"]}></InnerDiv>
				<InnerDiv id="ThreeEight" disabled={!!easyStart["threeEight"]}></InnerDiv>
				<InnerDiv id="ThreeNine" disabled={!!easyStart["threeNine"]}></InnerDiv>
			</ContainerDivThree>
			<ContainerDivFour>
				<InnerDiv id="FourOne" disabled={!!easyStart["fourOne"]}></InnerDiv>
				<InnerDiv id="FourTwo" disabled={!!easyStart["fourTwo"]}></InnerDiv>
				<InnerDiv id="FourThree" disabled={!!easyStart["fourThree"]}></InnerDiv>
				<InnerDiv id="FourFour" disabled={!!easyStart["fourFour"]}></InnerDiv>
				<InnerDiv id="FourFive" disabled={!!easyStart["fourFive"]}></InnerDiv>
				<InnerDiv id="FourSix" disabled={!!easyStart["fourSix"]}></InnerDiv>
				<InnerDiv id="FourSeven" disabled={!!easyStart["fourSeven"]}></InnerDiv>
				<InnerDiv id="FourEight" disabled={!!easyStart["fourEight"]}></InnerDiv>
				<InnerDiv id="FourNine" disabled={!!easyStart["fourNine"]}></InnerDiv>
			</ContainerDivFour>
			<ContainerDivFive>
				<InnerDiv id="FiveOne" disabled={!!easyStart["fiveOne"]}></InnerDiv>
				<InnerDiv id="FiveTwo" disabled={!!easyStart["fiveTwo"]}></InnerDiv>
				<InnerDiv id="FiveThree" disabled={!!easyStart["fiveThree"]}></InnerDiv>
				<InnerDiv id="FiveFour" disabled={!!easyStart["fiveFour"]}></InnerDiv>
				<InnerDiv id="FiveFive" disabled={!!easyStart["fiveFive"]}></InnerDiv>
				<InnerDiv id="FiveSix" disabled={!!easyStart["fiveSix"]}></InnerDiv>
				<InnerDiv id="FiveSeven" disabled={!!easyStart["fiveSeven"]}></InnerDiv>
				<InnerDiv id="FiveEight" disabled={!!easyStart["fiveEight"]}></InnerDiv>
				<InnerDiv id="FiveNine" disabled={!!easyStart["fiveNine"]}></InnerDiv>
			</ContainerDivFive>
			<ContainerDivSix>
				<InnerDiv id="SixOne" disabled={!!easyStart["sixOne"]}></InnerDiv>
				<InnerDiv id="SixTwo" disabled={!!easyStart["sixTwo"]}></InnerDiv>
				<InnerDiv id="SixThree" disabled={!!easyStart["sixThree"]}></InnerDiv>
				<InnerDiv id="SixFour" disabled={!!easyStart["sixFour"]}></InnerDiv>
				<InnerDiv id="SixFive" disabled={!!easyStart["sixFive"]}></InnerDiv>
				<InnerDiv id="SixSix" disabled={!!easyStart["sixSix"]}></InnerDiv>
				<InnerDiv id="SixSeven" disabled={!!easyStart["sixSeven"]}></InnerDiv>
				<InnerDiv id="SixEight" disabled={!!easyStart["sixEight"]}></InnerDiv>
				<InnerDiv id="SixNine" disabled={!!easyStart["sixNine"]}></InnerDiv>
			</ContainerDivSix>
			<ContainerDivSeven>
				<InnerDiv id="SevenOne" disabled={!!easyStart["sevenOne"]}></InnerDiv>
				<InnerDiv id="SevenTwo" disabled={!!easyStart["sevenTwo"]}></InnerDiv>
				<InnerDiv id="SevenThree" disabled={!!easyStart["sevenThree"]}></InnerDiv>
				<InnerDiv id="SevenFour" disabled={!!easyStart["sevenFour"]}></InnerDiv>
				<InnerDiv id="SevenFive" isabled={!!easyStart["sevenFive"]}></InnerDiv>
				<InnerDiv id="SevenSix" disabled={!!easyStart["sevenSix"]}></InnerDiv>
				<InnerDiv id="SevenSeven" disabled={!!easyStart["sevenSeven"]}></InnerDiv>
				<InnerDiv id="SevenEight" disabled={!!easyStart["sevenEight"]}></InnerDiv>
				<InnerDiv id="SevenNine" disabled={!!easyStart["sevenNine"]}></InnerDiv>
			</ContainerDivSeven>
			<ContainerDivEight>
				<InnerDiv id="EightOne" disabled={!!easyStart["eightOne"]}></InnerDiv>
				<InnerDiv id="EightTwo" disabled={!!easyStart["eightTwo"]}></InnerDiv>
				<InnerDiv id="EightThree" disabled={!!easyStart["eightThree"]}></InnerDiv>
				<InnerDiv id="EightFour" disabled={!!easyStart["eightFour"]}></InnerDiv>
				<InnerDiv id="EightFive" disabled={!!easyStart["eightFive"]}></InnerDiv>
				<InnerDiv id="EightSix" disabled={!!easyStart["eightSix"]}></InnerDiv>
				<InnerDiv id="EightSeven" disabled={!!easyStart["eightSeven"]}></InnerDiv>
				<InnerDiv id="EightEight" disabled={!!easyStart["eightEight"]}></InnerDiv>
				<InnerDiv id="EightNine" disabled={!!easyStart["eightNine"]}></InnerDiv>
			</ContainerDivEight>
			<ContainerDivNine>
				<InnerDiv id="NineOne" disabled={!!easyStart["nineOne"]}></InnerDiv>
				<InnerDiv id="NineTwo" disabled={!!easyStart["nineTwo"]}></InnerDiv>
				<InnerDiv id="NineThree" disabled={!!easyStart["nineThree"]}></InnerDiv>
				<InnerDiv id="NineFour" disabled={!!easyStart["nineFour"]}></InnerDiv>
				<InnerDiv id="NineFive" disabled={!!easyStart["nineFive"]}></InnerDiv>
				<InnerDiv id="NineSix" disabled={!!easyStart["nineSix"]}></InnerDiv>
				<InnerDiv id="NineSeven" disabled={!!easyStart["nineSeven"]}></InnerDiv>
				<InnerDiv id="NineEight" disabled={!!easyStart["nineEight"]}></InnerDiv>
				<InnerDiv id="NineNine" disabled={!!easyStart["nineNine"]}></InnerDiv>
			</ContainerDivNine>
		</OuterDiv>
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
