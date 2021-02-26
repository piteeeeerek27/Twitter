import React from "react";
import styled from "styled-components";
import TwitterIcon from "@material-ui/icons/Twitter";

const Register = ({
	register,
	secondEmail,
	setSecondEmail,
	secondPassword,
	setSecondPassword,
}) => {
	return (
		<RegisterContainer>
			<RegisterTop>
				<TwitterIcon />
				<button>further</button>
			</RegisterTop>
			<RegisterMiddle>
				<form>
					<h1>Create account</h1>
					<input
						type="email"
						value={secondEmail}
						onChange={(e) => console.log(setSecondEmail(e.target.value))}
						placeholder="E-mail"
					/>
					<input
						value={secondPassword}
						onChange={(e) => setSecondPassword(e.target.value)}
						type="password"
						placeholder="Password"
					/>
				</form>
				<span onClick={register}>Register now</span>
			</RegisterMiddle>
		</RegisterContainer>
	);
};
export default Register;

const RegisterContainer = styled.div`
	height: 40vh;
	width: 30vw;
	padding-top: 1rem;
	padding-bottom: 1rem;
	background: #000;
	position: absolute;
	z-index: 1;
	color: white;
	top: 30%;
	left: 32%;
	right: 50%;
	border-radius: 20px;
`;
const RegisterTop = styled.div`
	display: flex;
	align-items: center;
	width: 55%;
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
		outline: 0;
		margin-right: 2rem;
		cursor: pointer;
		&:hover {
			background: rgb(32, 147, 255);
		}
	}
	& > .MuiSvgIcon-root {
		font-size: 3rem;
		margin-right: 2rem;
	}
`;
const RegisterMiddle = styled.div`
	span {
		display: flex;
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
