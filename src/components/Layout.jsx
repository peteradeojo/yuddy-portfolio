import { Link, Outlet } from 'react-router-dom';
import { BiPlus, BiPlusCircle } from 'react-icons/bi';

import udoka from '../assets/UDOKA.svg';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const navLinks = [
	{
		text: 'home',
		href: '/',
		type: 1,
	},
	{
		text: 'my resume',
		href: '/',
		type: 1,
	},
	{
		text: 'my works',
		href: '/#works',
		type: 1,
	},
	{
		text: 'Contact me',
		href: '/',
		type: 2,
	},
];

const Layout = ({ children }) => {
	// const [nav, setNav] = useState(false);

	return (
		<>
			<div>
				{/* Md> Nav */}
				<div className="flex justify-between items-center px-10 py-20 sm:py-16 sm:px-20 text-white">
					<div className="max-w-[50%]">
						<img src={udoka} className="w-full" />
					</div>
					<div className="hidden sm:flex justify-between w-1/3">
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
						className="outline-white outline outline-2  px-[30px]  py-[20px] rounded-xl hover:bg-white hover:text-black transition duration-300 hidden sm:inline"
					>
						CONTACT ME
					</Link>
					{/* <div className="btn btn-circle">
        </div> */}
					<button className="sm:hidden btn btn-circle btn-ghost"
          onClick={() => {
            const el = document.getElementById("small-nav");
            el.classList.add('animate-slide-down');
            el.classList.remove('animate-slide-up');
          }}>
						<BiPlusCircle className="text-3xl" />
					</button>
				</div>

				{/* Md> Nav */}
				<div
					id="small-nav"
					className="px-10 fixed w-full top-0 bg-gradient shadow-md shadow-secondary-content"
				>
					<div className='-z-10 h-full'>
						<div className="text-right py-20">
							<button
								className="btn btn-ghost text-right font-lighter text-5xl"
								onClick={() => {
									const el = document.getElementById('small-nav');
									el.classList.remove('animate-slide-down');
									el.classList.add('animate-slide-up');
								}}
							>
								&times;
							</button>
						</div>

						<div className="flex flex-col justify-center items-center uppercase">
							{navLinks.map((nav) => {
								if (nav.type == 1) {
									return (
										<>
											<Link
												to={nav.href}
												className="btn btn-ghost hover:font-bold"
											>
												{nav.text}
											</Link>
										</>
									);
								}

								return (
									<>
										<div className="py-3"></div>
										<Link
											to={nav.href}
											className="btn btn-outline w-2/3  outline-white outline text-white outline-0"
										>
											{nav.text}
										</Link>
									</>
								);
							})}
              <div className="py-4"></div>
						</div>
					</div>
				</div>
			</div>
			<div className="px-10 sm:px-20">
				<Outlet />
			</div>
		</>
	);
};

export default Layout;
