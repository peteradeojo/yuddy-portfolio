import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import { AiFillBehanceCircle } from 'react-icons/ai';
import { RiPinterestFill } from 'react-icons/ri';
import { crumbs } from '../config/crumbs_map';

const BreadCrumb = ({ location }) => {
	return (
		<div className="flex text-[#ffffffad] items-center gap-x-2 font-light pt-12 pb-8 px-4 md:px-0">
			<Link to={'/'} className="hover:text-white transition-colors">
				Home
			</Link>
			{location.pathname in crumbs
				? crumbs[location.pathname].links.map((t, i) => {
						if (Array.isArray(t) && t.length > 1) {
							return (
								<span key={t} className="flex items-center gap-x-2">
									<FaAngleRight />
									<Link
										// to={location.pathname
										// 	.split('/')
										// 	.slice(0, i + 2)
										// 	.join('/')}
										to={t[1]}
										className={
											'transition-colors ' +
											(i == location.pathname.split('/').slice(1).length - 1
												? 'text-white'
												: 'hover:text-white ')
										}
									>
										{t[0]}
									</Link>
								</span>
							);
						}
						return (
							<span key={t} className="flex items-center gap-x-2">
								<FaAngleRight />
								<Link
									to={location.pathname
										.split('/')
										.slice(0, i + 2)
										.join('/')}
									className={
										'transition-colors ' +
										(i == location.pathname.split('/').slice(1).length - 1
											? 'text-white'
											: 'hover:text-white ')
									}
								>
									{t}
								</Link>
							</span>
						);
				  })
				: location.pathname
						.split('/')
						.slice(1)
						.map((t, i) => {
							return (
								<span key={t} className="flex items-center gap-x-2">
									<FaAngleRight />
									<Link
										to={location.pathname
											.split('/')
											.slice(0, i + 2)
											.join('/')}
										className={
											'capitalize transition-colors ' +
											(i == location.pathname.split('/').slice(1).length - 1
												? 'text-white'
												: 'hover:text-white ')
										}
									>
										{t}
									</Link>
								</span>
							);
						})}
			{}
		</div>
	);
};

const CrumbLayout = () => {
	const location = useLocation();
	return (
		<>
			<BreadCrumb location={location} />
			<Outlet />
			<div className="py-8"></div>
			<BreadCrumb location={location} />

			<div className="py-5 text-center">
				<p className="text-3xl uppercase">Get in touch</p>
				<p className="px-5 md:px-0 py-8 md:py-4">
					Whether you have a question, comment, a project idea, or you just want
					to say hello, I’d really love to hear from you. Feel free to reach out
					let’s start a conversation
				</p>

				<div className="flex flex-col md:flex-row items-center justify-center md:py-4">
					<Link
						to={'mailto:adeojopeter@gmail.com'}
						target="_blank"
						className="py-3 px-4 hover:bg-[#cccccc80] transition"
					>
						E-MAIL
					</Link>
					<Link
						to={'//linkedin.com/in/udoka-chisom'}
						target="_blank"
						className="py-3 px-4 hover:bg-[#cccccc80] transition"
					>
						LINKEDIN
					</Link>
					<Link
						to={'//twitter.com/udoka'}
						target="_blank"
						className="py-3 px-4 hover:bg-[#cccccc80] transition"
					>
						TWITTER
					</Link>
					<Link
						to={'//wa.me?phone=08103490675'}
						target="_blank"
						className="py-3 px-4 hover:bg-[#cccccc80] transition"
					>
						WHATSAPP
					</Link>
				</div>

				<div className="flex flex-row items-center justify-center md:py-4 gap-x-4">
					<Link
						to={'//behance.net'}
						target="_blank"
						className="py-1 px-1 rounded-full hover:bg-[#cccccc80] transition"
					>
						<AiFillBehanceCircle className="text-4xl" />
					</Link>
					<Link
						to={'//pinterest.com'}
						target="_blank"
						className="py-1 px-1 rounded-full hover:bg-[#cccccc80] transition"
					>
						<RiPinterestFill className="text-4xl" />
					</Link>
				</div>
			</div>
		</>
	);
};

export default CrumbLayout;
