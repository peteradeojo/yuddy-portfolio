import hero from '../../assets/case_studies/whatsapp/hero.png';
import CaseStudyHero, { Wrapper } from './HeroComponent';

const Whatsapp = () => {
	return (
		<Wrapper>
			{/* <div className="w-full border rounded-3xl p-4 md:p-8 hover:glass">
				<h1 className="text-center uppercase text-xl md:text-3xl py-5">
					Whatsapp Feature Update (Redesign)
				</h1>
				<p className="text-center text-sm md:w-3/5 m-auto">
					Well WhatsApp needs no introduction to me but it is the world largest
					social media and communication platform if you didn't know
				</p>
				<div className="py-5"></div>
				<img src={hero} />
				<div className="py-5"></div>
			</div> */}
			<CaseStudyHero
				image={hero}
				title={'Whatsapp feature update (redesign)'}
				description={
					"Well WhatsApp needs no introduction to me but it is the world largest social media and communication platform if you didn't know"
				}
			/>
			<div className="py-10"></div>
			<div className="text-center">
				<h2 className="py-5 uppercase text-3xl">Contents of this case study</h2>
				<ul className="uppercase list-disc grid place-items-center gap-y-5">
					<li>Overview</li>
					<li>DISCOVERY & PERSONAL EXPERIENCES</li>
					<li>THE RESEARCH</li>
					<li>MY INSIGHTS FROM THE RESEARCH</li>
					<li>THE UI EXPLANATION</li>
					<li>THE USER FLOW</li>
					<li>THE PROTOTYPE</li>
					<li>MY FINAL THOUGHTS</li>
				</ul>
			</div>
		</Wrapper>
	);
};

export default Whatsapp;
