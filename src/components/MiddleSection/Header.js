import React from "react";
import styled from "styled-components";
import StarOutlineIcon from "@material-ui/icons/StarOutline";

const Header = () => {
	return (
		<MiddleSectionHeaderContainer>
			<h2>Home</h2>
			<StarOutlineIcon
				fontSize="medium"
				style={{ padding: 9, color: "rgb(25, 233, 248)" }}
			/>
		</MiddleSectionHeaderContainer>
	);
};

export default Header;

const MiddleSectionHeaderContainer = styled.div`
	display: flex;
	position: sticky;
	background: black;
	z-index: 1;
	top: 0;
	align-items: center;
	justify-content: space-between;
	padding: 0.7rem;
	border: 1px solid gray;
	& > .MuiSvgIcon-root:hover {
		background: rgba(0, 0, 255, 0.267);
		cursor: pointer;
		border-radius: 80%;
	}
	h2 {
		cursor: pointer;
	}
`;
