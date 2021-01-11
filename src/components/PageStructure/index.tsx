import React, { FC } from 'react'
import { Flex } from 'reflexbox'
import facepaint from 'facepaint'

const mq = facepaint(['@media(min-width: 420px)', '@media(min-width: 920px)'])

const pageStructureStyles = mq({
  width: ['100%', '70%'],
})

const PageStructure: FC = (props) => {
  const { children } = props

  return (
    <Flex height="100%" backgroundColor="#fff">
      <Flex
        width="100%"
        overflow="auto"
        flexDirection="column"
        style={{ position: 'relative' }}
      >
        <Flex width="100%" justifyContent="center">
          <Flex
            flexDirection="column"
            height="100%"
            mt={70}
            css={pageStructureStyles}
          >
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default PageStructure
