import Cybaplay from '../pages/case_studies/Cybaplay';
import FeatherCrypto from '../pages/case_studies/FeatherCrypto';
import Whatsapp from '../pages/case_studies/Whatsapp';

const webLinks = [
	['My Works', '/#works'],
	['Web Design', '/#works'],
];
const caseStudyLinks = [
	['My Works', '/#works'],
	['My Case Studies', '/#works'],
];

const playgroundLinks = [
	['My Works', '/#works'],
	['My Playground', '/#works'],
];

export const crumbs = {
	'/my-works/web-design/icare-website': {
		links: [...webLinks, 'iCare Charity Website'],
		element: <></>,
	},
	'/my-works/web-design/cybeauty-website': {
		links: [...webLinks, 'Cybeauty Website'],
		element: <></>,
	},
	'/my-works/web-design/feather-app-website': {
		links: [...webLinks, 'Feather App Website'],
		element: <></>,
	},
	'/case-studies/whatsapp-redesign': {
		links: [...caseStudyLinks, 'Whatsapp Feature Update'],
		element: <Whatsapp />,
	},
	'/case-studies/feather-crypto-app': {
		links: [...caseStudyLinks, 'Feather Crypto App'],
		element: <FeatherCrypto />,
	},
	'/case-studies/cybaplay': {
		links: [...caseStudyLinks, 'Cybaplay Music'],
		element: <Cybaplay />,
	},
	'/playground/lascarpa': {
		links: [...playgroundLinks, 'Lascarpa Shoe Store'],
		element: <></>,
	},
	'/playground/groot-academy': {
		links: [...playgroundLinks, 'Groot Academy Portal'],
		element: <></>,
	},
	'/playground/bubble-tv': {
		links: [...playgroundLinks, 'Bubble TV App'],
		element: <></>,
	},
	'/playground/mestore-dashboard': {
		links: [...playgroundLinks, 'Mestore Dashboard'],
		element: <></>,
	},
};
