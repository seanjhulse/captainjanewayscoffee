import { h } from 'preact';
import { Box, Container } from '@material-ui/core';
import style from './style.css';
import { Pets } from '@material-ui/icons';


const janewaysAge = () => {
	const JANEWAYS_BIRTHDAY = "2021-02-14";
	const today = new Date();
	const birthday = new Date(JANEWAYS_BIRTHDAY);

	const diff = Math.abs(today - birthday);
	const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
	const diffMonths = Math.floor(diffDays / 30);
	const diffYears = Math.floor(diffDays / 365);
	const diffMonthsMinusYears = diffMonths - (diffYears * 12);
	return `${diffYears} years and ${diffMonthsMinusYears} months old`;
}

const Janeway = () => (
	<Box className={style.main}>
		<Container>
			<h1><Pets /> This is my dog, Captain Janeway</h1>
			<img src="/assets/images/misc/janeway.jpg" class={style.photo} />
			<p>She is {janewaysAge()}.</p>
			<p>She's named after <i>Captain Janeway</i> of <i>Star Trek Voyager</i>. Cpt. Janeway is known for her drink of choice: coffee, black.</p>
			<p>My dog doesn't drink coffee but sometimes she behaves like she does.</p>
		</Container>
	</Box>
);

export default Janeway;
