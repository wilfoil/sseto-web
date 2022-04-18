import { Flex, IconBtn } from "components/common";
import { paths } from "routes/paths";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material";

const Menu = () => {
    const { pathname } = useLocation()
    const { palette: { primary } } = useTheme();

    const activeLink = (linkPath: string, currentPath: string): boolean => linkPath ? currentPath.includes(linkPath) : currentPath === '/';

    return (
        <Flex className='mobile-menu secondary'>
            {paths.map(path => {
                const isActive = activeLink(path.to, pathname)
                return (
                    <NavLink
                        to={path.to}
                        key={path.key}
                    >
                        <IconBtn isActive={isActive}><path.icon style={{ fill: isActive ? '#FFF' : primary.main }} /></IconBtn>
                    </NavLink>

                )
            }

            )}

        </Flex>
    )
}



export default Menu;