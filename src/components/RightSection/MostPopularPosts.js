import React from "react";
import styled from "styled-components";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const MostPopularPosts = () => {
	return (
		<MostPopularPostsContainer>
			<MostPopularPostsLeft>
				<span>Technology • Trends</span>
				<strong>Clubhouse</strong>
				<p>Tweets: 340 tys.</p>
			</MostPopularPostsLeft>
			<MostPopularPostsRight>
				<MoreHorizIcon />
			</MostPopularPostsRight>
		</MostPopularPostsContainer>
	);
};

export default MostPopularPosts;

const MostPopularPostsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
	padding: 1rem;
	border-bottom: 1px solid gray;
	&:hover {
		background: rgb(25, 29, 34);
		cursor: pointer;
	}
`;
const MostPopularPostsLeft = styled.div`
	display: flex;
	flex-direction: column;
	span,
	p {
		color: gray;
	}
	strong {
		color: whitesmoke;
		padding: 5px 0;
	}
`;
const MostPopularPostsRight = styled.div`
	& > .MuiSvgIcon-root:hover {
		background: rgba(0, 0, 255, 0.267);
		cursor: pointer;
		border-radius: 80%;
		color: rgb(25, 233, 248);
	}
`;
