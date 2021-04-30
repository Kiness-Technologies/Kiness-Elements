import React from "react"
import { Button as ReButton } from "react-native-elements"
import styled from "styled-components"

// Ancestor
function PreButton(props) {
  return <ReButton {...props}>{props.children}</ReButton>
}

function changeStyle(props) {
  if (props.primary) {
    return {
      backgroundColor: "black",
    }
  }
}

const Button = styled(PreButton).attrs((props) => ({
  buttonStyle: changeStyle(props),
}))``

export default Button
