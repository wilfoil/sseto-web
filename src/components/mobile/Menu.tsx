import { Flex, IconBtn } from "styles/common";
import { paths } from "routes/paths";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material";

const Menu = () => {
    const { pathname } = useLocation()
    const { palette: { primary } } = useTheme();

    const activeLink = (): string => {
        const menuTab = paths.find(i => `/${i.to}` === pathname || pathname.includes(`/${i.to}/`));

        if (menuTab) return menuTab.to;
        return '';
    }

    const isActive = activeLink()

    return (
        <Flex className='mobile-menu secondary '>
            {paths.map(path => {
                const active = isActive === path.to
                return (
                    <NavLink
                        to={path.to}
                        key={path.key}
                    >
                        <IconBtn isActive={active}><path.icon style={{ fill: active ? '#FFF' : primary.main, width: 100 }} /></IconBtn>
                    </NavLink>

                )
            }

            )}
        </Flex>
    )
}



export default Menu;