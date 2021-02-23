import React from "react";
import styled from "styled-components";
import Posts from "./Posts";
import Header from "./Header";
import Send from "./Send";

const MiddleSection = () => {
	return (
		<MiddleSectionContainer>
			<Header />
			<Send />
			<Posts />
			<Posts />
			<Posts />
		</MiddleSectionContainer>
	);
};

export default MiddleSection;

const MiddleSectionContainer = styled.div`
	flex: 0.5;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
	height: 100vh;
`;