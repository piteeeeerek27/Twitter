import React, { useState } from "react";
import styled from "styled-components";
import CancelIcon from "@material-ui/icons/Cancel";

const SendImage = ({ setPostImg, setCloseImg }) => {
	const [iMg, setIMg] = useState("");
	const addImage = (e) => {
		e.preventDefault();
		setPostImg(iMg);
		setIMg("");
	};
	return (
		<SendImageContainer>
			<PutImage>
				<form>
					<input
						value={iMg}
						onChange={(e) => setIMg(e.target.value)}
						placeholder="Url"
					/>
					<button type="submit" onClick={addImage}>
						Send
					</button>
					<CancelIcon onClick={() => setCloseImg(false)} />
				</form>
			</PutImage>
		</SendImageContainer>
	);
};

export default SendImage;

const SendImageContainer = styled.div`
	position: relative;
`;

const PutImage = styled.div`
	background: rgb(19, 19, 19);
	display: grid;
	place-items: center;
	color: white;
	border-radius: 20px;
	height: auto;
	min-height: 6vh;
	min-width: 18vw;
	position: absolute;
	left: 5rem;
	top: -1rem;
	form {
		position: relative;
		input {
			background: transparent;
			color: white;
			font-size: 1.2rem;
			border: none;
			border-radius: 20px;
			height: 3.5vh;
			width: 14vw;
			padding-left: 0.5rem;
			outline: 0;
			margin-right: 2rem;
			&::placeholder {
				color: white;
			}
		}
		.MuiSvgIcon-root {
			position: absolute;
			right: -0.5rem;
			font-size: 2rem;
			color: #0081cf;
			&:hover {
				color: #0089ba;
				cursor: pointer;
			}
		}
		button {
			display: none;
		}
	}
`;
