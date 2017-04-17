import React from 'react'
import styled, { keyframes } from 'styled-components'
import UserIcon from 'react-icons/ti/user'
import ExitIcon from 'react-icons/md/exit-to-app'
import colors from './colors'

const Top = styled.div`
  position: relative;
  flex: 44px 0 0;
  padding: 10px 20px;
  box-sizing: border-box;
  box-shadow: 0 -.5px #ccc inset;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
`

const Logo = styled.div`
  text-align: center;
  font-weight: 400;
  color: #555;
`

const colorize = keyframes`
  to {
    color: ${ colors.brand }
  }
`

const LogoHighlight = styled.span`
  animation: ${ colorize } 2s ease-in-out forwards;
`

const UserBar = styled.div`
  color: ${ colors.brand };
`

const UserPic = styled( UserIcon )`
  color: ${ colors.brand }; 
`

const Search = styled.input`
  margin: -4px 0;
  padding: .2em 10px
  border: none;
  border-radius: 2px;
  box-shadow: 0 0 0 .5px #ccc;
  font: inherit;
  line-height: 1.5;
  
  &::-webkit-input-placeholder {
    color: hsla(0,0%,0%,.2);
    font-weight: 100;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${ colors.brand };
  }
`

const ExitButton = styled.a`
  color: ${ colors.brand };
  margin-left: .33em;
  cursor: pointer;
`

const Progress = styled.div`
  position: absolute;
  left: 0;
  right: 0
  bottom: 0;
  height: 4px;
  background: linear-gradient(
    to right,
    ${ colors.brand } ${ ({value}) => (value || 0) * 100 }%,
    hsla(0, 0%, 0%, .05) ${ ({value}) => (value || 0) * 100 }%
  )
`

const TopBar = () => (
  <Top>
    <Logo>
      D<LogoHighlight>opa</LogoHighlight>mine
    </Logo>
    <Search placeholder='Search'/>
    <UserBar>
      <UserPic/>
      John Doe
      <ExitButton>
        <ExitIcon/>
      </ExitButton>
    </UserBar>
    <Progress value={ .27 }/>
  </Top>
)

export default TopBar
