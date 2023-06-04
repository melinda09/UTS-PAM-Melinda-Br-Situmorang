import React,{Component} from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './home'
import Bikin from './bikin_tiket'
import Tiket from './acc_tiket'
import Pesanan from './pesanan_saya';
const Stack = createStackNavigator();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  };
  render(){
    return (
      
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Bikin" component={Bikin}/>
          <Stack.Screen name="Tiket" component={Tiket}/>
          <Stack.Screen name="Pesanan" component={Pesanan}/>
        </Stack.Navigator>

    )
  }
}

export default App;