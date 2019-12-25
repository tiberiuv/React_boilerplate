import React from 'react'
import styled from '@emotion/styled'
import globalStyle from './globalStyle'
import {Global} from '@emotion/core'

const Container = styled.div`
    margin: auto;
    color: red;
`

const Wrapper = ({text}: {text: string}) => <Container>{text}</Container>

const App = () => {
    return (
        <>
            <Global styles={globalStyle} />
            <Wrapper text={'React App'} />
        </>
    )
}

export default App
