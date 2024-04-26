import { useState } from 'react';
import LinkBtn, { OutlineBtn } from './LinkBtn';
import one from '../assets/case_studies/1.png';
import two from '../assets/case_studies/2.png';
import three from '../assets/case_studies/3.png';

import w1 from '../assets/web_designs/1.png';
import w2 from '../assets/web_designs/2.png';
import w3 from '../assets/web_designs/3.png';

import p1 from '../assets/playground/1.png';
import p2 from '../assets/playground/2.png';
import p3 from '../assets/playground/3.png';
import p4 from '../assets/playground/4.png';
import { Link } from 'react-router-dom';

const GridEntry = ({ children, className }) => {
	return <div className={`grid-entry relative ${className}`}>{children}</div>;
};

const CaseStudies = () => {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
				<GridEntry className="col-span-1 row-span-2">
					<Link className="grid-overlay uppercase">
						<div className="overlay p-4">
							<p className="text-2xl">Whatsapp redesign</p>
							<p className="text-gray-400">ui design</p>
						</div>
					</Link>
					<img src={one} className="h-full" />
				</GridEntry>
				<GridEntry className="col-span-1 row-span-1">
					<Link className="grid-overlay uppercase">
						<div className="overlay p-4">
							<p className="text-2xl">feather crypto app</p>
							<p className="text-gray-400">ui design</p>
						</div>
					</Link>
					<img src={two} className="h-full" />
				</GridEntry>
				<GridEntry className="col-span-1 md:col-start-2 row-span-1">
					<Link className="grid-overlay uppercase">
						<div className="overlay p-4">
							<p className="text-2xl">cybaplay music app (2022)</p>
							<p className="text-gray-400">ui design</p>
						</div>
					</Link>
					<img src={three} className="h-full" />
				</GridEntry>
			</div>
		</>
	);
};

const WebDesign = () => {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
				<GridEntry className={'col-span-1 row-span-2'}>
					<Link className="grid-overlay">
						<div className="overlay uppercase p-4">
							<p className="text-2xl">icare website (2022)</p>
							<p className="text-gray-400">ui design, web design</p>
						</div>
					</Link>
					<img src={w1} />
				</GridEntry>
				<GridEntry className={'col-span-1 col-start-2 row-start-1 row-span-1'}>
					<Link className="grid-overlay">
						<div className="overlay uppercase p-4">
							<p className="text-2xl">cybeauty website</p>
							<p className="text-gray-400">ui design, web design</p>
						</div>
					</Link>
					<img src={w2} />
				</GridEntry>
				<GridEntry className={'col-start-2 row-span-1'}>
					<Link className="grid-overlay">
						<div className="overlay uppercase p-4">
							<p className="text-2xl">feather app website</p>
							<p className="text-gray-400">ui design, web design</p>
						</div>
					</Link>
					<img src={w3} />
				</GridEntry>
			</div>
		</>
	);
};

const Playground = () => {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
				<GridEntry>
					<Link className="grid-overlay">
						<div className="overlay uppercase p-4">
							<p></p>
							<p></p>
						</div>
					</Link>
					<img src={p1} />
				</GridEntry>
				<GridEntry>
					<Link className="grid-overlay">
						<div className="overlay uppercase p-4">
							<p></p>
							<p></p>
						</div>
					</Link>
					<img src={p2} />
				</GridEntry>
				<GridEntry>
					<Link className="grid-overlay">
						<div className="overlay uppercase p-4">
							<p></p>
							<p></p>
						</div>
					</Link>
					<img src={p3} />
				</GridEntry>
				<GridEntry>
					<Link className="grid-overlay">
						<div className="overlay uppercase p-4">
							<p></p>
							<p></p>
						</div>
					</Link>
					<img src={p4} />
				</GridEntry>
			</div>
		</>
	);
};

const Works = () => {
	const [visible, setVisible] = useState(0);

	return (
		<>
			<div className="max-w-full">
				<div
					className="px-4 flex justify-start md:justify-center uppercase gap-x-[64px] overflow-x-auto snap-y"
					id="tabs"
				>
					<OutlineBtn
						className={visible == 0 ? 'active-outline' : ''}
						onClick={() => {
							setVisible(0);
						}}
					>
						Case studies
					</OutlineBtn>
					<OutlineBtn
						className={visible == 1 ? 'active-outline' : ''}
						onClick={() => {
							setVisible(1);
						}}
					>
						Web Design
					</OutlineBtn>
					<OutlineBtn
						className={visible == 2 ? 'active-outline' : ''}
						onClick={() => {
							setVisible(2);
						}}
					>
						My Playground
					</OutlineBtn>
				</div>

				<div id="tab-content" className="pt-8 px-4 sm:px-0">
					{visible == 0 && <CaseStudies />}
					{visible == 1 && <WebDesign />}
					{visible == 2 && <Playground />}
				</div>
			</div>
		</>
	);
};
export default Works;
