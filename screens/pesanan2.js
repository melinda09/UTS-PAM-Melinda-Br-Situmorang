import React,{Component} from "react";
import { StyleSheet, Text, View ,SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/ionicons';
import { TouchableOpacity } from "react-native-web";


const pesanan = ({navigation, route})=> {
    return(
      <SafeAreaView style={styles.background}>
        <View style={styles.box}>
      
          <Text style={styles.Text}>
            Daftar Pesanan
          </Text>
      
          <View style={styles.box2}>
            <Text style={styles.Text3}>Liyue  <Icon name={'arrow-forward'}  size={20} color={'black'} />   Merak</Text>
            <Text style={styles.Text2}>Jadwal Masuk Pelabuhan :</Text>
            <Text style={styles.text4}>2022/03/17</Text>
            <Text style={styles.text4}>08:00 WIB</Text>
            <Text style={styles.Text2}>Pilihan :</Text>
            <Text style={styles.text4}>Express</Text>
            <Text style={styles.text4}>______________________________________</Text>
            <Text style={styles.text4}> Jumlah Tiket : 2 </Text>
          </View>
          
          <TouchableOpacity style={styles.tombol}>
            <Text style={styles.batalkan}>
              Batalkan
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
}
  
const styles = StyleSheet.create({
  background : {
    backgroundColor: "white",
    flex : 1,
    alignItems:"center",
  },
  box:{
    marginTop : 70,
    width :300,
    alignItems : "center",
    backgroundColor :"ffffff",
    paddingVertical : 20,
    paddingHorizontal : 18,
    borderRadius : 5,
    shadowOpacity : 1,
    shadowRadius : 5
  },
  Text : {
    color: "#00579c",
    fontWeight :"bold",
    fontSize : 30,
    marginBottom : 20,
  },
  Text2 :{
    alignSelf :'flex-start',
    marginBottom : 8,
    fontWeight :'bold',
    fontSize :12,
  },
  Text3 :{
    fontSize : 17,
    fontWeight : "bold",
    marginBottom : 10,
    alignSelf :'flex-start',
  },
  box2 :{
    marginTop :20,
    width :250,
    alignItems : "center",
    backgroundColor :"#f0f0f0",
    paddingVertical : 20,
    paddingHorizontal : 18,
    borderRadius : 5,
    borderWidth: 1,
    marginBottom : 10,
  },
  text4 :{
    alignSelf :'flex-start',
    fontSize :12,
  },
  tombol:{
    marginTop :20,
    width :250,
    alignItems : "center",
    backgroundColor :"#f0f0f0",
    paddingVertical : 20,
    paddingHorizontal : 18,
    borderRadius : 5,
    borderWidth: 1,
    marginBottom : 10,
    backgroundColor:"red",
  },
 
  identitas : {
    alignSelf :'flex-start',
    fontSize :10,
    fontWeight : 500,
    paddingLeft : 5,
    marginBottom :5,
  },
  batalkan:{
    color :'white',
    fontWeight:'bold'
  }
})
  
export default pesanan;