import { h } from 'preact';
import Header from '../src/components/header';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

describe('Initial Test of the Header', () => {
	test('Header renders nav items', () => {
		const context = shallow(<Header />);
		expect(context.find('h1').text()).toBe('Captain Janeway\'s Coffee');
	});
});
