import {ReactElement, useReducer} from 'react'
import styled from '@emotion/styled'
import globalStyle from './globalStyle'
import {Global} from '@emotion/react'
import {Box, ChakraProvider} from '@chakra-ui/react'
import {useQuery, useMutation, QueryClientProvider, QueryClient} from 'react-query'

const Container = styled.h1`
    margin: auto;
    color: blue;
`

const fetchThing = () => {
    return fetch('https://localhost/api/thing')
}

const Wrapper = ({text, onClick}: {text: string; onClick: () => void}) => {
    const {data, isLoading} = useQuery('thing', fetchThing)

    return <Container onClick={onClick}> {text}</Container>
}

const client = new QueryClient()

const App = (): ReactElement => {
    return (
        <>
            <QueryClientProvider client={client}>
                <ChakraProvider>
                    <Box borderWidth={1} borderColor={'red'} padding={'10px 10px 10px 10px'} margin="auto">
                        <Wrapper text={'React App'} onClick={() => void 0} />
                    </Box>
                    <Global styles={globalStyle} />
                </ChakraProvider>
            </QueryClientProvider>
        </>
    )
}

export default App
