import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RegistrationHeader from './RegistrationHeader';

describe(`RegistrationHeader component`, () => {
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

    it('renders the RegistrationHeader given props', () => {
        const wrapper = shallow(<RegistrationHeader {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})