import { Avatar, Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const WorthWatchingPosts = () => {
	return (
		<WorthWatchingPostsContainer>
			<WorthWatchingPostsMiddle>
				<Avatar />
				<Content>
					<a href="">Angular</a>
					<p>@angular</p>
				</Content>
			</WorthWatchingPostsMiddle>
			<Button>Watch</Button>
		</WorthWatchingPostsContainer>
	);
};

export default WorthWatchingPosts;

const WorthWatchingPostsContainer = styled.div`
	flex: 1;
	padding: 0.6rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid gray;
	&:hover {
		background: rgb(25, 29, 34);
		cursor: pointer;
	}
	button {
		border: 1px solid rgb(25, 233, 248);
		color: rgb(25, 233, 248);
		border-radius: 15px;
		padding: 5px 1rem;
		&:hover {
			background: rgba(0, 0, 255, 0.185);
		}
	}
`;
const WorthWatchingPostsMiddle = styled.div`
	display: flex;
`;
const Content = styled.div`
	margin-left: 1rem;
	a {
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
		color: whitesmoke;
	}
	p {
		color: gray;
	}
`;
