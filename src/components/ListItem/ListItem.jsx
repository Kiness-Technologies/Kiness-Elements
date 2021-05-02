import React from "react"
import { ListItem as Precursor } from "react-native-elements"
import styled from "styled-components"
import { style } from "./ListItem.style"

function changeStyle(props) {
  if (props.kinessStyle && props.card) {
    const returnedTarget = {
      ...style.cardStyle,
      ...props.kinessStyle,
    }

    return returnedTarget
  }

  if (props.card) {
    return style.cardStyle
  }
}

const ListItem = (props) => (
  <Precursor containerStyle={changeStyle(props)} {...props}>
    {props.children}
  </Precursor>
)

export default ListItem
