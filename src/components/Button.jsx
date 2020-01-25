import React from "react"
import { Button as Precursor } from "react-native-elements"
import styled from "styled-components"

// comment

function Button(props) {
  return <Precursor {...props}>{props.children}</Precursor>
}

function applyStyle(props) {
  if (props.primary) {
    return {
      backgroundColor: "yellow"
    }
  }
}

const StyledButton = styled(Button).attrs((props) => ({
  buttonStyle: applyStyle(props)
}))``

export default StyledButton
