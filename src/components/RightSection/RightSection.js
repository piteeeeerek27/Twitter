import React from "react";
import styled from "styled-components";
import MostPopular from "./MostPopular/MostPopular";
import RightSectionHeader from "./RightSectionHeader";
import WorthWatching from "./WorthWatching/WorthWatching";

const RightSection = () => {
	return (
		<RightSectionContainer>
			<RightSectionHeader />

			<MostPopular />

			<WorthWatching />
		</RightSectionContainer>
	);
};

export default RightSection;

const RightSectionContainer = styled.div`
	flex: 0.3;
	padding-top: 10px;
	margin-left: 2rem;
`;
