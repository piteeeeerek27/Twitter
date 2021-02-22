import React from "react";
import styled from "styled-components";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import { Avatar } from "@material-ui/core";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import Gif from "@material-ui/icons/Gif";
import PollIcon from "@material-ui/icons/Poll";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import ScheduleIcon from "@material-ui/icons/Schedule";
import Posts from "./Posts";

const MiddleSection = () => {
	return (
		<MiddleSectionContainer>
			<MiddleSectionContainerTop>
				<h2>Home</h2>
				<StarOutlineIcon fontSize="medium" style={{ padding: 9 }} />
			</MiddleSectionContainerTop>
			<>
				<MiddleSectionHeaderBottom>
					<Top>
						<Avatar style={{ cursor: "pointer" }} />
						<input placeholder="What's happening?" />
					</Top>
					<Bottom>
						<BottomLeft>
							<CropOriginalIcon />
							<Gif />
							<PollIcon />
							<SentimentVerySatisfiedIcon />
							<ScheduleIcon />
						</BottomLeft>
						<BottomRight>
							<button>Tweet</button>
						</BottomRight>
					</Bottom>
				</MiddleSectionHeaderBottom>
				<Posts />
				<Posts />
				<Posts />
			</>
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

const MiddleSectionContainerTop = styled.div`
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
const MiddleSectionHeaderBottom = styled.div`
	border: 1px solid gray;
`;
const Top = styled.div`
	display: flex;
	padding: 15px;
	align-items: center;
	input {
		flex: 1;
		margin-left: 10px;
		border: none;
		background: transparent;
		color: whitesmoke;
		outline: 0;
		font-size: 1rem;
		&::placeholder {
			color: whitesmoke;
		}
	}
`;
const Bottom = styled.div`
	display: flex;
	padding: 0.5rem 0;
	border-top: 0px;
`;
const BottomLeft = styled.div`
	flex: 0.9;
	margin-left: 3rem;
	& > .MuiSvgIcon-root {
		margin-left: 0.3rem;
		padding: 5px;
		color: #66c4ff;
	}
	& > .MuiSvgIcon-root:hover {
		background: rgba(0, 0, 255, 0.267);
		cursor: pointer;
		border-radius: 80%;
	}
`;
const BottomRight = styled.div`
	flex: 0.15;
	margin-right: 1rem;
	button {
		background: #0081cf;
		color: whitesmoke;
		width: 100%;
		padding: 12px 1rem;
		border-radius: 20px;
		border: none;
		&:hover {
			background: #0089ba;
			cursor: pointer;
		}
	}
`;
