import React from 'react';
import {View,ImageBackground,StyleSheet,KeyboardAvoidingView,Image,TouchableOpacity,Text,TextInput,ScrollView} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {RFValue} from 'react-native-responsive-fontsize'
import {useDarkMode} from 'react-native-dark-mode'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen' 
export default function Login({navigation})
{
     
    return (
            <View source={require('../assets/images/bg.png')} style={style.container}>
                <KeyboardAvoidingView style={{height:hp('100%')}} behavior="padding">
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{marginBottom:24}}>
                            <View style={style.header}>
                                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                                    <Feather name="arrow-left" size={RFValue(25,580)} color='white'></Feather>
                                </TouchableOpacity>
                                <Text style={style.headertitle}>Login</Text>
                                <View style={{width:RFValue(25,580)}}></View>
                            </View>
                            <Image source={require('../assets/images/darkmode/carp.png')} style={style.logo}></Image>
                            <View style={{marginTop:hp('7%'),marginBottom:48}}>
                                <View style={style.inputcontainer}>
                                    <EvilIcons name="envelope" size={RFValue(25,580)} color='white'></EvilIcons>
                                    <TextInput placeholder="Email" placeholderTextColor='white' style={style.input}></TextInput>
                                </View>
                                <View style={style.inputcontainer}>
                                    <SimpleLineIcons name="lock" size={RFValue(22,580)} color='white'></SimpleLineIcons>
                                    <TextInput placeholder="Password" placeholderTextColor='white'  style={style.input} secureTextEntry={true}></TextInput>
                                </View>
                                <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>navigation.navigate('Forgot')}>
                                    <Text style={{fontSize:RFValue(16,580),color:'white',fontFamily:'Montserrat-Regular'}}>Forgot Password</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={style.btncontainer} onPress={()=>navigation.navigate('Permission')}>
                                    <View style={{width:RFValue(16,580)}}></View>
                                    <Text style={style.btntext}>Login</Text>
                                    <Feather name="arrow-right" color="white" size={RFValue(16,580)}></Feather>
                                </TouchableOpacity>
                                <View style={{flexDirection:'row',display:'flex',alignItems:'center',marginTop:hp('4%')}}>
                                    <View style={{flex:1,height:1,backgroundColor:'#B6B6B6'}}></View>
                                    <Text style={{fontSize:RFValue(16,580),color:'white',marginLeft:10,marginRight:10,fontFamily:'din1451alt_G'}}>Quick Sign in with</Text>
                                    <View style={{flex:1,height:1,backgroundColor:'#B6B6B6'}}></View>
                                </View>
                                <View style={{flexDirection:'row',marginTop:hp('4%'),justifyContent:'space-between',display:'flex'}}>
                                    <TouchableOpacity style={[style.socialbtncontainer,{marginRight:15,backgroundColor:'#3D5C9E'}]}>
                                        <Text style={[style.btntext,{fontSize:RFValue(14,580),fontFamily:'din1451alt_G'}]}>Sign in with</Text>
                                        <EvilIcons name="sc-facebook" color="white" size={RFValue(25,580)}></EvilIcons>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[style.socialbtncontainer,{backgroundColor:'#F34336'}]}>
                                        <Text style={[style.btntext,{fontSize:RFValue(14,580),fontFamily:'din1451alt_G'}]}>Sign in with</Text>
                                        <AntDesign name="google" color="white" size={RFValue(25,580)}></AntDesign>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#101010',
        padding:24
    },
    logo:{
        width:wp('25%'),
        height:wp('30%'),
        alignSelf:'center',
        marginTop:hp('4%')
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
        elevation:2,
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:15,
        paddingRight:15,
        alignItems:'center',
        marginBottom:16,
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
        alignItems:'center',
        marginTop:hp('4%')
    },
    btntext:{
        color:'white',
        fontSize:RFValue(18,580),
        fontFamily:'Montserrat-Medium'
    },
    socialbtncontainer:{
        display:'flex',
        justifyContent:'space-between',
        flex:1,
        borderRadius:30,
        flexDirection:'row',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10,
        alignItems:'center'
    }
    
})