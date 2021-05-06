import React from "react"
import { Card as Precursor } from "react-native-elements"
import TouchableScale from "react-native-touchable-scale"
import { style } from "./Card.style"

function applyStyle(props) {
  if (props.primary) {
    return style.primary
  }
}

const Card = (props) => (
  <TouchableScale activeScale={0.95} friction={6} tension={150}>
    <Precursor
      wrapperStyle={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      containerStyle={{
        borderRadius: 7,
        borderColor: "transparent",
        shadowColor: "rgba(0,0,0,0.2)",
        shadowOffset: { height: 3, width: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        ...props.containerStyle,
      }}
      {...props}>
      {props.children}
    </Precursor>
  </TouchableScale>
)

export default Card
