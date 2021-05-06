import React from "react"
// Component is based on is called Precursor
import { Button as Precursor } from "react-native-elements"
// Component's Style in Typescript
import { style } from "./Button.style"
import { style as GlobalStyle } from "../Global.style"
import TouchableScale from "react-native-touchable-scale"

function changeContainerStyle(props) {
  let newStyle = {}

  if (props.card) {
    newStyle = { ...newStyle, ...style.card }
  }

  return {
    ...newStyle,
  }
}

function changeButtonStyle(props) {
  let newStyle = {}

  if (props.white) {
    return { backgroundColor: "#fff" }
  }

  switch (props.color) {
    case "blue":
      newStyle = { ...newStyle, ...GlobalStyle.blue }
      break

    case "fucsia":
      newStyle = { ...newStyle, ...GlobalStyle.fucsia }
      break

    case "amber":
      newStyle = { ...newStyle, ...GlobalStyle.amber }
      break

    case "green":
      newStyle = { ...newStyle, ...GlobalStyle.green }
      break

    case "purple":
      newStyle = { ...newStyle, ...GlobalStyle.purple }
      break

    default:
      newStyle = { ...newStyle, ...{ backgroundColor: "#fff" } }
      break
  }

  return {
    ...newStyle,
  }
}

const Scalable = (props) => (
  <TouchableScale activeScale={0.95} friction={6} tension={150} {...props} />
)

// TODO: Change titleStyle prop to be dynamic
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
