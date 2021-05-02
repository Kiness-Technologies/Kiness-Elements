import React from "react"
import { Button as Precursor } from "react-native-elements"
import styled from "styled-components"
import styles from "./Button.css"

// Precursor
function Precursor(props) {
  return <Precursor {...props}>{props.children}</Precursor>
}

function changeStyle(props) {
  if (props.primary) {
    return {
      backgroundColor: "black",
    }
  }
}

const Button = (props) => <Precursor {...props}>{props.children}</Precursor>

// const Button = styled(Precursor).attrs((props) => ({
//   buttonStyle: changeStyle(props),
// }))``

export default Button
