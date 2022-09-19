import { Component } from 'react'
import { Flex, Header, IconBtn, Label, PageContent, Tag } from 'styles/common'
import SearchIcon from '@mui/icons-material/Search'
import { NavLink } from 'react-router-dom'
import ItemCard from 'components/ItemCard'
import { productCategories } from 'routes/paths'

class Saved extends Component {
  // const { listId } = useParams()
  // const navigate = useNavigate()

  // const checkParam = () => {
  //   const list = validLists[listId as any]
  //   if (!list) navigate('/', { replace: true })
  //   return list
  // }
  // const goBack = () => navigate(-1)

  // const title = checkParam()
  render() {
    return (
      <>
      <Header columns={true} bg='#131629' padding='.5em 10px'>
        <Flex padding='0'>
          <Label size="80%"><h1>Favorite</h1></Label>
        <NavLink to="search">
          <IconBtn>
            <SearchIcon color="primary" />
          </IconBtn>
        </NavLink>
        </Flex>
        <Flex flexChild='24%' padding='.4em .4em 0' wrap>
          <Tag color='primary' label="All" height='30px' variant="filled" />{
          productCategories.map(({name}) => <Tag margin='0 0 5px 0' color='primary' height='30px' variant='outlined' key={name} label={name} />)}
        </Flex>
      </Header>
      <PageContent>
        <Flex padding='0' columns={true}>
        {[1, 2, 2, 3].map((item) => (
          <ItemCard width="90%" margin="1em 0 0 0" />
        ))}
      </Flex>
      </PageContent>
    </>)
  }
}

export default Saved
