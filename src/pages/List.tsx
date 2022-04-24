import { Flex, IconBtn, Label } from 'components/common'
import BackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import ItemCard from 'components/ItemCard';

const validLists = ['popular', 'near', 'house', 'apartment', 'villa', 'land']

const List = () => {
    const {listId} = useParams()
    const navigate = useNavigate()
    !validLists.includes(listId as any) && navigate('/', {replace: true})

    return (<>
    <Flex>
        <Label size='80%'><BackIcon color='primary' fontSize='large' />&nbsp;&nbsp;&nbsp;&nbsp;<h1>House</h1></Label>
        <NavLink to='search'><IconBtn><SearchIcon color='primary'/></IconBtn></NavLink>
    </Flex>
    <Flex columns>
        {[1,2,2,3].map(item => <ItemCard width='90%' margin='1em 0 0 0' />)}
    </Flex>
    </>)
}

export default List;