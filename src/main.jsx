import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import Layout from './components/Layout.jsx';

const routes = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<App />} />
			{/* <Route path='/works' element={<App />} /> */}
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={routes}></RouterProvider>
	</React.StrictMode>
);
