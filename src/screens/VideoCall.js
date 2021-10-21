import React from 'react'
import {View,StyleSheet,ImageBackground,TextInput,Text,Image,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {RFValue} from 'react-native-responsive-fontsize'
import {useSelector} from 'react-redux'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function VideoCall({navigation})
{
    const {role} = useSelector(state=>state.auth)
    return (
        <View style={style.container}>
            <ImageBackground style={{flex:1}} source={require('../assets/images/videocall_bg.png')}>
                <View style={{flex:1,padding:24}}>
                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Feather name="arrow-left" size={RFValue(25,580)} color="white"></Feather>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,display:'flex',flexDirection:'row'}}>
                        <View style={{flex:1}}></View>
                        <View>
                            <Image source={role == 'influencer'?require('../assets/images/profile/influencer_me.png'):require('../assets/images/profile.png')} style={{width:wp('16.18'),height:wp('21.98'),borderRadius:5}}></Image>
                        </View>
                    </View>
                    <Text style={style.time}>05:30</Text>
                    <View style={{display:'flex',flexDirection:'row',marginBottom:10,alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity style={style.btn}>
                            <Image source={require('../assets/images/flip.png')} style={{width:RFValue(33,580),height:RFValue(33.580)}}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.btn}>
                            <FontAwesome5 name="video" size={RFValue(18,580)} color="white"></FontAwesome5>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.btn}>
                            <FontAwesome5 name="microphone-alt-slash" size={RFValue(25,580)} color="white"></FontAwesome5>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.btn}>
                            <MaterialCommunityIcons name="phone-hangup" size={RFValue(36,580)} color="white"></MaterialCommunityIcons>
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
        backgroundColor:'#00000099',
        width:wp('13.52'),
        height:wp('13.52'),
        justifyContent:'center',
        alignItems:'center',
        marginRight:10
    },
    time:{
        fontFamily:'Quicksand-Medium',
        fontSize:RFValue(26,580),
        color:'white',
        textAlign:'center',
        marginBottom:20
    }
})