import React from "react"
// Component is based on is called Precursor
import { Button as Precursor } from "react-native-elements"
// Component's Style in Typescript
import { style } from "./Button.style"
import { style as GlobalStyle } from "../Global.style"
import TouchableScale from "react-native-touchable-scale"

function changeContainerStyle(props) {
  let newStyle = {}

  if (props.primary) {
    newStyle = { ...newStyle, ...style.primary }
  }

  if (props.card) {
    newStyle = { ...newStyle, ...style.card }
  }

  return {
    ...newStyle,
  }
}

function changeButtonStyle(props) {
  if (props.white) {
    return { backgroundColor: "#fff" }
  }
}

const Scalable = (props) => (
  <TouchableScale activeScale={0.95} friction={6} tension={150} {...props} />
)

// TODO: Change fixed buttonStyle and titleStyle props to be dynamic
const Button = (props) => (
  <Precursor
    containerStyle={changeContainerStyle(props)}
    buttonStyle={changeButtonStyle(props)}
    titleStyle={{ color: "#000" }}
    TouchableComponent={Scalable}
    {...props}
  />
)

export default Button