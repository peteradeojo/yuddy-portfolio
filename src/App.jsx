import udoka from './assets/UDOKA.svg';

import { Link, useLocation } from 'react-router-dom';

const Home = () => {
	return <></>;
};
const Works = () => {
	return <></>;
};

const App = () => {
	const location = useLocation();

	return (
		<>
			{location.hash == '#works' ? (
				<Works />
			) : (
				<div className='text-center min-h-[400px] flex justify-center flex-col'>
					<p className='text-5xl'>ONWUACHUMBA UDOKA</p>
					<div className="py-4"></div>
					<p className='text-xl'>is an ever evolving UI/UX Designer</p>
					<div className="py-4"></div>
					<p className='capitalize text-gray-400'>moving pixels, changing lives</p>

					<div className="flex justify-between">
						<Link></Link>
						<Link></Link>
						<Link></Link>
					</div>
				</div>
			)}
		</>
	);
};

export default App;
