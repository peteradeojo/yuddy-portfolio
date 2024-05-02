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
import About from './pages/About.jsx';
import CrumbLayout from './components/CrumbLayout.jsx';

const routes = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<App />} />
			<Route element={<CrumbLayout />} errorElement={<></>}>
				<Route path="/about" element={<About />} />
				<Route path="/about/my-day" element={<About />} />
			</Route>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={routes}></RouterProvider>
	</React.StrictMode>
);
