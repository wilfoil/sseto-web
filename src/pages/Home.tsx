import { Header, Label, PageContent } from 'components/common'
import Search from 'components/Search'
import Categories from 'components/Search/Categories'
import FeaturedList from 'components/Search/FeaturedList'
import { Component } from 'react'

class Home extends Component {
  render() {
    return <>
    <Header><Label size="80%"><h1>Sseto</h1></Label></Header>
    <PageContent columns>
      <Search />
    <Categories />
    <FeaturedList features={[]} />
    </PageContent>
    
    </>
  }
}

export default Home
