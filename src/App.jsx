import { useRoutes } from 'react-router-dom'
import { ViewStyle } from './styles'
import routes from './routers'
function App() {
  return <ViewStyle>{useRoutes(routes)}</ViewStyle>
}

export default App
