import React from "react";
import styled from "styled-components";

const LeftSideList = ({ Icon, title }) => {
	return (
		<LeftSideListContainer>
			{Icon && <Icon fontSize="large" style={{ padding: 7 }} />}
			{Icon && <h3>{title}</h3>}
		</LeftSideListContainer>
	);
};

export default LeftSideList;

const LeftSideListContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 10px 0;
	h3 {
		margin-left: 1.2rem;
	}
	&:hover {
		background: rgba(0, 0, 255, 0.267);
		cursor: pointer;
		border-radius: 80%;
		color: #66c4ff;
	}
`;
