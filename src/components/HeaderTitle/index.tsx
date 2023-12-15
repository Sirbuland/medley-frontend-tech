import React from 'react'
import { HeaderTwo, BorderBox, FlexBox } from './header.style'

const HeaderTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <FlexBox>
      <BorderBox />
      <HeaderTwo>
        {children}
      </HeaderTwo>
    </FlexBox>
  )
}

export default HeaderTitle