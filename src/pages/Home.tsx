import Search from 'components/Search'
import Categories from 'components/Search/Categories'
import FeaturedList from 'components/Search/FeaturedList'
import { Component } from 'react'

class Home extends Component {
  render() {
    return <>
    <Search />
    <Categories />
    <FeaturedList features={[]} />
    </>
  }
}

export default Home
