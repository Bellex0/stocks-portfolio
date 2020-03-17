import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import Thing from './Thing'

// import ThingsContainer from '../containers/ThingsContainer'


configure({ adapter: new Adapter()})

describe('<Thing/>', () => {
    // let wrapper
    
    // beforeEach(() => {
    //     wrapper = shallow(<Thing/>)
    // })
    it('should render list item', () => {
        const wrapper = shallow(<Thing/>)
        wrapper.setProps({handleClick: true})
        expect(wrapper.find(Thing)).toEqual(expect.anything())

    })
})