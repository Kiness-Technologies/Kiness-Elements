import React from "react"
import { ListItem as Precursor } from "react-native-elements"
import styled from "styled-components"

function ListItem(props) {
  return <Precursor {...props}>{props.children}</Precursor>
}

function changeStyle(props) {
  const cardStyle = {
    borderRadius: 7,
    borderColor: "transparent",
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    margin: 15,
    padding: 15,
    marginBottom: 0
  }

  if (props.kinessStyle && props.card) {
    const returnedTarget = {
      ...cardStyle,
      ...props.kinessStyle
    }

    return returnedTarget
  }

  if (props.card) {
    return cardStyle
  }
}

const StyledListItem = styled(ListItem).attrs((props) => ({
  containerStyle: changeStyle(props)
}))``

export default ListItem
