import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DashboardHeader from './DashboardHeader';

describe(`DashboardHeader component`, () => {
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

    it('renders the DashboardHeader given props', () => {
        const wrapper = shallow(<DashboardHeader {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})