import Menu from 'components/mobile/Menu'
import { Component } from 'react'
import { Outlet } from 'react-router-dom'
import 'styles/main.css'

class Main extends Component {
  render() {
    return (
      <>
        <Outlet />
        <Menu />
      </>
    )
  }
}

export default Main
