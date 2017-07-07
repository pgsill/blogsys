import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';

import Layout from '../components/MyLayout.js';
import CompPostsPost from '../components/CompPostsPost.js';

function mapPosts(props){
	let posts = props.json.posts;

	let type = false;

	let postarray = [];

	for (var i = posts.length - 1; i >= 0; i--) {

		let component = <CompPostsPost 
									key={"post-" + i}
									type={type}
									title={posts[i].title}
									imgurl={posts[i].imgurl}
									subtitle={posts[i].subtitle}
									subtitle2={posts[i].subtitle2}
									body={posts[i].body}
									jsonid={i} />

		postarray.push(component);
	}

	return	postarray;
	
}

const Index = (props) => (
	<Layout>
		<Head>
			<link href="/statics/styles.css" rel="stylesheet" />
		</Head>

		<h1>posts</h1>
		<ul>
		{mapPosts(props)}
		</ul>
	</Layout>
);

Index.getInitialProps = async function() {
	const res = await fetch("http://localhost:3000/api/getposts");
	const data = await res.json();

	console.log(`Data fetched.`);

	return {
		json: data
	}
};

export default Index
