import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Posts from "./Posts";
import Header from "./Header";
import Send from "./Send";
import { db } from "../../firebase";

const MiddleSection = () => {
	const [posts, setPosts] = useState([]);
	const [postImg, setPostImg] = useState("");

	useEffect(() => {
		db.collection("posts")
			.orderBy("timestamp", "asc")
			.onSnapshot(snapshot =>
				setPosts(
					snapshot.docs.map(doc => ({
						id: doc.id,
						data: doc.data(),
					})),
				),
			);
	}, []);

	return (
		<MiddleSectionContainer>
			<Header />
			<Send setPostImg={setPostImg} />
			<Borders>
				{posts.map(({ id, data: { message, timestamp } }) => (
					<Posts
						setPostImg={setPostImg}
						postImg={postImg}
						id={id}
						key={id}
						message={message}
						timestamp={timestamp}
					/>
				))}
			</Borders>
		</MiddleSectionContainer>
	);
};

export default MiddleSection;

const MiddleSectionContainer = styled.div`
	flex: 0.5;
	overflow-y: scroll;
	height: 100vh;
	max-height: auto;
	min-height: 900px;
	border-left: 1px solid gray;
	border-right: 1px solid gray;
	border-top: 1px solid gray;
	&::-webkit-scrollbar {
		display: none;
	}
`;
const Borders = styled.div`
	color: white;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;
