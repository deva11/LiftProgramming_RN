import * as React from 'react';
import { Button, View,TouchableOpacity ,Text,Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LiftProgram from './src/LiftProgram'
import LiftMovingPositions from './src/LiftMovingPositions'
function LiftProgramPage({route, navigation }) {
  global.navigation = navigation
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LiftProgram navigation ={navigation}/>
    </View>
  );
}
function LiftDetailsPage({route, navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LiftMovingPositions navigation={navigation} route ={route}/>
    </View>
  );
}


const Stack = createStackNavigator();



const StackContainer = ({ initialRoute }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>      
       
         <Stack.Screen name="LiftProgram" component={LiftProgramPage}  options={{
           headerStyle: {
            backgroundColor: '#fab',
          },}} />
         <Stack.Screen name="LiftMovingPositions" component={LiftDetailsPage} 
            options={{
           headerStyle: {
            backgroundColor: '#CCC000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
              headerLeft: () => (
                      <TouchableOpacity onPress={()=>{navigation.goBack(null)}} style={{height:40,width:60,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'white',fontWeight:'400'}}>Back</Text>
                      </TouchableOpacity>
                  ),
                   }} 

         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackContainer