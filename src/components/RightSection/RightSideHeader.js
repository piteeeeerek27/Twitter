import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

const RightSideHeader = () => {
	return (
		<RightSideHeaderContainer>
			<SearchIcon />
			<input placeholder="Twitter Search" />
		</RightSideHeaderContainer>
	);
};

export default RightSideHeader;

const RightSideHeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 10px;
	background: rgb(21, 24, 28);
	border-radius: 20px;
	& > .MuiSvgIcon-root {
		color: gray;
	}
	input {
		flex: 1;
		margin-left: 10.1px;
		background: transparent;
		border: none;
		outline: 0;
		color: whitesmoke;
		font-size: 14.1px;
		&::placeholder {
			color: gray;
		}
	}
`;
