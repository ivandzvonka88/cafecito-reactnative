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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'
import {useSelector} from 'react-redux'
export default function AudioCall({navigation})
{
    const {role} = useSelector(state=>state.auth)

    return (
        <LinearGradient colors={["#690919","#F6AA11"]} start={{x:0,y:1}} end={{x:0,y:0}} locations={[0,1]} style={style.container}>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Feather name="arrow-left" size={RFValue(25,580)} color="white"></Feather>
                </TouchableOpacity>
            </View>
            <View style={{flex:1,alignItems:'center'}}>
                <View style={style.profileimage}>
                    <Image source={role == 'influencer'?require('../assets/images/profile/influencer_me.png'):require('../assets/images/profile.png')} style={style.image}></Image>
                </View>
                <Text style={style.profiletext}>Mariana Pliego</Text>
                <Text style={[style.profiletext,{fontSize:RFValue(14,580)}]}>You are calling ...</Text>
            </View>
            <Text style={style.time}>05:30</Text>
            <View style={{display:'flex',flexDirection:'row',marginBottom:10,alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity style={style.btn}>
                    <FontAwesome5 name="microphone-alt-slash" size={RFValue(25,580)} color="white"></FontAwesome5>
                </TouchableOpacity>
                <TouchableOpacity style={style.btn} onPress={()=>navigation.navigate('Review')}>
                    <MaterialCommunityIcons name="phone-hangup" size={RFValue(36,580)} color="white"></MaterialCommunityIcons>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        width:wp('100'),
        height:hp('100')
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
    },
    profileimage:{
        width:wp('34.78'),
        height:wp('34.78'),
        borderRadius:wp('17.39'),
        backgroundColor:'#F6AA11',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:wp('28.5'),
        height:wp('28.5'),
        borderRadius:wp('14.25')
    },
    profiletext:{
        fontFamily:'Quicksand-Medium',
        fontSize:RFValue(24,580),
        color:'white',
        textAlign:'center'
    }
})