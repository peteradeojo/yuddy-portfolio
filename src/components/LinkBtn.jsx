import { Link } from 'react-router-dom';

/**
 *
 * @type {React.FC<{to: string; text: string; className: string}>}
 * @returns
 */
const LinkBtn = ({ to, text, className }) => {
	return (
		<>
			<Link
				to={to}
				className={
					'btn btn-outline outline outline-0 outline-white text-white ' +
					className
				}
			>
				{text}
			</Link>
		</>
	);
};

export const OutlineBtn = ({ children, className, ...rest }) => {
	return (
		<>
			<span className={'btn btn-ghost text-white rounded-2xl sm:rounded-lg ' + className} {...rest}>
				{children}
			</span>
		</>
	);
};

export default LinkBtn;
