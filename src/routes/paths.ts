import { ComponentType } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import FavoriteIcon from '@mui/icons-material/FavoriteBorder'
import ChatIcon from '@mui/icons-material/ChatBubbleOutline'
import ProfileIcon from '@mui/icons-material/Person'
import VillaIcon from '@mui/icons-material/Villa'
import ApartmentIcon from '@mui/icons-material/Apartment'
import LandscapeIcon from '@mui/icons-material/Landscape'
import Home from 'pages/Home'
import Search from 'pages/Search'
import Saved from 'pages/Saved'
import Profile from 'pages/Profile'
import Chat from 'pages/Chat'
import List from 'pages/List'
import ListingDetails from 'pages/ListingDetails'

interface IPath {
  to: string
  key: string
  name: string
  icon: ComponentType<any>
  component: ComponentType<any>
}

export const paths: IPath[] = [
  {
    to: '',
    key: 'key-1',
    name: 'Home',
    icon: HomeIcon,
    component: Home,
  },
  {
    to: 'search',
    key: 'key-2',
    name: 'Search',
    icon: SearchIcon,
    component: Search,
  },
  {
    to: 'saved',
    key: 'key-3',
    name: 'Saved',
    icon: FavoriteIcon,
    component: Saved,
  },
  {
    to: 'chat',
    key: 'key-4',
    name: 'Chat',
    icon: ChatIcon,
    component: Chat,
  },
  {
    to: 'me',
    key: 'key-5',
    name: 'Profile',
    icon: ProfileIcon,
    component: Profile,
  },
]

export const secondaryPaths: Array<any> = [
  {
    to: 'lists/:listId',
    key: 'key-6',
    component: List,
  },
]

export const otherPaths: Array<any> = [
  {
    to: 'listing/:listingId',
    key: 'key-7',
    component: ListingDetails,
  },
]

export const productCategories = [
  {name: 'house', icon: HomeIcon},
  {name: 'villa', icon: VillaIcon},
  {name: 'apartment', icon: ApartmentIcon},
  {name: 'land', icon: LandscapeIcon},
]
