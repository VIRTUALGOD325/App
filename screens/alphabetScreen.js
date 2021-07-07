import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import {SafeAreaProvider} from 'react-native-safe-area-context'

import MyHeader from '../components/MyHeader'

export default class AlphabetScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <SafeAreaProvider>
      <MyHeader title='ALPHABET'/>
      <ScrollView>
        <View style={styles.numberContainer}>
          <View style={styles.rowcontainer}>
            <TouchableOpacity style={styles.button}>
              <Image source={require('../assets/Aa.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image source={require('../assets/2.png')} style={styles.imageIcon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image source={require('../assets/3.png')} style={styles.imageIcon}/>
            </TouchableOpacity>
          </View>
          <View style={styles.rowcontainer}>
            <TouchableOpacity style={styles.button}>
              <Image source={require('../assets/4.png')} style={styles.imageIcon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image source={require('../assets/5.png')} style={styles.imageIcon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image source={require('../assets/6.png')} style={styles.imageIcon}/>
            </TouchableOpacity>
          </View>
          <View style={styles.rowcontainer}>
            <TouchableOpacity style={styles.button}>
              <Image source={require('../assets/7.png')} style={styles.imageIcon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image source={require('../assets/8.png')} style={styles.imageIcon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image source={require('../assets/9.png')} style={styles.imageIcon}/>
            </TouchableOpacity>
          </View>
          <View style={styles.rowcontainer}>
            <TouchableOpacity style={styles.button}>
              <Image source={require('../assets/0.png')} style={styles.imageIcon}/>
            </TouchableOpacity>
          </View>    
        </View>
      </ScrollView>  
      </SafeAreaProvider>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    },
  numberContainer:{
    
    },
  rowcontainer:{
    flexDirection:'row',
    },
  imageIcon:{
    width:90,
    height:120  
    }, 
  button:{
    borderWidth:3,
    margin:5,
    padding:2,
    borderRadius:20,
    backgroundColor:'lightyellow'
    } 
}) 