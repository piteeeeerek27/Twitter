import React from "react";
import styled from "styled-components";
import SettingsIcon from "@material-ui/icons/Settings";
import MostPopularPosts from "./MostPopularPosts";

const MostPopular = () => {
	return (
		<MostPopularContainer>
			<MostPopularHeader>
				<span>Most popular for you</span>
				<SettingsIcon />
			</MostPopularHeader>
			<MostPopularPosts />
			<MostPopularPosts />
			<MostPopularPosts />
			<MostPopularPosts />
			<MostPopularShowMore>
				<span>Show more</span>
			</MostPopularShowMore>
		</MostPopularContainer>
	);
};

export default MostPopular;

const MostPopularContainer = styled.div`
	height: auto;
	background: rgb(21, 24, 28);
	margin-top: 1rem;
	border-radius: 20px;
	border: 1px solid gray;
`;
const MostPopularHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.4rem 1rem;
	border-bottom: 1px solid gray;
	span {
		flex: 0.9;
		font-size: 1.3rem;
		font-weight: bold;
	}
	& > .MuiSvgIcon-root:hover {
		color: rgb(25, 233, 248);
		background: rgba(0, 0, 255, 0.185);
		cursor: pointer;
		border-radius: 80%;
	}
	& > .MuiSvgIcon-root {
		padding: 10px;
		margin-top: 5px;
	}
`;
const MostPopularShowMore = styled.div`
	span {
		display: flex;
		align-items: center;
		color: rgb(18, 160, 170);
		font-size: 1.1rem;
		padding: 1rem;
		justify-content: center;
		cursor: pointer;
		font-weight: bold;
		&:hover {
			color: rgb(18, 130, 170);
		}
	}
`;
