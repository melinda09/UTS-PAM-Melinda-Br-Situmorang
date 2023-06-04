import React from "react";
import { StyleSheet, Text, View ,SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/ionicons';
import { TextInput, TouchableOpacity } from "react-native-web";

const konfirmasi = ({navigation, route})=> {
  const {asal_kota,kota_tujuan,pilihan,tanggal,jam_berangkat,tiket}=route.params;
  return(
    <SafeAreaView style={styles.background}>
      <View style={styles.box}>
        <Text style={styles.Text}>
          Kapalzy
        </Text>
        <Text style={styles.pemesanan}>
          Informasi Pemesanan
        </Text>
        
        <View style={styles.box2}>
          <Text style={styles.Text3}>{asal_kota}   <Icon name={'arrow-forward'}  size={20} color={'black'} />   {kota_tujuan}</Text>
          <Text style={styles.Text2}>Jadwal Masuk Pelabuhan :</Text>
          <Text style={styles.text4}>{tanggal}</Text>
          <Text style={styles.text4}>{jam_berangkat}</Text>
          <Text style={styles.Text2}>Pilihan :</Text>
          <Text style={styles.text4}>{pilihan}</Text>
          <Text style={styles.text4}>______________________________________</Text>
          <Text style={styles.text4}> Jumlah Tiket : {tiket} </Text>
        </View>

        <Text style={styles.identitas}>
          Nama Lengkap
        </Text>

        <View style={styles.input}>
          <TextInput style={styles.TextInput} placeholder="Nama Lengkap" ></TextInput>
        </View>

        <Text style={styles.identitas}>
          Identitas
        </Text>

        <View style={styles.input}>
          <TextInput style={styles.TextInput} placeholder="Pria" ></TextInput>
        </View>

        <Text style={styles.identitas}>
          umur
        </Text>

        <View style={styles.input}>
          <TextInput style={styles.TextInput} placeholder="Umur" ></TextInput>
        </View>

        <TouchableOpacity style={styles.tombol} onPress={() => navigation.navigate('Pesanan', {
              asal_kota : asal_kota,
              kota_tujuan : kota_tujuan,
              pilihan : pilihan,
              tanggal : tanggal,
              jam_berangkat : jam_berangkat,
              tiket : tiket,
            })}>
          <Text style={styles.BuatTiket} >
            Submit
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
    marginTop:"70",
    fontWeight :"bold",
    fontSize : 40,
    marginBottom : 20,
  },
  pemesanan :{
    alignSelf :'flex-start',
    fontWeight :'bold',
    fontSize :12,
    paddingLeft : 8,
  },
  input :{
    alignSelf :'flex-start',
    marginBottom : 8,
    fontWeight :'bold',
    fontSize :12,
    borderWidth:1,
    borderRadius : 3,
    backgroundColor : "#f0f0f0",
    width :250,
    marginLeft : 6,
    height :28,
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
    backgroundColor :"#ee9e54",
    height : 45,
    width : 200,
    borderRadius :5,
    marginTop :20,
    paddingHorizontal : 10,
  },
  BuatTiket :{
    color : 'white',
    fontSize : 20,
    fontWeight : 'bold',
    alignSelf :'center',
    padding :8
  },
  identitas : {
    alignSelf :'flex-start',
    fontSize :10,
    fontWeight : 500,
    paddingLeft : 5,
    marginBottom :5,
  },
  TextInput :{
    marginLeft : 10,
  }
  
})

export default acc;