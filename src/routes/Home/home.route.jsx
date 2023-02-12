import { Fragment } from 'react'

import Categories from '../../components/categories-carousel/categories-carousel.component'
import Example from '../../components/carousel/carousel'
import Responsive from '../../components/multi-carousel/multi-carousel.component'
import BasicTabs from '../../components/tabs/tabs.component'

const Home = () => {
    
    return(
    <Fragment>
    <Example />
    <Categories />
    <Responsive />
    <BasicTabs />
    </Fragment>
    
    );
}

export default Home;