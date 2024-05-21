import HeroComponent, { Wrapper } from './HeroComponent';
import hero from '../../assets/case_studies/cybaplay/hero.png';

export default () => {
	return (
		<Wrapper>
			<HeroComponent
				title={'Cybaplay Music app'}
				description={
					'CybaPlay brings you the best music and the best listening experience coupled with a very simple and modern UI'
				}
				image={hero}
			/>
		</Wrapper>
	);
};
