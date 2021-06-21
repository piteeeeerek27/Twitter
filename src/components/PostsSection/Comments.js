import React from "react";
import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";
import { db } from "../../firebase";

const Comments = ({ comment, id, timestampCom }) => {
	const removeCom = () => {
		return db.collection("comments").doc(id).delete();
	};
	return (
		<CommentsContainer>
			<CommentsInfo>
				<p>{comment}</p>
				<span>{new Date(timestampCom?.toDate()).toUTCString()}</span>
			</CommentsInfo>
			<CommentsDelete>
				<DeleteIcon onClick={removeCom} fontSize="small" />
			</CommentsDelete>
		</CommentsContainer>
	);
};

export default Comments;
const CommentsContainer = styled.div`
	display: flex;
	position: relative;
`;

const CommentsInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex: 1;
	position: relative;
	flex-wrap: wrap;
	padding: 5, 1px 0;
	p {
		margin-left: 0.5rem;
		max-width: 60%;
		font-size: 0.71rem;
	}
	span {
		position: absolute;
		right: 7%;
		top: 5px;
	}
`;
const CommentsDelete = styled.div`
	position: absolute;
	right: 5px;
	.MuiSvgIcon-root:hover {
		background: rgba(0, 0, 255, 0.267);
		cursor: pointer;
		border-radius: 80%;
		color: rgb(25, 233, 248);
	}
`;
