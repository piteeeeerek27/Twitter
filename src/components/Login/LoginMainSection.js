import React, { useState } from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import TwitterIcon from "@material-ui/icons/Twitter";
import { auth } from "../../firebase";
import Register from "../RightSection/Register/Register";
import { login } from "../../features/userSlice";
import { useDispatch } from "react-redux";

const LoginMainSection = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [changeState, setChangeState] = useState(false);
	const [createAccountEmail, setCreateAccountEmail] = useState("");
	const [createAccountPassword, setCreateAccountPassword] = useState("");
	const dispatch = useDispatch();

	const RegisterPopUp = () => {
		setChangeState(!changeState);
	};

	const register = () => {
		auth
			.createUserWithEmailAndPassword(createAccountEmail, createAccountPassword)
			.then(({ user }) => {
				dispatch(
					login({
						email: user.email,
						uid: user.uid,
						displayName: user.email,
						photoUrl: user.photoURL,
					}),
				);
			})
			.catch((error) => alert(error));

		if (createAccountEmail === "" || createAccountPassword === "")
			setChangeState(false);
		if (createAccountEmail !== "" || createAccountPassword !== "")
			setChangeState(true);

		setCreateAccountEmail("");
		setCreateAccountPassword("");
	};

	const LogIn = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				dispatch(
					login({
						email: user.email,
						ui2d: user.uid,
						displayName: user.email,
						photoUrl: user.photoURL,
					}),
				);
			})
			.catch((error) => alert(error));
	};

	return (
		<LoginRight>
			<LoginHeader>
				<form>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="e-mail"
						placeholder="E-mail"
					/>
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						placeholder="Password"
					/>
					<button type="submit" onClick={LogIn}>
						Sign In
					</button>
				</form>
				<a href="#">Forget password?</a>
			</LoginHeader>
			<LoginMain>
				<TwitterIcon />
				<h1>The latest news from the world</h1>
				<h3>Join Twitter.</h3>
				<LoginMainBtns>
					<Button onClick={RegisterPopUp}>Register</Button>
					<Button>Sign In</Button>
				</LoginMainBtns>
			</LoginMain>
			{changeState ? (
				<Register
					RegisterPopUp={RegisterPopUp}
					register={register}
					createAccountEmail={createAccountEmail}
					setCreateAccountEmail={setCreateAccountEmail}
					createAccountPassword={createAccountPassword}
					setCreateAccountPassword={setCreateAccountPassword}
				/>
			) : (
				""
			)}
		</LoginRight>
	);
};

export default LoginMainSection;

const LoginRight = styled.div`
	height: 100vh;
	width: 50%;
	overflow-y: scroll;
	margin-left: 2rem;
	margin-top: 1rem;
	&::-webkit-scrollbar {
		display: none;
	}
`;
const LoginHeader = styled.div`
	a {
		display: flex;
		text-decoration: none;
		color: rgb(11, 127, 236);
		&:hover {
			text-decoration: underline;
		}
	}
	form {
		max-width: 95%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		margin-bottom: 5px;
		button {
			border: 2px solid rgb(25, 233, 248);
			color: rgb(25, 233, 248);
			background: transparent;
			cursor: pointer;
			font-size: 1.1rem;
			margin-left: 1rem;
			outline: 0;
			margin-top: 1rem;
			border-radius: 20px;
			padding: 0.4rem 2rem;
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
			padding: 0.5rem 0.8rem;
			font-size: 1rem;
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
		@media (max-width: 1622px) {
			input {
				font-size: 0.8rem;
			}
			button {
				padding: 0.3rem 1.8rem;
			}
		}
		@media (max-width: 1405px) {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			width: 50%;
			background-color: skyblue;
			input {
				&:nth-child(2) {
					margin-left: 0rem;
				}
			}
			button {
				margin-left: 0;
			}
		}
	}
	@media (max-width: 930px) {
		a {
			margin-top: 5px !important;
		}
		form {
			display: flex;
			flex-direction: column;
			input {
				margin-left: 0px !important;
				margin-right: auto !important;
				width: 60%;
			}
			button {
				margin-left: 0px !important;
				margin-right: auto !important;
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
		font-size: 2.5rem;
	}
	h3 {
		font-size: 2rem;
		margin-bottom: 2rem;
	}
	& > .MuiSvgIcon-root {
		font-size: 5rem;
		margin-top: 5rem;
	}
	@media (max-width: 1725px) {
		h1 {
			font-size: 2rem;
		}
		h3 {
			font-size: 1.5rem;
		}
		& > .MuiSvgIcon-root {
			font-size: 4rem;
			margin-top: 5rem;
		}
	}
	@media (max-width: 1537px) {
		h1 {
			font-size: 1.5rem;
		}
		h3 {
			font-size: 1.3rem;
		}
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
		p {
			text-transform: lowercase;
			margin-left: 0.2rem;
			font-size: 0.7rem;
		}
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
	@media (max-width: 578px) {
		button:nth-child(2) {
			padding: 0px 2rem;
		}
	}
`;
