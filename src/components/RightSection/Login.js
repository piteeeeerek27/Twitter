import React from "react";
import styled from "styled-components";
import TwitterIcon from "@material-ui/icons/Twitter";
import LoginMainSection from "./LoginMainSection";

const Login = () => {
	return (
		<LoginContainer>
			<LoginLeft>
				<ImageOne>
					<img
						src="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png"
						alt="logo"
					/>
				</ImageOne>
				<ImageTwo>
					<TwitterIcon />
				</ImageTwo>
			</LoginLeft>
			<LoginMainSection />
		</LoginContainer>
	);
};

export default Login;

const LoginContainer = styled.div`
	height: 100vh;
	display: flex;
	width: 100vw;
`;
const LoginLeft = styled.div`
	width: 50%;
	height: 100%;
	position: relative;
	background: darkgreen;
`;
const ImageOne = styled.div`
	img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
const ImageTwo = styled.div`
	& > .MuiSvgIcon-root {
		z-index: 1;
		position: absolute;
		left: 23%;
		top: 25%;
		right: 25%;
		bottom: 25%;
		width: 50%;
		height: 50%;
		object-fit: cover;
		color: white;
	}
`;
