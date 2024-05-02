import { Link, Outlet, useLocation } from 'react-router-dom';
import { BiRightArrow, BiPointer } from 'react-icons/bi';
import { FaAngleRight } from 'react-icons/fa';

const BreadCrumb = ({ location }) => {
	return (
		<div className="flex text-[#ffffffad] items-center gap-x-2 font-light pt-12 pb-8 px-4 md:px-0">
			<Link to={'/'} className="hover:text-white transition-colors">
				Home
			</Link>
			{location.pathname
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
								className="capitalize hover:text-white transition-colors"
							>
								{t}
							</Link>
						</span>
					);
				})}
		</div>
	);
};

const CrumbLayout = () => {
	const location = useLocation();
	return (
		<>
			<BreadCrumb location={location} />
			<Outlet />
			<BreadCrumb location={location} />
		</>
	);
};

export default CrumbLayout;
