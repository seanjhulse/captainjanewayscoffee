import { h } from 'preact';
import style from './style.css';


const janewaysAge = () => {
	const JANEWAYS_BIRTHDAY = "2020-02-14";
	const today = new Date();
	const birthday = new Date(JANEWAYS_BIRTHDAY);

	const diff = Math.abs(today - birthday);
	const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
	const diffMonths = Math.floor(diffDays / 30);
	const diffYears = Math.floor(diffDays / 365);
	const diffMonthsMinusYears = diffMonths - (diffYears * 12);
	return `${diffYears} years and ${diffMonthsMinusYears} months old`;
}

const Home = () => (
	<div class={style.home}>
		<h1>This is my dog, Janeway</h1>
		<img src="/assets/images/misc/janeway.jpg" class={style.photo} />
		<p>She is {janewaysAge()}.</p>
		<p>She's named after <i>Captain Janeway</i> of <i>Star Trek Voyager</i>. Cpt. Janeway is known for her drink of choice: coffee, black.</p>
		<p>My dog doesn't drink coffee but sometimes she behaves like she does.</p>
	</div>
);

export default Home;
