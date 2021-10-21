import React from 'react'
import {View,StyleSheet,ImageBackground,TextInput,Text,Image,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {RFValue} from 'react-native-responsive-fontsize'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontiso from 'react-native-vector-icons/Fontisto'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MessageItem from '../component/MessageItem'
export default function VideoView({navigation})
{

    return (
        <View style={style.container}>
            <ImageBackground style={{flex:1}} source={require('../assets/images/videoback.png')}>
                <View style={{flex:1,padding:24}}>
                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Feather name="arrow-left" size={RFValue(25,580)} color="white"></Feather>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome name="heart" size={RFValue(25,580)} color="#F6AA11"></FontAwesome>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <TouchableOpacity style={{alignSelf:'center'}}>
                            <Feather name="play-circle" color="white" size={RFValue(66,580)}></Feather>
                        </TouchableOpacity>
                    </View>
                    <View style={{display:'flex',flexDirection:'row',marginBottom:10,alignItems:'center'}}>
                        <Image source={require('../assets/images/profile/loazia.png')} style={style.profile}></Image>
                        <Text style={style.name}>Maria Marin</Text>
                    </View>
                    
                </View>
            </ImageBackground>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1
    },
    profile:{
        width:wp('11.6'),
        height:wp('11.6'),
        borderRadius:wp('5.8'),
        marginRight:3,
        position:'relative'
    },
    name:{
        fontSize:RFValue(16,580),
        fontFamily:'arial',
        color:'white',
        fontWeight:'bold',
        marginLeft:5
    }
})