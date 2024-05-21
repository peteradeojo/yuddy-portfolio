import HeroComponent, { Wrapper } from './HeroComponent';

import hero from '../../assets/case_studies/feather/hero.png';

export default () => {
	return (
		<Wrapper>
			<HeroComponent
				title={'Feather App'}
				image={hero}
				description={
					'Feather is crypto currency app with better features that help user to trade their crypto assets with ease and maximum security'
				}
			/>
		</Wrapper>
	);
};
