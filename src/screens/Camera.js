import React from 'react'
import {View,StyleSheet,ImageBackground,TextInput,Text,Image,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {RFValue} from 'react-native-responsive-fontsize'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontiso from 'react-native-vector-icons/Fontisto'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MessageItem from '../component/MessageItem'
export default function Camera({navigation})
{
    const profiles = [require('../assets/images/profile/profile1.png'),require('../assets/images/profile/profile2.png'),require('../assets/images/profile/profile3.png'),require('../assets/images/profile/profile4.png'),require('../assets/images/profile/profile5.png')]

    const data = [
        {message:"User Requested Video message",image:require('../assets/images/profile/profile1.png')},
        {message:"User Join",image:require('../assets/images/profile/profile2.png')},
        {message:"How are you?",image:require('../assets/images/profile/profile3.png')}
    ]
    return (
        <View style={style.container}>
            <ImageBackground style={{flex:1}} source={require('../assets/images/camera_bg.png')}>
                <View style={{flex:1,padding:24}}>
                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Feather name="arrow-left" size={RFValue(25,580)} color="white"></Feather>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,display:'flex',flexDirection:'row'}}>
                        <View style={{flex:1}}></View>
                        <View>
                            <TouchableOpacity style={[style.btn,{width:wp('11.11'),height:wp('11.11')}]}>
                                <FontAwesome5 name="user-alt" color="white" size={RFValue(18,580)}></FontAwesome5>
                            </TouchableOpacity>
                            <TouchableOpacity style={[style.btn,{width:wp('11.11'),height:wp('11.11'),marginTop:15}]}>
                                <Feather name="crop" color="white" size={RFValue(18,580)}></Feather>
                            </TouchableOpacity>
                            <TouchableOpacity style={[style.btn,{width:wp('11.11'),height:wp('11.11'),marginTop:15}]}>
                                <IonIcons name="color-wand" color="white" size={RFValue(18,580)}></IonIcons>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                    <View style={{display:'flex',flexDirection:'row',marginBottom:10,alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity style={[style.btn,{marginRight:15}]}>
                            <FontAwesome name="microphone" color="white" size={RFValue(24,580)}></FontAwesome>
                        </TouchableOpacity>
                        <TouchableOpacity style={[style.btn,{backgroundColor:'#F6AA11',marginRight:15,width:wp('21.98'),height:wp('21.98')}]}>
                            <FontAwesome5 name="video" color="white" size={RFValue(43,580)}></FontAwesome5>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.btn}>
                            <AntDesign name="upload" color="white" size={RFValue(24,580)}></AntDesign>
                        </TouchableOpacity>
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
    },
    btn:{
        borderRadius:71,
        backgroundColor:'#0000008F',
        width:wp('17.15'),
        height:wp('17.15'),
        justifyContent:'center',
        alignItems:'center'
    }
})