import { Component } from 'react'
import { ConfirmationPopup, Flex, Header, IconBtn, Label, MuiButton, PageContent, Tag } from 'styles/common'
import SearchIcon from '@mui/icons-material/Search'
import { NavLink } from 'react-router-dom'
import ItemCard from 'components/ItemCard'
import { productCategories } from 'routes/paths'
import { SlideTransition } from 'components/Dialog'
import { IListing } from 'types'
import NotFound from 'components/NotFound'

class Saved extends Component {
  state = { selected: null }
  // const { listId } = useParams()
  // const navigate = useNavigate()

  // const checkParam = () => {
  //   const list = validLists[listId as any]
  //   if (!list) navigate('/', { replace: true })
  //   return list
  // }
  // const goBack = () => navigate(-1)

  // const title = checkParam()

  onSelect = (item: IListing) => () => this.setState({ selected: item })

  onCancel = () => this.setState({ selected: null })
  unfavoriteListing = () => {

  }

  render() {
    const favs: any[] = [1, 1, 1, 1, 1, 1]
    const { selected } = this.state;

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
            <Tag margin='0 0 5px 0' color='primary' label="All" height='30px' variant="filled" />
            {
              productCategories.map(({ name }) => <Tag margin='0 0 5px 0' color='primary' height='30px' variant='outlined' key={name} label={name} />)
            }
          </Flex>
        </Header>
        <PageContent>
          <Flex padding='5em 0 0' columns={true}>
            {!favs.length && <NotFound message="You don't have a favorite" />}
            {favs.map((item) => (
              <ItemCard width="100%" margin="1em 0 0 0" onSave={this.onSelect(item)} />
            ))}
          </Flex>
        </PageContent>
        <ConfirmationPopup zIndex='1500' open={!!selected} keepMounted={true} dark={true} TransitionComponent={SlideTransition}>
          <hr />
          <ItemCard width="100%" margin="1em 0 0 0" />
          <Label space='center'>Remove from favorite?</Label>
          <Flex padding="0" space="start" gap="5%">
            <MuiButton variant="outlined" onClick={this.onCancel}>Cancel</MuiButton>
            <MuiButton onClick={this.unfavoriteListing}>Remove</MuiButton>
          </Flex>
        </ConfirmationPopup>
      </>)
  }
}

export default Saved
