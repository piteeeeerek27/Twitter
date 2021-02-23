import React from "react";
import styled from "styled-components";
import LeftSide from "./components/LeftSection/LeftSide";
import MiddleSection from "./components/MiddleSection/MiddleSection";
import RightSide from "./components/RightSection/RightSide";

const App = () => {
	return (
		<AppContainer>
			<LeftSide />
			<MiddleSection />
			<RightSide />
		</AppContainer>
	);
};

export default App;

const AppContainer = styled.div`
	height: 100vh;
	width: 70%;
	color: whitesmoke;
	display: flex;
	margin: 0 auto;
`;
