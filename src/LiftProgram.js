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

// import CommonParent from './src/Components/CommonParent';
// import { rightNavIcon, informationIcon } from './src/Utils/ThemeImage';
import _ from 'lodash'
let keyPressArrayGlobal = []
let liftOrdersReset =[{
  floorIndex : 0,
  floor : 'ground',
  keys :[{
    key1For : 'down',
    key1Val : 'GFloor',
    isPressed :  false},
  ]
  
},
{
  floorIndex : 1,
  floor : 'first',
  keys :[{
    key1For : 'up',
    key1Val : '1 Up',
    isPressed :  false},
    {
      key2For : 'down',
      key2Val : '1 down',
      isPressed :  false},
  ]
  
},
{
  floorIndex : 2,
  floor : 'second',
  keys :[{
    key1For : 'up',
    key1Val : '2 Up',
    isPressed :  false},
    {
      key1For : 'down',
      key1Val : '2 down',
      isPressed :  false},
  ]
  
},
{
  floorIndex : 3,
  floor : 'second',
  keys :[{
    key1For : 'up',
    key1Val : '3 Up',
    isPressed :  false},
    {
      key1For : 'down',
      key1Val : '3 down',
      isPressed :  false},
  ]
  
},
{
  floorIndex : 4,
  floor : 'second',
  keys :[{
    key1For : 'up',
    key1Val : '4 Up',
    isPressed :  false},
    {
      key1For : 'down',
      key1Val : '4 down',
      isPressed :  false},
  ]
  
},
{
  floorIndex : 5,
  floor : 'second',
  keys :[{
    key1For : 'up',
    key1Val : '5 Up',
    isPressed :  false},
    {
      key1For : 'down',
      key1Val : '5 down',
      isPressed :  false},
  ]
  
},
{
  floorIndex : 6,
  floor : 'second',
  keys :[{
   
    
      key1For : 'down',
      key1Val : '6 down',
      isPressed :  false},
  ]
  
},


]
let liftOrders =[{
  floorIndex : 0,
  floor : 'ground',
  keys :[{
    key1For : 'down',
    key1Val : 'GFloor',
    isPressed :  false},
  ]
  
},
{
  floorIndex : 1,
  floor : 'first',
  keys :[{
    key1For : 'up',
    key1Val : '1 Up',
    isPressed :  false},
    {
      key2For : 'down',
      key2Val : '1 down',
      isPressed :  false},
  ]
  
},
{
  floorIndex : 2,
  floor : 'second',
  keys :[{
    key1For : 'up',
    key1Val : '2 Up',
    isPressed :  false},
    {
      key1For : 'down',
      key1Val : '2 down',
      isPressed :  false},
  ]
  
},
{
  floorIndex : 3,
  floor : 'second',
  keys :[{
    key1For : 'up',
    key1Val : '3 Up',
    isPressed :  false},
    {
      key1For : 'down',
      key1Val : '3 down',
      isPressed :  false},
  ]
  
},
{
  floorIndex : 4,
  floor : 'second',
  keys :[{
    key1For : 'up',
    key1Val : '4 Up',
    isPressed :  false},
    {
      key1For : 'down',
      key1Val : '4 down',
      isPressed :  false},
  ]
  
},
{
  floorIndex : 5,
  floor : 'second',
  keys :[{
    key1For : 'up',
    key1Val : '5 Up',
    isPressed :  false},
    {
      key1For : 'down',
      key1Val : '5 down',
      isPressed :  false},
  ]
  
},
{
  floorIndex : 6,
  floor : 'second',
  keys :[{
   
    
      key1For : 'down',
      key1Val : '6 down',
      isPressed :  false},
  ]
  
},


]
let currThis = ''
class LiftProgram extends Component{
    constructor(props) {        
        super(props);
        
        currThis = this;
        this.state = { 
            liftPosOrders : [],
            liftCurrPos : 0,
            keyPressArray : [] ,  
            movingPos :[]   
        }
    }

    subStationTopSection(){
      return(
          <View style={{flex:0.5,backgroundColor:'#fab'}}>
          {this.topSegmentTab()}
          {this.reactiveProgressCircle()}
          </View>
        
      )
    }
    componentDidMount(){
      this.setState({
        liftPosOrders  : liftOrders
      })
    }
  
    addItemToArray (index,clickedItem,moveTo){
    
      let {keyPressArray}= this.state;
      let liftOrdersFull= this.state.liftPosOrders;
      let ifSameFloor = index == this.state.liftCurrPos ? true : false
      if(!ifSameFloor){
        _.each(liftOrdersFull,function(item){
        
          if(item.floorIndex == index){
            _.each(item.keys,function(i){
  
              if(moveTo == 'up'){
                if("key1For" in i){
                  if(i.key1For == moveTo){
                    i.isPressed = !i.isPressed
                  }
                }
              }else{
                if("key2For" in i){
                  if(i.key2For == moveTo){
                    i.isPressed = !i.isPressed
                  }
              }
              }
            })
            
           
          }
  
        })
        this.setState({liftOrders : liftOrders});
        let keyPressObject = {'floorLevel' : index,'moveTo' : moveTo};
        let checkIfAreadyExists = _.filter(keyPressArrayGlobal,{'floorLevel' : index,'moveTo':moveTo }).length
  
       if(!checkIfAreadyExists){
        keyPressArrayGlobal.push(keyPressObject);
       }
       else {
     
        var index = keyPressArrayGlobal.findIndex(obj => obj.floorLevel==index && obj.moveTo == moveTo);
        keyPressArrayGlobal.splice(index,1)
       }
       let tempArray =[]
        for(let i =0;i <keyPressArrayGlobal.length;i++){
          tempArray.push(keyPressArrayGlobal[i].floorLevel)
        }
        this.setState({keyPressArray : keyPressArrayGlobal , floorsToHighLight :tempArray })

      }

  
    }

    setBG(index,item,moveTo){
      let filterVal = []
      if(moveTo == 'up'){
         filterVal= _.filter(item,{key1For:'up'})
         if(index == 1){
         }
      }else {

        filterVal= _.filter(item,{key2For:'down'})
        if(index == 1){
        }
      }
      if(filterVal.length){
       return filterVal[0].isPressed  ? 'green' : 'grey' }
       else {
         return 'grey'
       }
    
     
    }
    liftKeyArrayLayout(index,item,isLastIndex){
  
      if(index == 0 || isLastIndex){
        let setAccLable = index.toString()+'_key'
        return(<TouchableOpacity accessibilityLabel={setAccLable} onPress={()=>{this.addItemToArray(index,item,index == 0 ? 'down' : 'up')}} style={styles.keySectionLayoutTop}>
          <View style={{width:'100%',height:'90%',backgroundColor:this.setBG(index,item.keys,index == 0 ? 'down' : 'up'),justifyContent:'center',alignItems:'center'}}>
          <Text>{ index == 0 ? 'Ground Floor' : index}</Text>
          </View>
        </TouchableOpacity>)
      }else {
        let setAccLable1 = index.toString()+'_key_up';
        let setAccLable2 = index.toString()+'_key_down';

        return(<View style={styles.keySectionLayoutInbetween}>
          <TouchableOpacity 
          accessibilityLabel={setAccLable1}
          onPress={()=>{
             this.addItemToArray(index,item, 'up')}
            } style={styles.splitKeyStyle1}>
            <Text>{index} UP</Text>
          </TouchableOpacity>
          <TouchableOpacity
           accessibilityLabel={setAccLable2}
            onPress={()=>{
            // this.addItemToArray(index,item,index < liftCurrPos ? 'down' : 'up')}
            this.addItemToArray(index,item, 'down')}
            }  style={styles.splitKeyStyle1}>
          <Text>{index} Down</Text>
          </TouchableOpacity>
        </View>)
      }
    

    }
    checkIfSelected(floorIndex){
      let {keyPressArray}= this.state;
      let ifSelectedFloor = _.filter(keyPressArray,{floorLevel : floorIndex}).length
      if(ifSelectedFloor){return true }else{return false}
    }
    liftMovingLayout(index,item,isLastIndex){

          return(<View key={""} style={{height:60,backgroundColor: item.floorIndex == this.state.liftCurrPos ? 'green': '#fab',borderWidth:this.checkIfSelected(item.floorIndex) ? 10 :2,width:'100%',justifyContent:'center',alignItems:'center',borderColor:this.checkIfSelected(item.floorIndex) ? 'red' :'black'}}>
                    <Text style={{fontSize:24,color:item.floorIndex == this.state.liftCurrPos ? 'white': 'black'}}>{item.floorIndex }</Text>
                </View>)
      
     }
     onEndReached(){
       console.log("onEnd Reached")
      
     }
    liftMovingSection(){
      return(
        <View style={styles.movingContainer}>
             <FlatList
             onEndReached={this.onEndReached}
              ref={ref => {
              this.flatListRef = ref;
            }}
             inverted = {true}
              data={this.state.liftPosOrders}
              extraData={this.state}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              renderItem={({ item, index }) => {
                let isLastIndex = index == this.state.liftPosOrders.length - 1 ? true : false
    
                return this.liftMovingLayout(
                    index,
                    item,
                    isLastIndex);
              }}
              keyExtractor={(item, index) => index.toString() }
            />
        </View>
      )
      
    }
    liftKeysSection(){
      return(
        <View style={styles.keySectionContainer}>
             <FlatList
             inverted
            //  numColumns={2}
              data={this.state.liftPosOrders}
              extraData={this.state}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              renderItem={({ item, index }) => {
                let isLastIndex = index == this.state.liftPosOrders.length - 1 ? true : false
    
                return this.liftKeyArrayLayout(
                    index,
                    item,
                    isLastIndex);
              }}
              keyExtractor={(item, index) => index.toString() }
            />
        </View>
      )
      
    }
    liftPositionIndicator(){
      return(
        <View style={{backgroundColor:'green',paddingTop:10,flexDirection: 'column',flex:0.5}}>
             <FlatList
              data={this.state.liftPosOrders}
              extraData={this.state}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              renderItem={({ item, index }) => {
                let isLastIndex = index == this.state.liftPosOrders.length - 1 ? true : false
    
                return this.liftMovingLayout(
                    index,
                    item,
                    isLastIndex);
              }}
              keyExtractor={(item, index) => index}
            />
        </View>
      )
    }
    liftSegment(){
        return(
            <View  accessibilityLabel="~app-root" style={[styles.mainContainer, ]}>

            {this.liftMovingSection()}
            {this.liftKeysSection()}
           
          </View>
        )
    }

    reOrderArray(){
      let {keyPressArray,liftCurrPos} = this.state;
      let arrayOfFloors =[]
      for(let i =0; i < keyPressArray.length;i++){
        arrayOfFloors.push(keyPressArray[i].floorLevel)
      }
      console.log("arrayOfFloors :",arrayOfFloors)
      let firstPress=keyPressArray[0];
      let setPrimeMovingDirection  = liftCurrPos < firstPress.floorLevel ? 'up': 'down';
      let firstDirectionArray = [];
      let firstDirectionRemainingArray = [];
      let secondDirectionArray = [];
      let totalOrderflow = []
      if(setPrimeMovingDirection == 'up'){

      let filterAllMovingUp = _.filter(keyPressArray,{moveTo:'up'});
      let filterAsc_ = _.orderBy(filterAllMovingUp,['floorLevel'],['asc'])
      for(let i = 0;i <filterAsc_.length;i++){
        if(filterAsc_[i].floorLevel> liftCurrPos){firstDirectionArray.push(filterAsc_[i].floorLevel)}
        else {firstDirectionRemainingArray.push(filterAsc_[i].floorLevel)}
      }
      let filterAllMovingDown = _.filter(keyPressArray,{moveTo:'down'});
      let filterDsc_ = _.orderBy(filterAllMovingDown,['floorLevel'],['desc']);
      for(let j =0; j<filterDsc_.length;j++){
        secondDirectionArray.push(filterDsc_[j].floorLevel)
      }

      } 
      if(setPrimeMovingDirection == 'down'){

        let filterAllMovingDown = _.filter(keyPressArray,{moveTo:'down'});
        let filterDsc__ = _.orderBy(filterAllMovingDown,['floorLevel'],['desc'])
        for(let i = 0;i <filterDsc__.length;i++){
          if(filterDsc__[i].floorLevel < liftCurrPos){firstDirectionArray.push(filterDsc__[i].floorLevel)}
          else {firstDirectionRemainingArray.push(filterDsc__[i].floorLevel)}
        }
        let filterAllMovingUp = _.filter(keyPressArray,{moveTo:'up'});
        let filterAsc_ = _.orderBy(filterAllMovingUp,['floorLevel'],['asc']);
        for(let j =0; j<filterAsc_.length;j++){
          secondDirectionArray.push(filterAsc_[j].floorLevel)
        }
        }
        totalOrderflow = firstDirectionArray.concat(secondDirectionArray.concat(firstDirectionRemainingArray))
        
        currThis.setState({movingPos: totalOrderflow})
     let countOf = 0

     var refreshId = setInterval(function() {
      currThis.setState({liftCurrPos: totalOrderflow[countOf],})
      countOf++;
      if (countOf == totalOrderflow.length) {
        clearInterval(refreshId);
      }
    }, 1000);
    console.log("totalOrderflow :",totalOrderflow)
   
    keyPressArrayGlobal=[]
   


    }
    startLiftRunButton(){
      return(<View
     
        style={{flex:0.15,width:'100%',padding:10,justifyContent:'center',alignItems:'center',flexDirection:'row',padding:5,justifyContent:'space-around',}}>
        <TouchableOpacity  accessibilityLabel="startrunbutton" onPress={()=>{this.reOrderArray()}}  style={{backgroundColor:'brown',width:'40%',height:'90%',borderRadius:20,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:24,color:'white'}}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity  accessibilityLabel="showresults"
        onPress={()=>{ this.props.navigation.navigate('LiftMovingPositions',{"positions" :this.state.movingPos
        
        })}}
        
         style={{backgroundColor:'brown',width:'40%',height:'90%',borderRadius:20,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:24,color:'white'}}>Results</Text>
        </TouchableOpacity>
      </View>)
    }
 

    render(){

        return <View style={{flex:1}}>
        <SafeAreaView/>
             {this.liftSegment()}
             {this.startLiftRunButton()}
        </View>
    }
}

const styles= StyleSheet.create({
  mainContainer:{  flex: 1.0,backgroundColor:'transparent',flexDirection:'row',justifyContent:'space-around' },
  movingContainer :{backgroundColor:'white',paddingTop:10,flexDirection: 'column',flex:0.2},
  keySectionContainer :{backgroundColor:'white',paddingTop:10,flexDirection: 'column',flex:0.7,},
  keySectionLayoutTop :{height:60,backgroundColor: 'green',borderWidth:2,width:'100%',justifyContent:'center',alignItems:'center'},
  keySectionLayoutInbetween:{height:60,backgroundColor: 'yellow',borderWidth:2,flexDirection:'row',justifyContent:'space-around',alignItems:'center'},
  splitKeyStyle1:{width:'35%',height:'90%',backgroundColor:'green',justifyContent:'center',alignItems:'center',borderRadius:10},
 
})

export default (LiftProgram);