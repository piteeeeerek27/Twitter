import React, { useState } from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import Gif from "@material-ui/icons/Gif";
import PollIcon from "@material-ui/icons/Poll";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import ScheduleIcon from "@material-ui/icons/Schedule";
import SendImage from "./SendImage";
import { db } from "../../firebase";
import firebase from "firebase";

const Send = ({ setPostImg }) => {
	const [input, setInput] = useState("");
	const [closeImg, setCloseImg] = useState(false);

	const sendPost = (e) => {
		e.preventDefault();
		db.collection("posts").add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setInput("");
	};

	return (
		<SendContainer>
			<form>
				<Top>
					<Avatar style={{ cursor: "pointer" }} />
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="What's happening ?"
					/>
				</Top>
				<Bottom>
					<BottomLeft>
						{closeImg ? (
							<SendImage setCloseImg={setCloseImg} setPostImg={setPostImg} />
						) : (
							""
						)}
						<CropOriginalIcon onClick={() => setCloseImg(true)} />
						<Gif />
						<PollIcon />
						<SentimentVerySatisfiedIcon />
						<ScheduleIcon />
					</BottomLeft>
					<BottomRight>
						<button type="submit" onClick={sendPost}>
							Tweet
						</button>
					</BottomRight>
				</Bottom>
			</form>
		</SendContainer>
	);
};

export default Send;

const SendContainer = styled.div`
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
		outline: 0;
		padding: 12px 1rem;
		border-radius: 20px;
		border: none;
		&:hover {
			background: #0089ba;
			cursor: pointer;
		}
	}
`;
