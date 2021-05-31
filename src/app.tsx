import React, {ReactElement} from 'react'
import styled from '@emotion/styled'
import globalStyle from './globalStyle'
import {Global} from '@emotion/react'

const Container = styled.h1`
    margin: auto;
    color: red;
`

const Wrapper = ({text}: {text: string}) => <Container>{text}</Container>

const App = (): ReactElement => {
    return (
        <>
            <Global styles={globalStyle} />
            <Wrapper text={'React App'} />
        </>
    )
}

export default App
