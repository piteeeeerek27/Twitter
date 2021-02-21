import React from "react";
import styled from "styled-components";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Avatar, Button } from "@material-ui/core";
import LeftSideList from "./LeftSideList";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ExploreIcon from "@material-ui/icons/Explore";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ListAltIcon from "@material-ui/icons/ListAlt";
import SettingsInputHdmiIcon from "@material-ui/icons/SettingsInputHdmi";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const LeftSide = () => {
	return (
		<LeftSideContainer>
			<TopSection>
				<TwitterIcon fontSize="large" style={{ padding: 7 }} />
				<LeftSideList Icon={HomeIcon} title="Home" />
				<LeftSideList Icon={NotificationsNoneIcon} title="Explore" />
				<LeftSideList Icon={ExploreIcon} title="Notifications" />
				<LeftSideList Icon={MailOutlineIcon} title="Messages" />
				<LeftSideList Icon={ListAltIcon} title="Lists" />
				<LeftSideList Icon={SettingsInputHdmiIcon} title="Connect" />
				<LeftSideList Icon={PersonOutlineIcon} title="Profile" />
				<LeftSideList Icon={MoreHorizIcon} title="More" />
				<Button>Tweet</Button>
			</TopSection>

			<BottomSection>
				<Avatar />
				<BottomSectionMid>
					<p>Piotr Rześny</p>
					<span>@PiotrRzesny</span>
				</BottomSectionMid>
				<MoreHorizIcon />
			</BottomSection>
		</LeftSideContainer>
	);
};

export default LeftSide;

const LeftSideContainer = styled.div`
	flex: 0.2;
`;

const TopSection = styled.div`
	padding: 10px;
	height: 92%;
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
	padding: 0 1rem;
	& > .MuiSvgIcon-root {
		display: flex;
	}
`;
const BottomSectionMid = styled.div`
	margin-left: -10rem;
`;
