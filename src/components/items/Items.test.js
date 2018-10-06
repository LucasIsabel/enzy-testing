import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Items from './index';
import Item from './item'

configure({adapter: new Adapter()});

describe('<Items />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Items />);
  })
  it('it shloud render component items', () => {
    expect(wrapper.find('props')).toHaveProperty("name")
  })

  it('it should render two elements <Item />', () => {
    expect(wrapper.find(Item)).toHaveLength(2)
  })

  it('it should check if component contains propertie name', () => {
    expect(wrapper.prop('name')).toBe('lucas')
  })

});