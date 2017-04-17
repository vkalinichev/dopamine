import React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'
import colors from './colors'

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 200px 0 1;
  background: #eee;
  box-shadow: -.5px 0 #ccc inset;
`

const Filters = styled.div`
  overflow: auto;
`

const Filter = styled(Link)`
  display: block;
  color: ${ ({active}) => active ? colors.brand : '#333' };
  padding: 10px 20px;
  box-shadow: 0 -.5px #ccc inset;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    background: hsla(0, 0%, 0%, .02)
  }
  
  &:active {
    color: #3fb2ff
  }
`

const SideBar = () => (
  <StyledSideBar>
    <Filters>
      <Filter to='/active'>Active</Filter>
      <Filter to='/done'>Done</Filter>
      <Filter to='/all'>All</Filter>
      { new Array(30).fill(null).map( ( item, index ) => (
        <Filter  to={`/${ index + 1 }`} key={ index }>Custom filter #{ index + 1 }</Filter>
      )) }
    </Filters>
  </StyledSideBar>
)

export default SideBar
