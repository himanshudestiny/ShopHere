import { Grid, GridItem, Heading } from '@chakra-ui/react';

const Component = ({text}) => {
    return (
        <div>
            <GridItem w='100%' h='100' textAlign="left">
    <Heading size='md' ml='6' mt='4'>{text}</Heading>
  </GridItem>
        </div>
    )
}

export default Component;