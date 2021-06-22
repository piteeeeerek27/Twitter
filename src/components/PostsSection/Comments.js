import React from "react";
import styled from "styled-components";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import EachComment from "./EachComment";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import BackupIcon from "@material-ui/icons/Backup";

const Comments = ({ AddComment, comment, inpt, setInpt, id }) => {
	const user = useSelector(selectUser);

	return (
		<div>
			<CommentSection>
				<CommentUserInfo>
					<Avatar />
					<CommentUserInfoLeft>
						<>
							<strong>{user ? user.displayName : user.email}</strong>
							<span>{user?.email}</span>
						</>
						<CommentsArea>
							{comment.map(({ id, data: { comment, timestampCom } }) => (
								<EachComment
									timestampCom={timestampCom}
									key={id}
									id={id}
									comment={comment}
								/>
							))}
						</CommentsArea>
					</CommentUserInfoLeft>
					<CommentUserInfoHorizon>
						<MoreHorizIcon />
					</CommentUserInfoHorizon>
				</CommentUserInfo>
				<CommentsReactions>
					<CommentsMiddleReactionsCommentUpload>
						<ChatBubbleOutlineIcon />
						<span>33</span>
					</CommentsMiddleReactionsCommentUpload>
					<CommentsMiddleReactionsRepeat>
						<RepeatIcon />
						<span>407</span>
					</CommentsMiddleReactionsRepeat>
					<CommentsMiddleReactionsHeart>
						<FavoriteBorderIcon />
						<span>443</span>
					</CommentsMiddleReactionsHeart>
					<CommentsMiddleReactionsCommentUpload>
						<BackupIcon />
					</CommentsMiddleReactionsCommentUpload>
				</CommentsReactions>
				<CommentBox>
					<form>
						<input
							value={inpt}
							onChange={(e) => setInpt(e.target.value)}
							type="text"
							placeholder="Add Comment"
						/>
						<button onClick={AddComment} type="submit">
							Submit
						</button>
					</form>
				</CommentBox>
			</CommentSection>
		</div>
	);
};

export default Comments;

const CommentSection = styled.div`
	display: flex;
	margin-top: 2rem;
	flex-direction: column;
	input {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
const CommentUserInfo = styled.div`
	display: flex;
	width: 98%;
	margin-left: auto;
	margin-right: auto;
`;
const CommentUserInfoLeft = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	strong {
		margin-left: 6px;
	}
	span {
		margin-left: 6px;
		color: gray;
		font-size: 10px;
	}
	p {
		margin-left: 6px;
	}
`;
const CommentUserInfoHorizon = styled.div`
	display: flex;
	justify-content: flex-end;
	& > .MuiSvgIcon-root:hover {
		background: rgba(0, 0, 255, 0.267);
		cursor: pointer;
		border-radius: 80%;
		color: rgb(25, 233, 248);
	}
`;
const CommentsMiddleReactionsCommentUpload = styled.div`
	display: flex;
	align-items: center;
	margin-top: 0.5rem;
	&:hover {
		span,
		.MuiSvgIcon-root {
			color: rgb(25, 233, 248);
			background: rgba(0, 0, 255, 0.185);
			cursor: pointer;
			border-radius: 80%;
		}
	}
	& > .MuiSvgIcon-root {
		padding: 5px;
	}
`;
const CommentsMiddleReactionsRepeat = styled.div`
	display: flex;
	align-items: center;
	margin-top: 0.5rem;
	&:hover {
		span,
		.MuiSvgIcon-root {
			color: lightgreen;
			background: rgba(0, 0, 255, 0.185);
			cursor: pointer;
			border-radius: 80%;
		}
	}
	& > .MuiSvgIcon-root {
		padding: 5px;
	}
`;
const CommentsMiddleReactionsHeart = styled.div`
	display: flex;
	align-items: center;
	margin-top: 0.5rem;
	&:hover {
		span,
		.MuiSvgIcon-root {
			color: red;
			background: rgba(0, 0, 255, 0.185);
			cursor: pointer;
			border-radius: 80%;
		}
	}
	& > .MuiSvgIcon-root {
		padding: 5px;
	}
`;
const CommentsArea = styled.div`
	height: 10vh;
	margin-top: 1rem;
	width: 90%;
	margin-bottom: 1rem;
	margin-left: 0.3rem;
	border: 1px solid darkgrey;
	padding: 0 0.3rem;
	border-radius: 10px;
	overflow: scroll;
	display: flex;
	flex-direction: column;
	&::-webkit-scrollbar {
		display: none;
	}
	p {
		overflow-wrap: break-word;
	}
`;
const CommentBox = styled.div`
	width: 100%;
	display: flex-start;
	margin-left: 1.8rem;
	justify-content: center;
	align-items: center;
	margin-top: 1rem;
	input {
		width: 80%;
		color: white;
		padding: 5px 1rem;
		border: none;
		outline: 0;
		background: transparent;
		&::placeholder {
			font-size: 1rem;
		}
	}
	button {
		display: none;
	}
`;
const CommentsReactions = styled.div`
	max-width: 40vw;
	margin-left: 2.5rem;
	display: flex;
	justify-content: space-between;
	margin-right: 5rem;
	align-items: center;
`;
