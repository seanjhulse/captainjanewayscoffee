import { Box, Container } from '@material-ui/core';
import CoffeeMakerRounded from '@mui/icons-material/CoffeeMakerRounded';
import style from './style.css';

const Home = () => (
	<Box className={style.home}>
		<Container>
			<h1><CoffeeMakerRounded /> Coffee, black.</h1>
		</Container>
	</Box>
);

export default Home;
