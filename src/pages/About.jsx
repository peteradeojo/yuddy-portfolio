import { GridEntry } from '../components/Works';

const About = () => {
	return (
		<div className="text-[#ffffffad] md:px-0">
			<div className="grid md:grid-cols-2 gap-x-10 min-h-min">
				<div className="px-4 md:px-0">
					<p className="uppercase text-3xl pb-4 text-white text-center sm:text-left">
						who is udoka?
					</p>
					<p className="text-center md:text-justify">
						Udoka (aka yuddy) is an ever evolving UI/UX designer with a strong
						background in Metallurgical & Materials Engineering
						<br />
						<br />
						Brought up in Lagos state but steady representing Imo state, Udoka
						started his design journey in mid 2022.
						<br />
						<br />
						Udoka's creative process revolves around understanding user needs,
						empathizing with their journey, and translating those insights into
						visually stunning and intuitively functional interfaces. With a
						background in engineering, I bring a holistic approach to every
						project, ensuring that each design decision serves a purpose.
					</p>
				</div>
				<div className="px-4">
					<img src="" className="bg-white block min-h-[400px]" alt="" />
				</div>
			</div>
			<div className="py-6 text-center px-4 md:px-0">
				Lets pause a little... Before we keep learning more about Udoka and his
				design journey, here is a short video of everyone who is familiar with
				his design work and what they have to say about him as a designer and as
				a person
			</div>
			<div className="py-4"></div>
			<div className="px-4 md:px-0">
				<div className="min-h-[400px] bg-white h-full grid place-items-center text-black">
					VIDEO HERE 
				</div>
			</div>
			<div className="py-4"></div>
			<div className="text-center text-[#ffffffad] px-4 md:px-0">
				What sets me apart is my commitment to creating not just visually
				appealing designs, but experiences that resonate with users on a
				personal level. This portfolio is not just a showcase of his work, it's
				an invitation to explore the synergy between aesthetics and
				functionality. Join Udoka on a journey where pixels tell stories,
				interactions spark emotions, and design transcends the screen. Udoka’s
				toolbox includes a proficiency in Figma, a little bit of Adobe XD and
				Photoshop as well as Auto CAD (inventor), allowing me to seamlessly
				blend creativity with technical prowess and also render these{' '}
				<br className='md:hidden' />
				<span className="text-white">SERVICES</span>
			</div>

			{/* Highlights */}
			<div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
				<GridEntry className={'col-span-1 text-center'}>
					<p className="text-white py-4">Udoka's Past</p>
					<p>BLUELANCER (June 2023-Sept 2023)</p>
					<p>SELF EMPLOYED (May 2022-Oct 2023)</p>
				</GridEntry>
				<GridEntry className={'col-span-1 text-center'}>
					<p className="text-white py-4">Udoka's Hobbies</p>
					<p>Watching Football</p>
					<p>Listening to (and making) music</p>
					<p>Watching Movies</p>
					<p>Photography</p>
				</GridEntry>
				<GridEntry className={'md:col-span-2 text-center'}>
					<p className="text-white py-4">A Little Bit More</p>
					<p>Biggest Inspiration: KANYE WEST</p>
					<p>Favorite colors: KANYE WEST</p>
					<p>My club: Chelsea FC</p>
					<p>
						Favorite song (atm):{' '}
						<a
							href="https://open.spotify.com"
							target="_blank"
							className="underline underline-offset-4 hover:text-white transition"
						>
							SWEET TEA by BNXN
						</a>
					</p>
				</GridEntry>
			</div>

			{/* Gallery */}
			<div className="py-8"></div>
			<p className="text-3xl pb-8 text-center text-white uppercase">
				udoka's photo gallery
			</p>
			<div className="grid px-6 grid-cols-6 grid-rows-3 gap-2 md:gap-x-6 md:gap-y-4">
				<GridEntry
					className={'col-span-2 row-span-2 bg-white p-4 md:h-[400px]'}
				></GridEntry>
				<GridEntry
					className={'col-span-2 row-span-2 bg-white p-4 md:h-[400px]'}
				></GridEntry>
				<GridEntry
					className={'col-span-2 row-span-2 bg-white p-4 md:h-[400px]'}
				></GridEntry>
				<GridEntry
					className={'col-span-3 row-span-1 bg-white p-4 md:h-[200px]'}
				></GridEntry>
				<GridEntry
					className={'col-span-3 row-span-1 bg-white p-4 h-[50px] md:h-[200px]'}
				></GridEntry>
			</div>
			<div className="py-8"></div>

			<div className="text-center">
				<p className="text-white pb-4">
					Want to find out more? Here is his resume
				</p>
				<button className="btn min-w-[150px] btn-outline outline outline-1 outline-white text-white">
					RESUME
				</button>
			</div>
		</div>
	);
};

export default About;
