import React from "react";
import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";
import { Date } from "prismic-reactjs";

const Comments = ({ comment }) => {
	return (
		<CommentsContainer>
			<CommentsInfo>
				<p>{comment}</p>
				<span>time</span>
			</CommentsInfo>
			<CommentsDelete>
				<DeleteIcon fontSize="small" />
			</CommentsDelete>
		</CommentsContainer>
	);
};

export default Comments;

const CommentsContainer = styled.div`
	display: flex;
	align-items: center;
	&:hover {
		background: rgb(8, 8, 8);
		cursor: pointer;
	}
	p {
		margin-top: 0.3rem;
	}
`;
const CommentsInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex: 0.9;
`;
const CommentsDelete = styled.div`
	flex: 0.1;
	margin-left: 1rem;
	.MuiSvgIcon-root:hover {
		background: rgba(0, 0, 255, 0.267);
		cursor: pointer;
		border-radius: 80%;
		color: rgb(25, 233, 248);
	}
`;
