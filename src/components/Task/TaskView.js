import React from 'react'
import styled from 'styled-components'

const StyledTask = styled.div`
  flex: 1;
  box-shadow: .5px 0 #ddd inset;
  padding: 10px 20px;
`

const Task = ({taskId}) => (
  <StyledTask>
    Task #{ taskId }
  </StyledTask>
)

export default Task
