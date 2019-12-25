import React from 'react'
import {shallow} from 'enzyme'
import App from './app'

describe('App', () => {
    it('renders', () => {
        const component = shallow(<App />)
        expect(component).toExist()
    })
})
