import React from "react";
import styled from "styled-components";
import LeftSide from "./components/LeftSide";
import MiddleSection from "./components/MiddleSection";

const App = () => {
	return (
		<AppContainer>
			<LeftSide />

			<MiddleSection />

			{/* <RightSide /> */}
		</AppContainer>
	);
};

export default App;

const AppContainer = styled.div`
	height: 100vh;
	width: 100%;
	color: whitesmoke;
	display: flex;
`;
