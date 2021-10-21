import React from 'react';
import {View,StyleSheet,ScrollView,TouchableOpacity,Text,TextInput} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import IonIcons from 'react-native-vector-icons/Ionicons'
import HistoryItem from '../component/HistoryItem'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen' 
export default function PaymentHistory({navigation})
{
    const data = {
        "Jan 27th, 2021":[
            {bankname:"HDFC BANK",amount:50},
            {bankname:"HDFC BANK",amount:50}
        ],
        "Jan 20th, 2021":[
            {bankname:"HDFC BANK",amount:50},
            {bankname:"HDFC BANK",amount:50}
        ]
    }
    return (
            <View style={style.container}>
                <View style={{marginBottom:24}}>
                    <View style={style.header}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Feather name="arrow-left" size={RFValue(25,580)} color="white"></Feather>
                        </TouchableOpacity>
                        <Text style={style.headertitle}>Payment History</Text>
                        <View style={{width:RFValue(25,580)}}></View>
                    </View>
                    <View style={style.inputcontainer}>
                        <TextInput style={style.input} placeholder="Search" placeholderTextColor="white"></TextInput>
                        <TouchableOpacity>
                            <AntDesign name="search1" color="white" size={RFValue(17,580)}></AntDesign>
                        </TouchableOpacity>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{padding:10}}>
                            {
                                Object.keys(data).map((item,index)=>(
                                    <>
                                        <Text key={index} style={[style.title,{marginTop:15,marginBottom:5}]}>{item}</Text>
                                        {
                                            data[item].map((info,infoindex)=>(
                                                <HistoryItem {...info} key={infoindex}></HistoryItem>
                                            ))
                                        }
                                    </>
                                ))
                            }
                        </View>
                    </ScrollView>
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
        alignItems:'center',
        marginBottom:24
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
        borderRadius:28,
        paddingLeft:24,
        paddingRight:24,
        marginBottom:16,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:8
    },
    input:{
        flex:1,
        color:'black',
        fontSize:RFValue(12,580),
        fontFamily:'Quicksand-Medium'
    },  
    btncontainer:{
        marginTop:30,
        width:wp('39'),
        height:wp('39'),
        borderRadius:wp('20'),
        backgroundColor:'#FFF5F7',
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
        padding:18,
        backgroundColor:'#F6AA11',
        borderRadius:5
    },
    btntext:{
        color:'white',
        fontFamily:'Montserrat-Medium',
        fontSize:RFValue(18,580)
    }
})