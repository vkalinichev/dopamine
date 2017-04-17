import React from 'react'
import styled from 'styled-components'
import TopBar from './TopBar'
import SideBar from './SideBar'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  min-height: 400px;
`

const Content = styled.div`
  flex: 1;
  background: #f8f8f8;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const App = ({ children }) => (
  <Wrapper>
    <TopBar/>
    <SideBar/>
    <Content>
      { children }
    </Content>
  </Wrapper>
)

export default App
