import React, {View,StyleSheet,Text} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

const Header=(navigation)=>{
      return (
        <View className='App-Header' style={styles.Header}>
          <View style={styles.title}>
            <Text id='title' style={styles.title}>W E E K L Y   P L A N N E R<FontAwesome5/></Text>
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

