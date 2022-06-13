import {Header} from './index'
function Layout(props) {
  return (
    <>
        <Header/>
        {props.children}
    </>
  )
}

export default Layout