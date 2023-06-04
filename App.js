import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React,{Component} from 'react'

import Pesanan from './screens/pesanan-saya'
import Bikin from './screens/bikin_tiket'
import Stack from './screens/stack'
import Pembatalan from './screens/pembatalan';
import Tiket from './screens/acc_tiket'
import Lainnya from './screens/profil'
import Booking from './screens/pesanan2'
const Tab = createBottomTabNavigator();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  };
  render(){
    return (
      <NavigationContainer>

        <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen name="Home" component={Stack} 
            options={{
              headerShown: false,
              tabBarLabel :'Home',
              tabBarIcon:()=>(
                <Icon name={'home'} color={'#00579c'}  size={28}/>
              )
            }}
          />
          <Tab.Screen name="Pesanan Saya" component={Booking}
            options={{
              headerShown: false,
              tabBarLabel :'Pesanan Saya',
              tabBarIcon:()=>(
                <Icon name={'book'} color={'#00579c'} size={28}/>
              )
            }}
          />
          <Tab.Screen name="Pembatalan" component={Pembatalan}
            options={{
              headerShown: false,
              tabBarLabel :'Pembatalan',
              tabBarIcon:()=>(
                <Icon name={'wallet'} color={'#00579c'}  size={28}/>
              )
            }}
          />
          <Tab.Screen name="Profil" component={Lainnya}
            options={{
              headerShown: false,
              tabBarLabel :'Profil',
              tabBarIcon:()=>(
                <Icon name={'person-circle-outline'}  color={'#00579c'} size={28}/>
              )
            }}
          
          />
        </Tab.Navigator>

        

      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;