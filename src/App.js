import React from "react";
import styled from "styled-components";
import LeftSide from "./components/LeftSection/LeftSide";
import MiddleSection from "./components/MiddleSection/MiddleSection";
import RightSide from "./components/RightSection/RightSide";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Login from "./components/Login";

const App = () => {
	const user = useSelector(selectUser);
	return (
		<>
			{!user ? (
				<Login />
			) : (
				<AppContainer>
					<LeftSide />
					<MiddleSection />
					<RightSide />
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
