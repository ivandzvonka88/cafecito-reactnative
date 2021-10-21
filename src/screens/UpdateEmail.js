import React from 'react';
import {View,StyleSheet,Image,TouchableOpacity,Text,TextInput} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import IonIcons from 'react-native-vector-icons/Ionicons'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen' 
import {useDarkMode} from 'react-native-dark-mode'
export default function UpdateEmail({navigation})
{
    return (
            <View style={style.container}>
                <View style={{marginBottom:24}}>
                    <View style={style.header}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Feather name="arrow-left" size={RFValue(25,580)} color='white'></Feather>
                        </TouchableOpacity>
                        <Text style={style.headertitle}>Update Email</Text>
                        <View style={{width:RFValue(25,580)}}></View>
                    </View>
                    <TouchableOpacity style={style.btncontainer}>
                        <IonIcons name="mail" color='white' size={RFValue(69,580)}></IonIcons>
                    </TouchableOpacity>
                    <View style={{marginTop:24,marginBottom:48}}>
                        <Text style={style.title}>New Email Address</Text>
                        <View style={style.inputcontainer}>
                            <TextInput style={style.input} defaultValue="test@gmail.com"></TextInput>
                        </View>
                        <TouchableOpacity style={style.save_btn} onPress={()=>navigation.navigate('Account')}>
                            <View style={{width:RFValue(29,580)}}></View>
                            <Text style={style.btntext}>Save</Text>
                            <AntDesign color="white" name="check" size={RFValue(29,580)}></AntDesign>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    )
}


const style = StyleSheet.create({
    container:{
        flex:1,
        width:wp('100%'),
        height:hp('100%'),
        padding:24,
        backgroundColor:'#101010'
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
        fontSize:RFValue(18,580),
        fontFamily:'Quicksand-Medium',
        color:'white'
    },
    inputcontainer:{
        backgroundColor:'#252525',
        shadowColor:'black',
        shadowOpacity:0.16,
        shadowRadius:5,
        shadowOffset:{
            height:3,
            width:0
        },
        borderRadius:34,
        elevation:1,
        paddingLeft:24,
        paddingRight:24,
        paddingTop:5,
        paddingBottom:5,
        marginBottom:16,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:8
    },
    input:{
        flex:1,
        color:'white',
        fontSize:RFValue(12,580),
        fontFamily:'Quicksand-Medium'
    },  
    btncontainer:{
        marginTop:30,
        width:wp('39'),
        height:wp('39'),
        borderRadius:wp('20'),
        backgroundColor:'#F6AA11',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    title:{
        fontSize:RFValue(12,580),
        color:'white',
        fontFamily:'Quicksand-Medium'
    },
    save_btn:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:24,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:'#F6AA11',
        borderRadius:35
    },
    btntext:{
        color:'white',
        fontFamily:'Montserrat-Medium',
        fontSize:RFValue(18,580)
    }
})