import { Flex, Header, IconBtn, Label, PageContent } from 'components/common'
import BackIcon from '@mui/icons-material/ArrowBack'
import SearchIcon from '@mui/icons-material/Search'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import ItemCard from 'components/ItemCard'

const validLists: any = {
  popular: 'popular',
  near: 'nearby your location',
  house: 'house',
  apartment: 'apartment',
  villa: 'villa',
  land: 'land',
}

const List = () => {
  const { listId } = useParams()
  const navigate = useNavigate()

  const checkParam = () => {
    const list = validLists[listId as any]
    if (!list) navigate('/', { replace: true })
    return list
  }
  const goBack = () => navigate(-1)

  const title = checkParam()

  return (
    <>
      <Header>
        <Label size="80%">
          <BackIcon color="primary" fontSize="large" onClick={goBack} />
          &nbsp;&nbsp;&nbsp;&nbsp;<h1>{title}</h1>
        </Label>
        <NavLink to="search">
          <IconBtn>
            <SearchIcon color="primary" />
          </IconBtn>
        </NavLink>
      </Header>
      <PageContent>
        <Flex padding='0' columns={true}>
        {[1, 2, 2, 3].map((item) => (
          <ItemCard width="90%" margin="1em 0 0 0" />
        ))}
      </Flex>
      </PageContent>
      
    </>
  )
}

export default List
