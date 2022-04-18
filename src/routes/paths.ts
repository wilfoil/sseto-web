import { ComponentType } from "react"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/ChatBubbleOutline';
import ProfileIcon from '@mui/icons-material/Person';
import Home from "pages/Home";
import Search from "pages/Search";
import Saved from "pages/Saved";
import Profile from "pages/Profile";


interface IPath {
    to: string,
    key: string,
    name: string,
    icon: ComponentType<any>,
    component: ComponentType<any>,
}

export const paths: Array<IPath> = [
    {
        to: '',
        key: 'key-1',
        name: 'Home',
        icon: HomeIcon,
        component: Home
    },
    {
        to: 'search',
        key: 'key-2',
        name: 'Search',
        icon: SearchIcon,
        component: Search
    },
    {
        to: 'saved',
        key: 'key-3',
        name: 'Saved',
        icon: FavoriteIcon,
        component: Saved
    },
    {
        to: 'chat',
        key: 'key-4',
        name: 'Chat',
        icon: ChatIcon,
        component: ChatIcon
    },
    {
        to: 'me',
        key: 'key-1',
        name: 'Profile',
        icon: ProfileIcon,
        component: Profile
    }
]