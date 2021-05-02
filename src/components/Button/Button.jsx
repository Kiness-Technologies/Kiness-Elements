import React from "react"
import { Button as Precursor } from "react-native-elements"
import styled from "styled-components"
import { styles } from "./Button.style"

function changeStyle(props) {
  if (props.primary) {
    return styles.primary
  }
}

const Button = (props) => (
  <Precursor buttonStyle={changeStyle(props)} {...props}>
    {props.children}
  </Precursor>
)

export default Button
