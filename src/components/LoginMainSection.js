import React, { useState } from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import TwitterIcon from "@material-ui/icons/Twitter";
import { auth } from "../firebase";
import Register from "./Register";
import { useHistory } from "react-router-dom";

const LoginMainSection = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	const register = () => {
		// auth
		// 	.createUserWithEmailAndPassword(email, password)
		// 	.then((authUser) => {})
		// 	.catch((err) => alert(err.message));
	};
	const login = () => {
		// auth
		// 	.signInWithEmailAndPassword(email, password)
		// 	.then((us) => {
		// 		const user = us.user;
		// 		console.log(user);
		// 	})
		// 	.catch((err) => console.error(err));
	};
	return (
		<LoginRight>
			<LoginHeader>
				<input placeholder="e-mail" />
				<input placeholder="password" />
				<Button onClick={login}>Sign In</Button>
				<ForgetPassword>
					<a href="">forget password?</a>
				</ForgetPassword>
			</LoginHeader>
			<LoginMain>
				<TwitterIcon />
				<h1>The latest news from the world</h1>
				<h3>Join Twitter.</h3>
				<LoginMainBtns>
					<Button>Register</Button>
					<Button>Sign In</Button>
				</LoginMainBtns>
			</LoginMain>
			<Register />
		</LoginRight>
	);
};

export default LoginMainSection;

const LoginRight = styled.div`
	height: 100vh;
	width: 50%;
	margin-left: 2rem;
`;
const ForgetPassword = styled.div`
	position: absolute;
	top: 5rem;
	left: 22.5rem;
	a {
		text-decoration: none;
		color: rgb(11, 127, 236);
		&:hover {
			text-decoration: underline;
		}
	}
`;
const LoginHeader = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 5rem;
	position: relative;
	button {
		border: 2px solid rgb(25, 233, 248);
		color: rgb(25, 233, 248);
		position: absolute;
		right: 12%;
		margin-left: 1rem;
		margin-top: 1rem;
		border-radius: 20px;
		padding: 0.5rem 2rem;
		&:hover {
			background: rgba(0, 0, 255, 0.185);
		}
	}
	input {
		&:nth-child(2) {
			margin-left: 1rem;
		}
		&::placeholder {
			color: white;
		}
		margin-top: 1rem;
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

const LoginMain = styled.div`
	display: flex;
	flex-direction: column;
	color: white;
	h1 {
		margin: 3rem 0;
		font-size: 4.5rem;
	}
	h3 {
		font-size: 3.5rem;
		margin-bottom: 2rem;
	}
	& > .MuiSvgIcon-root {
		font-size: 5rem;
		margin-top: 5rem;
	}
`;

const LoginMainBtns = styled.div`
	flex-wrap: wrap;
	flex-direction: column;
	margin-top: 2rem;
	display: flex;
	width: 45%;
	button {
		flex: 1;
		padding: 0.65rem 2rem;
		border-radius: 20px;
		&:nth-child(1) {
			background: rgb(11, 127, 236);
			border: 2px solid rgb(11, 127, 236);
			color: white;
		}
		&:nth-child(2) {
			border: 2px solid rgb(25, 233, 248);
			color: rgb(25, 233, 248);
			margin-top: 2rem;
			&:hover {
				background: rgba(0, 0, 255, 0.185);
			}
		}
	}
`;
