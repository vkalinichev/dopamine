import React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'

const StyledTasks = styled.div`
  flex: 1;
  overflow: auto;
`

const TasksItem = styled(Link)`
  display: block;
  color: ${ ({active}) => active ? 'red' : '#333' };
  padding: 10px 20px;
  box-shadow: 0 -.5px #ddd inset;
  cursor: pointer;
  
  &:hover {
    background: hsla(0, 0%, 0%, .02)
  }
`

const TasksWrapper = styled.div`
  display: flex;
`

const TasksView = ({ children, filterId }) => (
  <TasksWrapper>
    <StyledTasks>
    { new Array(50).fill(null).map( ( item, index ) => (
      <TasksItem
        key={ index + 1 }
        to={ `/${ filterId }/` + (+index + 1) }
      >
        Task #{ index + 1 }
      </TasksItem>
    )) }
    </StyledTasks>
    { children }
  </TasksWrapper>
)

export default TasksView
