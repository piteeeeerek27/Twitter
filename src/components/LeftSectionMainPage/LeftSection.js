import React from "react";
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
import LeftSectionList from "./LeftSectionList";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { BrowserRouter as Router, Link } from "react-router-dom";

const LeftSection = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	const Logged = () => {
		dispatch(logout());
	};

	return (
		<Router>
			<LeftSectionContainer>
				<TopSection>
					<nav>
						<ul>
							<li>
								<Link to="/Twitter">
									<TwitterIcon
										fontSize="large"
										style={{ padding: 7, color: "lightblue" }}
									/>
								</Link>
							</li>
							<li>
								<Link to="/Home">
									<LeftSectionList Icon={HomeIcon} title="Home" />
								</Link>
							</li>
							<li>
								<Link to="/Explore">
									<LeftSectionList
										Icon={NotificationsNoneIcon}
										title="Explore"
									/>
								</Link>
							</li>
							<li>
								<Link to="/Notifications">
									<LeftSectionList Icon={ExploreIcon} title="Notifications" />
								</Link>
							</li>
							<li>
								<Link to="/Messages">
									<LeftSectionList Icon={MailOutlineIcon} title="Messages" />
								</Link>
							</li>
							<li>
								<Link to="/Lists">
									<LeftSectionList Icon={ListAltIcon} title="Lists" />
								</Link>
							</li>
							<li>
								<Link to="/Connect">
									<LeftSectionList
										Icon={SettingsInputHdmiIcon}
										title="Connect"
									/>
								</Link>
							</li>
							<li>
								<Link to="/Profile">
									<LeftSectionList Icon={PersonOutlineIcon} title="Profile" />
								</Link>
							</li>
							<li>
								<Link to="/More">
									<LeftSectionList Icon={MoreHorizIcon} title="More" />
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
			</LeftSectionContainer>
		</Router>
	);
};

export default LeftSection;

const LeftSectionContainer = styled.div`
	flex: 0.25;
	min-height: 680px;
	max-height: 990px;
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
