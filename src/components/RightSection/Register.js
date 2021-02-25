import React, { useCallback, useState } from "react";
import styled from "styled-components";
import TwitterIcon from "@material-ui/icons/Twitter";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import { auth } from "../../firebase";
import { login } from "../../features/userSlice";
import { useDispatch } from "react-redux";

const Register = ({ flex, setStyle, password }) => {
	const [emaill, setEmaill] = useState("");
	const dispatch = useDispatch();
	const Changed = styled.div`
		display: ${flex};
	`;

	const register = () => {
		auth
			.createUserWithEmailAndPassword(emaill, password)
			.then((authUser) => {
				dispatch(
					login({
						email: authUser.user.email,
						uid: authUser.user.uid,
						displayName: authUser.user.displayName,
						photoUrl: authUser.user.photoURL,
					}),
				);
			})
			.catch((err) => alert(err.message));
	};

	return (
		<Changed>
			<RegisterContainer>
				<RegisterTop>
					<IconButton onClick={() => setStyle("none")}>
						<CloseIcon fontSize="large" />
					</IconButton>
					<TwitterIcon />
					<button>further</button>
				</RegisterTop>
				<RegisterMiddle>
					<form>
						<h1>Create account</h1>
						<input placeholder="E-mail" />
						<input type="password" placeholder="Password" />
						<span
							onClick={register}
							style={{
								marginTop: "1rem",
								cursor: "pointer",
								color: "rgb(11, 127, 236)",
							}}>
							Register now
						</span>
					</form>
				</RegisterMiddle>
			</RegisterContainer>
		</Changed>
	);
};
export default Register;

const RegisterContainer = styled.div`
	height: 40vh;
	width: 30vw;
	padding-top: 1rem;
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
	width: 91%;
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
