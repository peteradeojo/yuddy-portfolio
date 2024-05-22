import Works from './components/Works';

import { useLocation } from 'react-router-dom';
import LinkBtn from './components/LinkBtn';

const App = () => {
	const location = useLocation();

	return (
		<>
			{location.hash.startsWith('#works') ? (
				<Works />
			) : (
				<>
					<div className="text-center pt-40">
						<p className="text-3xl md:text-5xl">ONWUACHUMBA UDOKA</p>
						<div className="py-3"></div>
						<p className="text-xl">is an ever evolving UI/UX Designer</p>
						<div className="py-3"></div>
						<p className="capitalize text-gray-400">
							moving pixels, changing lives
						</p>
						<div className="py-3"></div>
						<div className="w-full flex justify-center uppercase">
							<LinkBtn to="/about" text="About me" className="px-[30px]" />
							<div className="w-[40px]"></div>
							<LinkBtn to="/#contact" text="contact me" className="px-[30px]" />
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default App;
