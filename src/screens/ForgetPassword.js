import React,{useState} from 'react';
import {View,ImageBackground,StyleSheet,KeyboardAvoidingView,Image,TouchableOpacity,Text,TextInput,ScrollView} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen' 

export default function ForgetPassword({navigation})
{
    return (
        <View style={style.container}>
            <KeyboardAvoidingView style={{height:hp('100%')}} behavior="padding">
                <ScrollView>
                    <View style={{marginBottom:24}}>
                        <View style={style.header}>
                            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                                <Feather name="arrow-left" size={RFValue(25,580)} color="white"></Feather>
                            </TouchableOpacity>
                            <Text style={style.headertitle}>Forgot Password</Text>
                            <View style={{width:RFValue(25,580)}}></View>
                        </View>
                        <TouchableOpacity style={style.logo}>
                            <Image source={require('../assets/images/forgot.png')} style={style.logoimg}></Image>
                        </TouchableOpacity>
                        <Text style={style.description}>
                        Enter your email below to reset {'\n'}
                            password for your account
                        </Text>
                        <View style={style.inputcontainer}>
                            <EvilIcons name="envelope" size={RFValue(25,580)} color="#D5D5D5"></EvilIcons>
                            <TextInput placeholder="Email" placeholderTextColor="white" style={style.input}></TextInput>
                        </View>
                        <TouchableOpacity style={style.btncontainer}>
                            <View style={{width:RFValue(16,580)}}></View>
                            <Text style={style.btntext}>Reset Password</Text>
                            <Feather name="arrow-right" color="white" size={RFValue(16,580)}></Feather>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:'#101010'
    },
    logo:{
        width:wp('32%'),
        height:wp('32%'),
        alignSelf:'center',
        marginTop:hp('4%'),
        borderRadius:wp('16%'),
        backgroundColor:'#F6AA11',
        justifyContent:'center',
        alignItems:'center'
    },
    logoimg:{
        width:wp('17%'),
        height:wp('18%')
    },  
    description:{
        fontSize:RFValue(16,580),
        color:'#C7C7C7',
        textAlign:'center',
        marginTop:hp('4.5%'),
        marginBottom:hp('4.1%'),
        fontFamily:'Montserrat-Regular'
    },
    header:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    headertitle:{
        fontSize:RFValue(22,580),
        fontFamily:'Quicksand-Medium',
        color:'white'
    },
    inputcontainer:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#252525',
        shadowColor:'black',
        shadowOpacity:0.16,
        shadowRadius:5,
        shadowOffset:{
            height:3,
            width:0
        },
        borderRadius:32,
        elevation:1,
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:15,
        paddingRight:15,
        alignItems:'center',
        marginBottom:28,
        marginLeft:10,
        marginRight:10
    },
    input:{
        fontSize:RFValue(16,580),
        marginLeft:15,
        flex:1,
        fontFamily:'Montserrat-Regular'
    },
    btncontainer:{
        display:'flex',
        justifyContent:'space-between',
        padding:15,
        backgroundColor:'#F6AA11',
        borderRadius:35,
        flexDirection:'row',
        alignItems:'center'
    },
    btntext:{
        color:'white',
        fontSize:RFValue(18,580),
        fontFamily:'Montserrat-Medium'
    }
})