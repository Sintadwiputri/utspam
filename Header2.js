import React, {Component,View,Button,StyleSheet,Text} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { render } from "react-dom";

const Header=(navigation)=>{

      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
      var day = new Date().getDay();
      return (
        <View className='App-Header' style={styles.Header}>
          <View style={styles.title}>
            <Text id='title' style={styles.title}>W E E K L Y   P L A N N E R   D E T A I L S<FontAwesome5/></Text>
          </View>
          
          
        </View>

      )

}


export default Header;

const styles = StyleSheet.create({

  Header:{
    backgroundColor: '#ffc0cb',
    height:50,
   

  },


title:{
    fontSize:22,
    padding:5,
},



},


);

