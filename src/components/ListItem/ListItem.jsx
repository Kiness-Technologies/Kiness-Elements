import React from "react"
import { ListItem as Precursor } from "react-native-elements"
import { style } from "./ListItem.style"
import { TouchableScale } from "react-native-touchable-scale"

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
  <Precursor containerStyle={props.style} {...props} />
)

export default ListItem
