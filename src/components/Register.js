import React from "react";
import styled from "styled-components";
import TwitterIcon from "@material-ui/icons/Twitter";

const Register = () => {
	return (
		<RegisterContainer>
			<RegisterTop>
				<TwitterIcon />
				<button>further</button>
			</RegisterTop>
			<RegisterMiddle>
				<h1>Create account</h1>
				<input placeholder="Name" />
				<input placeholder="E-mail" />
			</RegisterMiddle>
			<RegisterBottom></RegisterBottom>
		</RegisterContainer>
	);
};

export default Register;

const RegisterContainer = styled.div`
	height: 70vh;
	width: 30vw;
	background: darkgray;
	position: absolute;
	z-index: 1;
	color: white;
	top: 15%;
	left: 30%;
	right: 50%;
	border-radius: 20px;
`;

const RegisterTop = styled.div`
	display: flex;
	align-items: center;
	width: 60%;
	margin-left: auto;
	padding: 10px;
	justify-content: space-between;
	button {
		background: rgb(11, 127, 236);
		color: Whitesmoke;
		border-radius: 20px;
		padding: 0.5rem 1rem;
		border: none;
		font-size: 1rem;
		cursor: pointer;
	}
	& > .MuiSvgIcon-root {
		font-size: 2.5rem;
	}
`;
const RegisterMiddle = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: flex-start;
	width: 100%;
	margin-top: 2rem;
	h1 {
		margin-right: auto;
		margin-left: 2.2rem;
	}
	input {
		&::placeholder {
			color: white;
		}
		width: 80%;
		margin-top: 2rem;
		border-radius: 5px;
		padding: 0.8rem 1rem;
		font-size: 1.5rem;
		background: transparent;
		color: white;
		border: 2px solid white;
		outline: 0;
		&:focus {
			color: rgb(25, 233, 248);
			border: 2px solid rgb(25, 233, 248);
			&::placeholder {
				color: rgb(25, 233, 248);
			}
		}
	}
`;
const RegisterBottom = styled.div``;
