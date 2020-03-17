import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

// import ThingsContainer from '../containers/ThingsContainer'


configure({ adapter: new Adapter()})

describe('Header', () => {
    // let wrapper
    
    // beforeEach(() => {
    //     wrapper = shallow(<Thing/>)
    // })
    it('should render title name', () => {
        const wrapper = shallow(<Header/> )
        const image = wrapper.find('h1')

    })
})