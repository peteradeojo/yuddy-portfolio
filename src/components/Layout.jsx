import { Link, Outlet } from 'react-router-dom';

import udoka from '../assets/UDOKA.svg';

const Layout = ({ children }) => {
	return (
		<>
			<div>
				<div className="flex justify-between items-center py-16 px-20 text-white">
					<img src={udoka} />
					<div className="flex justify-between w-1/3">
						<Link to={'/'} className="btn btn-ghost hover:font-bold">
							HOME
						</Link>
						<Link to={'/'} className="btn btn-ghost hover:font-bold">
							MY RESUME
						</Link>
						<Link to={'/#works'} className="btn btn-ghost hover:font-bold">
							MY WORK
						</Link>
					</div>
					<Link
						to={'/'}
						className="outline-white outline outline-2  px-[30px]  py-[20px] rounded-xl hover:bg-white hover:text-black transition duration-300"
					>
						CONTACT ME
					</Link>
				</div>
				<Outlet />
			</div>
		</>
	);
};

export default Layout;
