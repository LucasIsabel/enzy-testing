import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Items from './index';
import Item from './item'

configure({adapter: new Adapter()});

describe('<Items />', () => {
  it('it shloud render component items', () => {
    const wrapper = shallow(<Items/>)
    expect(wrapper.find('props')).toHaveProperty("name")
  })

  it('it should render two elements <Item />', () => {
    const wrapper = shallow(<Items/>)
    expect(wrapper.find(Item)).toHaveLength(2)
  })

});