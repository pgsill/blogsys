import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import routes from './routes';

import CompHeader from './CompHeader';
import CompPostsMain from './CompPostsMain';
import CompNewPost from './CompNewPost';
import CompPostDetail from './CompPostDetail';

function App() {
	return (
		<Router history={ history }>
			{routes}		
		</Router>
	);
}

export default App;
