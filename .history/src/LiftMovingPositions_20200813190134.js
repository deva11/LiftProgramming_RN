import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
class LiftMovingPositions extends Component{
    constructor(props) {        
        super(props);
        
        currThis = this;
        this.state = { 
            liftPosOrders : [],
            
        }
    }



    liftMovingLayout(){
        let {params} = this.props.route;
       
        let pos = params['positions'];
        let components = []
        if(pos.length){
           
        let colors = ["transparent", "transparent","transparent"]
        
        for(let i = 0; i< pos.length; i++){
           
            let isLastItem = i == pos.length-1 ? true : false;
            let subHeading = i==0 ? 'Start' : isLastItem ? 'End' : '';
            components.push(
               <View>
               <View key= {i.toString()} style={styles.movingLayoutContainer}>
                <View style={[styles.layoutSize,{backgroundColor:colors[i]}]}>
                <Text style={styles.floorText}>{pos[i]} Floor</Text>
                </View>
                {!isLastItem && <View style={styles.layoutSize2}>
                <Image  style={styles.arrowImage} source={require('./Images/next.png')}></Image>
                </View>}
               
                </View>
                    {i==0 || isLastItem ? <View style={{marginLeft:isLastItem ? 0: 10}}><Text>{subHeading}</Text></View>  :null}
               </View>
                
          
            )
        }

        }
        else {
            components = <View/>
        }
        
        return(
            <ScrollView horizontal={true}>
                <View style ={{flexDirection:'row'}}>
                {components}
                </View>
             </ScrollView>)
       
      
    }
    render(){

        return <View style={{flex:1}}>
        <SafeAreaView/>
           {this.liftMovingLayout()}
            
        </View>
    }
}

const styles= StyleSheet.create({
      
    movingLayoutContainer :{width:140,height:100,padding:5,flexDirection:'row',alignItems:'center'},
    floorText:{fontWeight:'500',fontSize:20},
    arrowImage:{width:35,height:35},
    layoutSize :{width:'50%',height:'50%',justifyContent:'center',alignItems:'center',},
    layoutSize2:{width:'50%',height:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'transparent'}
  })

export default (LiftMovingPositions);