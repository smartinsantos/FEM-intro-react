/* global test expect */
import React from 'react'
import _ from 'lodash'
// enzyme
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
// Components
import Search from './Search'
import ShowCard from './ShowCard'
import data from '../public/data.json'

// jest library - make snapshot of the component rendered and when ever it changes test is going to fail
test('Search snapshot test', () => {
  const component = shallow(<Search />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})

test('Search should render a ShowCard for each show', () => {
  const component = shallow(<Search />)
  expect(component.find(ShowCard).length).toEqual(data.shows.length)
})

test('Search should render correct amount of shows based on search', () => {
  const searchWord = 'house'
  const component = shallow(<Search />)
  component.find('input').simulate('change', { target: { value: searchWord } })
  const showCount = _.filter(data.shows, (show) => {
    return `${show.title} ${show.description}`.toLowerCase().indexOf(searchWord.toLowerCase()) >= 0
  }).length
  expect(component.find(ShowCard).length).toEqual(showCount)
})
