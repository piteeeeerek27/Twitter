import React, { useState } from "react";
import styled from "styled-components";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Avatar, Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ExploreIcon from "@material-ui/icons/Explore";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ListAltIcon from "@material-ui/icons/ListAlt";
import SettingsInputHdmiIcon from "@material-ui/icons/SettingsInputHdmi";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import LeftSideList from "./LeftSideList";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const LeftSide = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	const Logged = () => {
		console.log(dispatch(logout()));
	};

	return (
		<Router>
			<LeftSideContainer>
				<TopSection>
					<nav>
						<ul>
							<li>
								<Link to="/Twitter">
									<TwitterIcon fontSize="large" style={{ padding: 7 }} />
								</Link>
							</li>
							<li>
								<Link to="/Home">
									<LeftSideList Icon={HomeIcon} title="Home" />
								</Link>
							</li>
							<li>
								<Link to="/Explore">
									<LeftSideList Icon={NotificationsNoneIcon} title="Explore" />
								</Link>
							</li>
							<li>
								<Link to="/Notifications">
									<LeftSideList Icon={ExploreIcon} title="Notifications" />
								</Link>
							</li>
							<li>
								<Link to="/Messages">
									<LeftSideList Icon={MailOutlineIcon} title="Messages" />
								</Link>
							</li>
							<li>
								<Link to="/Lists">
									<LeftSideList Icon={ListAltIcon} title="Lists" />
								</Link>
							</li>
							<li>
								<Link to="/Connect">
									<LeftSideList Icon={SettingsInputHdmiIcon} title="Connect" />
								</Link>
							</li>
							<li>
								<Link to="/Profile">
									<LeftSideList Icon={PersonOutlineIcon} title="Profile" />
								</Link>
							</li>
							<li>
								<Link to="/More">
									<LeftSideList Icon={MoreHorizIcon} title="More" />
								</Link>
							</li>
						</ul>
					</nav>
					<Button>Tweet</Button>
				</TopSection>
				<BottomSection>
					<BottomSectionMid>
						<Avatar
							style={{ cursor: "pointer" }}
							onClick={Logged}
							alt={user?.displayName}
							src={user?.photoURL}
						/>
						<MoveToRight>
							<p>{user ? user.displayName : user.email}</p>
							<span>{user.email}</span>
						</MoveToRight>
					</BottomSectionMid>
					<MoreHorizIcon />
				</BottomSection>
			</LeftSideContainer>
		</Router>
	);
};

export default LeftSide;

const LeftSideContainer = styled.div`
	flex: 0.2;
`;

const TopSection = styled.div`
	padding: 10px;
	height: 92%;
	width: 80%;
	ul {
		list-style-type: none;
		a {
			text-decoration: none;
		}
	}
	& > .MuiSvgIcon-root:hover {
		background: rgba(0, 0, 255, 0.267);
		cursor: pointer;
		border-radius: 80%;
	}
	button {
		background: #0081cf;
		color: whitesmoke;
		flex: 1;
		width: 100%;
		padding: 12px 0;
		border-radius: 20px;
		margin-top: 1.5rem;
		&:hover {
			background: #0089ba;
		}
	}
`;

const BottomSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 10px;
	& > .MuiSvgIcon-root:hover {
		color: rgb(25, 233, 248);
		background: rgba(0, 0, 255, 0.185);
		cursor: pointer;
		border-radius: 80%;
	}
`;
const BottomSectionMid = styled.div`
	display: flex;
`;
const MoveToRight = styled.div`
	margin-left: 10px;
`;
