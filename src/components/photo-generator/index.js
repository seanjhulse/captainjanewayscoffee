import { h } from 'preact';
import style from './style.css';

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const PhotoGenerator = () => {
    
    const photoIndex = getRandomInt(1, 20);

    return (
	    <div class={style.photoWrapper}>
            <img class={style.photo} src={`assets/images/openai/${photoIndex}.png`} />
        </div>
    )
};

export default PhotoGenerator;
