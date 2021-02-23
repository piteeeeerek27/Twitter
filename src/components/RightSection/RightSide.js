import React from "react";
import styled from "styled-components";
import MostPopular from "./MostPopular";
import RightSideHeader from "./RightSideHeader";
import WorthWatching from "./WorthWatching";

const RightSide = () => {
	return (
		<RightSideContainer>
			<RightSideHeader />

			<MostPopular />

			<WorthWatching />
		</RightSideContainer>
	);
};

export default RightSide;

const RightSideContainer = styled.div`
	flex: 0.3;
	padding-top: 10px;
	margin-left: 2rem;
`;
