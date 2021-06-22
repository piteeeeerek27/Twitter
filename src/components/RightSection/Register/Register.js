import React from "react";
import styled from "styled-components";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Button } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

const Register = ({
	register,
	createAccountEmail,
	setCreateAccountEmail,
	createAccountPassword,
	setCreateAccountPassword,
	RegisterPopUp,
}) => {
	return (
		<RegisterContainer>
			<RegisterTop>
				<CancelIcon onClick={RegisterPopUp} />
				<TwitterIcon />
				<button>further</button>
			</RegisterTop>
			<RegisterBox>
				<form>
					<h1>Create account</h1>
					<input
						type="email"
						value={createAccountEmail}
						onChange={(e) => setCreateAccountEmail(e.target.value)}
						placeholder="E-mail"
					/>
					<input
						value={createAccountPassword}
						onChange={(e) => setCreateAccountPassword(e.target.value)}
						type="password"
						placeholder="Password"
					/>
				</form>
				<Button onClick={register}>Register now</Button>
			</RegisterBox>
		</RegisterContainer>
	);
};
export default Register;

const RegisterContainer = styled.div`
	-webkit-box-shadow: 5px 5px 50px 24px #000000;
	box-shadow: 5px 5px 50px 24px #000000;
	padding-top: 1rem;
	padding-bottom: 0.2rem;
	background: #2b2b2b;
	min-width: 450px;
	min-height: 380px;
	position: absolute;
	z-index: 1;
	color: white;
	top: 30%;
	left: 12%;
	border-radius: 20px;
	animation: drop 1s ease-in-out backwards;
	@media (max-width: 1500px) {
		left: 9%;
	}
	@media (max-width: 1315px) {
		left: 7%;
	}
	@media (max-width: 1215px) {
		left: 5%;
	}
	@media (max-width: 1115px) {
		left: 3%;
	}
	@media (max-width: 1015px) {
		left: 1%;
	}
	@media (max-width: 980px) {
		left: 0%;
	}
`;
const RegisterTop = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	width: 100%;
	padding: 10px;
	justify-content: space-between;
	/* animation: ${(props) => props.changeState} 1s ease-in-out backwards; */
	button {
		background: rgb(11, 127, 236);
		color: Whitesmoke;
		border-radius: 20px;
		padding: 0.5rem 1rem;
		border: none;
		font-size: 1rem;
		margin-right: 20px;
		outline: 0;
		cursor: pointer;
		&:hover {
			background: rgb(32, 147, 255);
		}
	}
	& > .MuiSvgIcon-root {
		font-size: 2.5rem;
	}
	& .MuiSvgIcon-root:hover {
		color: rgb(32, 147, 255);
		cursor: pointer;
	}
	@keyframes drop {
		0% {
			opacity: 0;
			transform: translateY(-800px);
		}
		100% {
			transform: translateY(0px);
			opacity: 1;
		}
	}
	@keyframes hide {
		100% {
			opacity: 1;
			transform: translateY(0px);
		}
		0% {
			transform: translateY(-800px);
			opacity: 0;
		}
	}
`;

const RegisterBox = styled.div`
	& > Button {
		display: flex;
		width: 100%;
		justify-content: center;
		margin-top: 1rem;
		cursor: pointer;
		color: rgb(11, 127, 236);
	}
	form {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: flex-start;
		width: 100%;
		margin-top: 2rem;
		h1 {
			text-align: center;
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
	}
`;
