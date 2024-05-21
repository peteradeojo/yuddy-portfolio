const HeroComponent = ({ image, description, title }) => {
	return (
		<div className="w-full border rounded-3xl p-4 md:p-8 transition-all">
			<h1 className="text-center uppercase text-xl md:text-3xl py-5">
				{title}
			</h1>
			<p className="text-center text-sm md:w-3/5 m-auto">{description}</p>
			<div className="py-5"></div>
			<img src={image} />
			<div className="py-5"></div>
		</div>
	);
};

export const Wrapper = ({ children }) => {
	return <div className="p-4 md:p-0">{children}</div>;
};

export default HeroComponent;
