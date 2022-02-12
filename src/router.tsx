import {ReactElement} from 'react'
import {useRoutes} from 'react-router-dom'

import Boxx from './box'

const mainRoutes = [{path: '/', element: <Boxx />}]

const MainRouter = (): ReactElement | null => useRoutes(mainRoutes)

export default MainRouter
