import one from './assets/case_studies/1.png';
import two from './assets/case_studies/2.png';
import three from './assets/case_studies/3.png';

/**
 * @type {(image: string, options: {cols: number,  col_start: number, rows: number; row_start: number}) => {image: any; grid: {cols: number,  col_start: number, rows: number; row_start: number}}}
 */
const createImage = (image, options) => ({
	image,
	grid: {
		cols: 1,
		rows: 1,
		col_start: 0,
		row_start: 0,
		...options,
	},
});

export const caseStudies = [
	createImage(one, { rows: 2, cols: 3, col_start: 1, row_start: 1 }),
	createImage(two, { rows: 1, cols: 3, col_start: 2, row_start: 0 }),
	createImage(three, { rows: 1, cols: 3, col_start: 2, row_start: 0 }),
];
