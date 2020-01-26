import React from "react"
import { Card as Precursor } from "react-native-elements"
import TouchableScale from "react-native-touchable-scale"
import styled from "styled-components"

function Card(props) {
  return (
    <TouchableScale activeScale={0.95} friction={6} tension={150} {...props}>
      <Precursor
        wrapperStyle={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
        containerStyle={{
          borderRadius: 7,
          borderColor: "transparent",
          shadowColor: "rgba(0,0,0,0.2)",
          shadowOffset: { height: 3, width: 0 },
          shadowOpacity: 0.7,
          shadowRadius: 5
        }}
        {...props}>
        {props.children}
      </Precursor>
    </TouchableScale>
  )
}

function applyStyle(props) {
  if (props.primary) {
    return {
      borderRadius: 7,
      borderColor: "transparent",
      shadowColor: "rgba(0,0,0,0.2)",
      shadowOffset: { height: 3, width: 0 },
      shadowOpacity: 0.7,
      shadowRadius: 5
    }
  }
}

const StyledCard = styled(Card).attrs((props) => ({
  containerStyle: applyStyle(props)
}))``

export default Card
