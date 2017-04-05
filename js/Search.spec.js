/* global test expect */

import React from 'react'
import Search from './Search'

// enzyme
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

// jest library - make snapshot of the component rendered and when ever it changes test is going to fail

test('Search snapshot test', () => {
  const component = shallow(<Search />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
