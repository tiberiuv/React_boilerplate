import {useQuery} from 'react-query'
import styled from '@emotion/styled'
import {Box, Input} from '@chakra-ui/react'
import {ReactElement} from 'react'

const Container = styled.h1`
    margin: auto;
`

const fetchThing = () => {
    return fetch('https://localhost/api/thing')
}

const Wrapper = ({text, onClick}: {text: string; onClick: () => void}) => {
    const {data, isLoading} = useQuery('thing', fetchThing)
    return (
        <Container onClick={onClick}>
            <Box marginBottom="10px">
                <label>{text}</label>
            </Box>
            <Input placeholder="something" />
        </Container>
    )
}

const Boxx = (): ReactElement => {
    return (
        <Box borderRadius="3px" border="3px solid red" padding="10px 10px 10px 10px" margin="auto">
            <Wrapper text={'React App'} onClick={() => void 0} />
        </Box>
    )
}
export default Boxx
