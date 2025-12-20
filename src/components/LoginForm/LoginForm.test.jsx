import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LoginForm from './LoginForm';

describe(`LoginForm component`, () => {
    const props = {
        className: 'test-class-name',
        children: <p>test children</p>,
        'data-other': 'test-other-prop',
        agent: {
            first_name: "test",
            last_name: "test",
            title: "test",
            city: "test",
            state: "test"
        }
    };

    it('renders the LoginForm given props', () => {
        const wrapper = shallow(<LoginForm {...props} />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
})