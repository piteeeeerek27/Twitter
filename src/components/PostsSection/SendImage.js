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
						placeholder="Paste Url"
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
	z-index: 100;
`;

const PutImage = styled.div`
	background: whitesmoke;
	display: grid;
	place-items: center;
	color: black;
	border-radius: 20px;
	position: absolute;
	left: 3rem;
	top: 3rem;
	form {
		position: relative;
		display: flex;
		align-items: center;
		input {
			min-height: 40px;
			padding: 5px;
			max-width: 180px;
			background: transparent;
			color: white;
			font-size: 1.2rem;
			border: none;
			border-radius: 20px;
			padding-left: 1rem;
			outline: 0;
			&::placeholder {
				color: black;
			}
		}
		.MuiSvgIcon-root {
			margin-right: 0.5rem;
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
