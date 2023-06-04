import React ,{useState} from "react";
import { StyleSheet, Text, View ,Picker, SafeAreaView, TextInput, TouchableOpacity, ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/ionicons';

const home =(props)=> {

  const [number, onChangeNumber] = React.useState(null);
  const [Pelabuhan, onChangePelabuhan] = useState("Liyue");
  const [kota_tujuantujuan, onChangeTujuan] = useState("Kamal");
  const [pilihan, onChangeLayanan] = useState("Express");
  const [jam_berangkat, onChangeJam] = useState("12:00");
  const [tanggal, setTanggal] = useState("2022/03/17");
  
    return(
      <SafeAreaView style={styles.background}>
        <View style={styles.box}>
            <Text style={styles.Text}>
              Kapalzy
            </Text>

            <Text style={styles.Text2}>
              Pelabuhan Awal
            </Text>

            <View style={styles.input}>
              <Icon name={'boat'} color={'#00579c'}  size={28}/>

              <Picker
                selectedValue={Pelabuhan}
                style={styles.TextInput}
                onValueChange={(itemValue, itemIndex)=> onChangePelabuhan(itemValue)}>
                <Picker.Item label="Bakauheni" value="Bakauheni"  />
                <Picker.Item label="Liyue" value="Liyue" />
                <Picker.Item label="Merak" value="Merak" />
                <Picker.Item label="Surindo" value="Surindo" />
              </Picker>

            </View>

            <Text style={styles.Text2}>
              Pelabuhan Tujuan
            </Text>

            <View style={styles.input}>
              <Icon name={'boat'} color={'#00579c'} size={28}/>
              <Picker
                selectedValue=kota_tujuan}
                style={styles.TextInput}
                onValueChange={(itemValue, itemIndex)=> onChangeTujuan(itemValue)}
              >
                <Picker.Item label="Pulau Kapuk" value="Pulau Hilang" />
                <Picker.Item label="Maleh" value="Maleh" />
              </Picker>
            </View>

            <Text style={styles.Text2}>
              Kelas Pelayanan
            </Text>
            <View style={styles.input}>
              <Icon name={'man'} color={'#00579c'}  size={28}/>
              <Picker
                selectedValue={pilihan}
                style={styles.TextInput}
                onValueChange={(itemValue, itemIndex)=> onChangeLayanan(itemValue)}
              >
                <Picker.Item label="Standar" value="Standar" />
                <Picker.Item label="Express" value="Express" />
              </Picker>
            </View>

            <Text style={styles.Text2}>
              Tanggal masuk Pelabuhan
            </Text>
            <View style={styles.input}>
              <Icon name={'today'} color={'#00579c'} size={28}/>
              <TextInput style={styles.TextInput} 
                placeholder='masukan tanggal' 
                defaultValue={tanggal} 
                onChange={tanggal=>setTanggal(tanggal)}/>
            </View>

            <Text style={styles.Text2}>
              Jam masuk Pelabuhan 
            </Text>
            <View style={styles.input}>
              <Icon name={'time'} color={'#00579c'} size={28}/>
              <Picker
                selectedValue={Jam}
                style={styles.TextInput}
                onValueChange={(itemValue, itemIndex)=> onChangeJam(itemValue)}
              >
                <Picker.Item value="08:00" label="08:00" />
                <Picker.Item value="12:00" label="12:00" />
                <Picker.Item value="15:00" label="15:00" />
                <Picker.Item value="18:00" label="18:00" />
                <Picker.Item value="21:00" label="21:00" />
              </Picker>
            </View>

            <Text style={styles.Text2}>
              Jumlah Tiket
            </Text>
            <View style={styles.input}>
              <Icon name={'pricetags'} color={'#00579c'} size={28}/>
              <TextInput
                style={styles.TextInput}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Masukan Jumlah Tiket"
                keyboardType="numeric"
              />
              
            </View>

            <TouchableOpacity style={styles.tombol} 
              onPress={() => props.navigation.push('Buat',{
              asal_kota : Pelabuhan,
              kota_tujuan : kota_tujuan,
              pilihan : pilihan,
              tanggal : tanggal,
              jam_berangkat : Jam,
              tiket : number,
            })} >
              <Icon name={'search'}  size={28} color={'white'} />
              <Text style={styles.BuatTiket}>
                Bikin Tiket
              </Text>
            </TouchableOpacity>
          </View>

      </SafeAreaView>
    );

};

const styles = StyleSheet.create({
  background : {
    backgroundColor: "white",
    flex : 1,
    alignItems:"center",
  },
  header:{
    backgroundColor: "#00579c",
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
    marginBottom : 50,
  },
  input :{
    flexDirection : "row",
    height : 30,
    width : 270,
    marginTop : 10
  },
  Text2 :{
    alignSelf :'flex-start',
  },
  TextInput :{
    borderWidth :1,
    height : 30,
    marginLeft : 10,
    width : 250,
    borderRadius : 5,
    backgroundColor :"#eff4f4",
    paddingLeft: 15,
    fontWeight : 'bold'
  },
  usia:{
    fontSize : 15,
    fontWeight :"bold",
    
  },
  TextUsia :{
    height : 30,
    width : 280,
    borderRadius : 5,
    backgroundColor :"#eff4f4",
    marginTop :20,
    alignItems : "center",
    fontWeight : 'bold'
  },
  tombol :{
    backgroundColor :"#ee9e54",
    height : 45,
    width : 200,
    borderRadius :5,
    marginTop :20,
    flexDirection: 'row',
    alignItems : 'center',
    paddingHorizontal : 10
  },
  BuatTiket :{
    color : 'white',
    fontSize : 20,
    marginLeft : 20,
    fontWeight : 'bold',
  },
})

export default home;