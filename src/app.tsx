import { ReactElement, useReducer } from 'react'
import styled from '@emotion/styled'
import globalStyle from './globalStyle'
import { Global } from '@emotion/react'

const Container = styled.h1`
    margin: auto;
    color: blue;
`

const Wrapper = <T,>({ text }: { text: T }) => <Container>{text}</Container>

type ActionType = 'RUN_REQUEST'

type Request<T> = {
    fn: () => Promise<T>
}
type State<T> = {
    groups: { [id: string]: Request<T>[] }
}

type Action<T> = {
    type: 'RUN_REQUEST',
    fn: () => Promise<T>
}

const reducer = <T,>(state: State<T>, action: Action<T>) => {
}

const App = (): ReactElement => {
    const [state, dispatch] = useReducer<State<String>, Action<String>>()
    return (
        <>
            <Global styles={globalStyle} />
            <Wrapper text={'React App'} />
        </>
    )
}

export default App
