import { Container } from '@material-ui/core';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<Container>
			<h1>Captain Janeway's Coffee</h1>
			<nav>
				<Link activeClassName={style.active} href="/">Home</Link>
				<Link activeClassName={style.active} href="/janeway">Janeway</Link>
			</nav>
		</Container>
	</header>
);

export default Header;
