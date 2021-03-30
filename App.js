import * as React from "react"
import {View,TouchableOpacity,Text} from "react-native"
import {Audio} from "expo-av"

class Abc extends React.Component{
  Btn(){
    Audio.Sound.createAsync(
{uri:"http://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg"},
{shouldPlay:true}

    )
  }

  Nt(){
    Audio.Sound.createAsync(
{uri:"http://codeskulptor-demos.commondatastorage.googleapis.com/descent/background%20music.mp3"},
{shouldPlay:true}

    )
  }

  Asp(){
    Audio.Sound.createAsync(
{uri:"http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/intromusic.ogg"},
{shouldPlay:true}

    )
  }

Gn(){
    Audio.Sound.createAsync(
{uri:"http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/extralife.ogg"},
{shouldPlay:true}

    )
  }

  Okj(){
    Audio.Sound.createAsync(
{uri:"http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.wav"},
{shouldPlay:true}

    )
  }



  render(){
    return(
      <View>
<TouchableOpacity style={{backgroundColor:"gold",width:200,height:40,borderRadius:20,marginLeft:80,marginBottom:70,textAlign:"center"}}
onPress={this.Btn}>
<Text style={{fontSize:30,fontFamily:"fantasy",color:"white"}}>
Sound 1
</Text>
</TouchableOpacity>

<TouchableOpacity style={{backgroundColor:"orange",width:200,height:40,borderRadius:20,marginLeft:80,marginBottom:70,textAlign:"center"}}
onPress={this.Nt}>
<Text style={{fontSize:30,fontFamily:"fantasy",color:"white"}}>
Sound 2
</Text>

</TouchableOpacity>

<TouchableOpacity style={{backgroundColor:"coral",width:200,height:40,borderRadius:20,marginLeft:80,marginBottom:70,textAlign:"center"}}
onPress={this.Asp}>
<Text style={{fontSize:30,fontFamily:"fantasy",color:"white"}}>
Sound 3
</Text>

</TouchableOpacity>

<TouchableOpacity style={{backgroundColor:"crimson",width:200,height:40,borderRadius:20,marginLeft:80,marginBottom:70,textAlign:"center"}}
onPress={this.Gn}>
<Text style={{fontSize:30,fontFamily:"fantasy",color:"white"}}>
Sound 4
</Text>

</TouchableOpacity>

<TouchableOpacity style={{backgroundColor:"red",width:200,height:40,borderRadius:20,marginLeft:80,marginBottom:70,textAlign:"center"}}
onPress={this.Okj}>
<Text style={{fontSize:30,fontFamily:"fantasy",color:"white"}}>
Sound 5
</Text>

</TouchableOpacity>
      </View>
    )
  }
}
export default Abc