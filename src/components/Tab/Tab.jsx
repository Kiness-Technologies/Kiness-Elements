import React from "react"
import { Tab as Precursor } from "react-native-elements"

function applyStyle(props) {
  if (props.primary) {
    return style.primary
  }
}

const Tab = ({ children, ...props }) => <Precursor>{children}</Precursor>

export default Tab
