import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Posts from "./Posts";
import Header from "./Header";
import Send from "./Send";
import { db } from "../../firebase";
import firebase from "firebase";

const MiddleSection = () => {
	const [posts, setPosts] = useState([]);
	const [input, setInput] = useState("");

	useEffect(() => {
		db.collection("posts").onSnapshot((snapshot) =>
			setPosts(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				})),
			),
		);
	}, []);

	const sendPost = (e) => {
		e.preventDefault();

		db.collection("posts").add({
			name: "piterek",
			description: "test",
			message: input,
			photoUrl: "",
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
	};

	return (
		<MiddleSectionContainer>
			<Header />
			<Send sendPost={sendPost} input={input} setInput={setInput} />
			<Borders>
				{posts.map((post) => {
					{
						/* <Posts /> */
					}
				})}
				{/* <Posts /> */}
				{/* <Posts /> */}
			</Borders>
		</MiddleSectionContainer>
	);
};

export default MiddleSection;

const MiddleSectionContainer = styled.div`
	flex: 0.5;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
	height: 100vh;
`;
const Borders = styled.div`
	border-top: 1px solid gray;
	border-right: 1px solid gray;
	border-left: 1px solid gray;
	height: 100vh;
`;
