import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import BackupIcon from "@material-ui/icons/Backup";
import { Avatar } from "@material-ui/core";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { db } from "../../firebase";
import Comments from "./Comments";
import firebase from "firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import CancelIcon from "@material-ui/icons/Cancel";

const Posts = ({ timestamp, message, id, postImg, setPostImg }) => {
	const user = useSelector(selectUser);
	const [comment, setComment] = useState([]);
	const [inpt, setInpt] = useState("");
	const [heart, setHrt] = useState(true);
	const [heartCount, setHeartCount] = useState(0);

	useEffect(() => {
		db.collection("comments")
			.orderBy("timestampCom", "asc")
			.onSnapshot((snapshot) =>
				setComment(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					})),
				),
			);
	}, []);

	const AddComment = (e) => {
		e.preventDefault();
		db.collection("comments").add({
			comment: inpt,
			timestampCom: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setInpt("");
	};

	const removePost = () => {
		db.collection("posts").doc(id).delete();
	};

	const addHeart = () => {
		setHrt(!heart);

		if (heart) setHeartCount(heartCount + 1);
		if (!heart) setHeartCount(heartCount - 1);
	};

	return (
		<MiddleSectionPosts>
			<PostTop>
				<Avatar
					style={{ marginLeft: "10px" }}
					src={user?.photoURL}
					alt={user?.displayName}
				/>
				<PostTopLeft>
					<PostTopLeftDate>
						<strong>{user ? user.displayName : user.email}</strong>
						<span>{new Date(timestamp?.toDate()).toUTCString()}</span>
					</PostTopLeftDate>
					<PostTopLeftWrap>
						<p>{message}</p>
					</PostTopLeftWrap>
				</PostTopLeft>
				<PostTopDeletePost>
					<DeleteIcon onClick={removePost} />
				</PostTopDeletePost>
			</PostTop>
			<>
				<PostMiddleImage>
					{postImg ? (
						<>
							<img src={postImg} alt="putImage" />
							<CancelIcon onClick={() => setPostImg("")} />
						</>
					) : (
						""
					)}
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
					<PostMiddleReactionsHeart
						style={heart ? { color: "white" } : { color: "red" }}>
						<FavoriteBorderIcon onClick={addHeart} />
						<span>{heartCount}</span>
					</PostMiddleReactionsHeart>
					<PostMiddleReactionsCommentUpload>
						<BackupIcon />
					</PostMiddleReactionsCommentUpload>
				</PostMiddleReactions>
			</>
			<Comments
				id={id}
				comment={comment}
				AddComment={AddComment}
				inpt={inpt}
				setInpt={setInpt}
			/>
		</MiddleSectionPosts>
	);
};

export default Posts;

const MiddleSectionPosts = styled.div`
	border-bottom: 1px solid gray;
	width: 100%;
	height: auto;
	color: whitesmoke;
	position: relative;
	padding-top: 1rem;
`;
const PostTop = styled.div`
	display: flex;
	width: 98%;
	margin-left: auto;
	margin-right: auto;
`;
const PostTopLeft = styled.div`
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
const PostTopLeftWrap = styled.div`
	p {
		word-break: break-all;
	}
`;
const PostTopLeftDate = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-right: 1rem;
`;

const PostTopDeletePost = styled.div`
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
	position: relative;
	.MuiSvgIcon-root {
		position: absolute;
		right: 0.8%;
		top: 1.5%;
		color: #0081cf;
		&:hover {
			color: #0089ba;
			cursor: pointer;
		}
	}
	img {
		background: white;
		padding: 1px;
		object-fit: contain;
		max-width: 25vw;
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
