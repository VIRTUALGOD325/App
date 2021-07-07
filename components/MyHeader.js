import React from 'react'
import {Header} from 'react-native-elements'
import {Image} from 'react-native'

export default class MyHeader extends React.Component{
  render(){
    return(
      <Header
    leftComponent={<Image 
      source={require("../assets/logo.png")}
      style={{width:60,height:60}}
    />}
  centerComponent={{ text: this.props.title, style: { color: 'blue',fontSize:30, fontWeight:'bold'} }}
  backgroundColor="white"
/>

    )
  }
}