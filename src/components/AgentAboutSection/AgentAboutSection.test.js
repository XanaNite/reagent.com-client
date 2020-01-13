import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AgentAboutSection from './AgentAboutSection'

describe(`AgentAboutSection component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  };

  it('renders AgentAboutSection by default', () => {
    const wrapper = shallow(<AgentAboutSection />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders AgentAboutSection given props', () => {
    const wrapper = shallow(<AgentAboutSection {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})