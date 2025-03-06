import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { useDashboardContext } from '../pages/dashboardLayout'
const smallSideBar = () => {
    const data = useDashboardContext();
    console.log(data);
    
    return (
        <Wrapper>
            smallSideBar
        </Wrapper>
    )
}

export default smallSideBar