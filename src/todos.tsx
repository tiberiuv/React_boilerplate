import {Box, List, ListItem} from '@chakra-ui/react'
import {ReactElement} from 'react'

type CardProps = {
    title: string
}
const Card = ({title}: CardProps): ReactElement => {
    return (
        <Box display="flex" flex-direction="column">
            <label>{title}</label>
        </Box>
    )
}

type TCard = {
    title: string
}
const CardList = ({items}: {items: Array<TCard>}) => {
    return items.map((x) => <Card key={x.title} {...x} />)
}
