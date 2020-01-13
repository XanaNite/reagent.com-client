import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AgentImgSection from './AgentImgSection'

describe(`AgentImgSection component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  };

  it('renders AgentImgSection by default', () => {
    const wrapper = shallow(<AgentImgSection />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders AgentImgSection given props', () => {
    const wrapper = shallow(<AgentImgSection {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})