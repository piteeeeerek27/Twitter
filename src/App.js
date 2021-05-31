import React from "react";
import styled from "styled-components";
import LeftSection from "./components/LeftSectionMainPage/LeftSection";
import MiddleSection from "./components/MiddleSectionMainPage/MiddleSection";
import RightSection from "./components/RightSection/RightSection";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Login from "./components/RightSection/Login/Login";

const App = () => {
	const user = useSelector(selectUser);

	return (
		<>
			{!user ? (
				<Login />
			) : (
				<AppContainer>
					<LeftSection />
					<MiddleSection />
					<RightSection />
				</AppContainer>
			)}
		</>
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
