import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import BackupIcon from "@material-ui/icons/Backup";
import { Avatar } from "@material-ui/core";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { db } from "../../firebase";

const Posts = ({ timestamp, message }) => {
	const user = useSelector(selectUser);
	const [counter, setCounter] = useState(0);
	const [counters, setCounters] = useState(false);
	const [comment, setComment] = useState([]);

	useEffect(() => {
		db.collection("comment").onSnapshot((snapshot) =>
			setComment(
				snapshot.docs.map((doc) => ({
					data: doc.data(),
				})),
			),
		);
	}, []);

	const AddComment = (e) => {
		e.preventDefault();
		db.collection("comment").add({
			comment: comment,
		});
		setComment("");
	};

	// const Count = () => {
	// 	setCounters((prev) => !prev);
	// 	if (counters) {
	// 		setCounter(counter + 1);
	// 	} else {
	// 		setCounter(counter - 1);
	// 	}
	// };
	return (
		<MiddleSectionPosts>
			<PostTop>
				<Avatar src={user?.photoURL} alt={user?.displayName} />
				<PostTopLeft>
					<div>
						<strong>{user ? user.displayName : user.email}</strong>
						<span>{message}</span>
					</div>
					<div>
						<p>{timestamp}</p>
					</div>
				</PostTopLeft>
				<PostTopRight>
					<MoreHorizIcon />
				</PostTopRight>
			</PostTop>
			<div>
				<PostMiddleImage>
					<img
						src="https://media.gettyimages.com/photos/tesla-ceo-elon-musk-speaks-during-the-unveiling-of-the-new-tesla-y-picture-id1130598318?s=612x612"
						alt=""
					/>
				</PostMiddleImage>
				<PostMiddleReactions>
					<PostMiddleReactionsCommentUpload>
						<ChatBubbleOutlineIcon />
						<span>32</span>
					</PostMiddleReactionsCommentUpload>
					<PostMiddleReactionsRepeat>
						<RepeatIcon />
						<span>407</span>
					</PostMiddleReactionsRepeat>
					<PostMiddleReactionsHeart>
						<FavoriteBorderIcon />
						<span>2.8k</span>
					</PostMiddleReactionsHeart>
					<PostMiddleReactionsCommentUpload>
						<BackupIcon />
					</PostMiddleReactionsCommentUpload>
				</PostMiddleReactions>
			</div>
			<PostBottom>
				<PostTop>
					<Avatar />
					<PostTopLeft>
						<div>
							<strong>{user ? user.displayName : user.email}</strong>
							<span>{user?.email}</span>
						</div>
						<div>
							<p>{comment}</p>
						</div>
					</PostTopLeft>
					<PostTopRight>
						<MoreHorizIcon />
					</PostTopRight>
				</PostTop>
				<PostBottomBottom>
					<PostMiddleReactionsCommentUpload>
						<ChatBubbleOutlineIcon />
						<span>33</span>
					</PostMiddleReactionsCommentUpload>
					<PostMiddleReactionsRepeat>
						<RepeatIcon />
						<span>407</span>
					</PostMiddleReactionsRepeat>
					<PostMiddleReactionsHeart>
						<FavoriteBorderIcon />
						<span>{counter}</span>
					</PostMiddleReactionsHeart>
					<PostMiddleReactionsCommentUpload>
						<BackupIcon />
					</PostMiddleReactionsCommentUpload>
				</PostBottomBottom>
				<CommentBox>
					<input type="text" placeholder="Add Comment" />
					<button onSubmit={AddComment} type="submit">
						Submit
					</button>
				</CommentBox>
			</PostBottom>
		</MiddleSectionPosts>
	);
};

export default Posts;

const MiddleSectionPosts = styled.div`
	border-top: 1px solid gray;
	border-bottom: 1px solid gray;
	height: 65vh;
	color: whitesmoke;
	position: relative;
	padding: 0.8rem;
`;
const PostTop = styled.div`
	display: flex;
`;
const PostTopLeft = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0.7;
	strong {
		margin-left: 6px;
	}
	span {
		margin-left: 6px;
		color: gray;
	}
	p {
		margin-left: 6px;
	}
`;
const PostTopRight = styled.div`
	flex: 0.3;
	display: flex;
	justify-content: flex-end;
	& > .MuiSvgIcon-root:hover {
		background: rgba(0, 0, 255, 0.267);
		cursor: pointer;
		border-radius: 80%;
		color: rgb(25, 233, 248);
	}
`;
const PostMiddleImage = styled.div`
	img {
		object-fit: contain;
		max-width: 30vw;
		margin-left: 2.8rem;
		margin-top: 0.5rem;
		border-radius: 20px;
	}
	@media (max-width: 1640px) {
		img {
			max-width: 25vw;
		}
	}
	@media (max-width: 1200px) {
		img {
			max-width: 20vw;
		}
	}
	@media (max-width: 1080px) {
		img {
			max-width: 15vw;
		}
	}
`;
const PostMiddleReactions = styled.div`
	max-width: 40vw;
	margin-left: 2.8rem;
	display: flex;
	justify-content: space-between;
	margin-right: 5rem;
	align-items: center;
`;
const PostMiddleReactionsCommentUpload = styled.div`
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
const PostMiddleReactionsRepeat = styled.div`
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
const PostMiddleReactionsHeart = styled.div`
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
const PostBottom = styled.div`
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
const CommentBox = styled.div`
	width: 100%;
	display: flex-start;
	margin-left: 1.8rem;
	justify-content: center;
	align-items: center;
	margin-top: 1rem;
	input {
		width: 40%;
		padding: 5px 1rem;
		border: none;
		outline: 0;
		&::placeholder {
			font-size: 1rem;
		}
	}
	button {
		display: none;
	}
`;

const PostBottomBottom = styled.div`
	max-width: 40vw;
	margin-left: 2.5rem;
	display: flex;
	justify-content: space-between;
	margin-right: 5rem;
	align-items: center;
`;
