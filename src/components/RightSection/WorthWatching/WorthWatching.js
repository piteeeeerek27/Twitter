import React from "react";
import styled from "styled-components";
import WorthWatchingPosts from "./WorthWatchingPosts";

const WorthWatching = () => {
	return (
		<WorthWatchingContainer>
			<WorthWatchingHeader>
				<span>Worth watching</span>
			</WorthWatchingHeader>
			<WorthWatchingPosts />
			<WorthWatchingPosts />
			<WorthWatchingShowMore>
				<span>Show more</span>
			</WorthWatchingShowMore>
		</WorthWatchingContainer>
	);
};

export default WorthWatching;

const WorthWatchingContainer = styled.div`
	height: auto;
	background: rgb(21, 24, 28);
	margin-top: 1rem;
	border-radius: 20px;
	border: 1px solid gray;
`;
const WorthWatchingHeader = styled.div`
	padding: 0.5rem 1rem;
	border-bottom: 1px solid gray;
	span {
		font-size: 1.5rem;
		font-weight: bold;
	}
`;
const WorthWatchingShowMore = styled.div`
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
