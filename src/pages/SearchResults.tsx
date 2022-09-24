import { Component } from 'react'
import BackIcon from '@mui/icons-material/ArrowBack'
import { Flex, Header, Label, PageContent } from 'styles/common'
import Search from 'components/Search'
import NotFound from 'components/NotFound'
import Result from 'components/Search/Result'



class SearchResults extends Component {
  render() {
    const results: any[] = [1,2,3,4,1,2,3,4,1,2,3,4]
    return <>
    <Header columns={true} bg='#131629' padding='.5em 10px'>
        <Label size="80%">
          <BackIcon color="primary" fontSize="large" />
          &nbsp;&nbsp;&nbsp;&nbsp;<h1>Search</h1>
        </Label>
        <Search />
        <Label space='space-between'><h2 className='search-results-title'>Search results</h2><Label width='auto' color='#2972FE'>{results.length}&nbsp;&nbsp;found</Label></Label>
    </Header>
    <PageContent>
    <Flex padding='5em 0 0' columns={true}>
            {!results.length && <NotFound message="No matching results found" />}
            {results.map((item) => <Result />)}
          </Flex>
    </PageContent>
    </>
  }
}

export default SearchResults
