import { Flex, IconBtn } from "components/common";
import {paths} from "routes/paths";
import { Link, NavLink } from "react-router-dom";
import { useLayoutEffect, useState } from "react";

const Menu = () => {
    const [activeLink, setActiveLink] = useState('')
    
    useLayoutEffect(()=> {

    })
    return (
    <Flex className='mobile-menu secondary'>
        {paths.map(path => (
            <NavLink
            style={({ isActive }) => {
                isActive && setActiveLink(path.key)
                return {};
              }}
            to={path.to} key={path.key}
            >
            <IconBtn isActive={activeLink === path.key}><path.icon color="primary" /></IconBtn>
            </NavLink>
            
        ))}
    
    </Flex>
)
}



export default Menu;