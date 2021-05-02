import React from "react"
import { Header as ReHeader } from "react-native-elements"

function Header(props) {
  return (
    <ReHeader
      placement='left'
      containerStyle={{
        paddingTop: 40,
        height: "auto",
        backgroundColor: "#fff",
        borderBottomColor: "transparent",
      }}
      {...props}
    />
  )
}

export default Header
