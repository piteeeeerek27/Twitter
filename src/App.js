import React, { useEffect } from "react";
import styled from "styled-components";
import LeftSection from "./components/LeftSectionMainPage/LeftSection";
import MiddleSection from "./components/PostsSection/MiddleSection";
import RightSection from "./components/RightSection/RightSection";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login/Login";
import { auth } from "./firebase";

const App = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.email,
						photoUrl: userAuth.photoURL,
					}),
				);
			}
			if (!userAuth) dispatch(logout());
		});
	}, []);

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
