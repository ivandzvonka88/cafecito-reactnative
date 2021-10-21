import React from 'react'
import {View,TouchableOpacity,StyleSheet,Image,Text} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function InfluencerRequestItem({profile,name,status,received,price})
{
    const getcolor = () => {
        if(status == 'Waiting')
        {
            return '#DBB419';
        }
        else if(status == 'Completed')
        {
            return '#31CF3C';
        }
    }

    return (
        <View style={style.container}>
            <Image source={profile} style={style.profile}></Image>
            <View style={{marginLeft:15,flex:1}}>
                <Text style={style.title}>{name}</Text>
                <View style={{marginTop:5}}>
                    <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginBottom:2}}>
                        <TouchableOpacity style={style.camerabtn}>
                            <FontAwesome5 name="video" color="#F6AA11" size={RFValue(12,580)}></FontAwesome5>
                        </TouchableOpacity>
                        <Text style={[style.info,{fontFamily:'Quicksand-Medium'}]}>(${price})</Text>
                    </View>
                    <Text style={[style.info,{fontFamily:'Quicksand-Regular'}]}>{received}</Text>
                </View>
                <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:5}}>
                    <TouchableOpacity style={[style.btn,{backgroundColor:'#F6AA11'}]}>
                        <Text style={style.btntext}>Send</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[style.btn,{backgroundColor:'black',marginLeft:6}]}>
                        <Text style={style.btntext}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={[style.status,{color:getcolor()}]}>{status}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor:'#252525',
        padding:15,
        borderRadius:9,
        display:'flex',
        flexDirection:'row',
        marginBottom:15
    },
    profile:{
        width:wp('13.28'),
        height:wp('13.28'),
        borderRadius:wp('6.64')
    },
    title:{
        color:'white',
        fontSize:RFValue(16,580),
        fontFamily:'Quicksand-Bold'
    },
    camerabtn:{
        width:wp('5.8'),
        height:wp('5.8'),
        borderRadius:wp('2.9'),
        borderColor:'#F6AA11',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        marginRight:5
    },
    info:{
        fontSize:RFValue(9,580),
        color:'white'
    },
    btn:{
        width:wp('14.73'),
        height:wp('5.314'),
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
    },
    btntext:{
        fontSize:RFValue(10,580),
        color:'white',
        fontFamily:'Quicksand-Medium'
    },
    status:{
        marginTop:30,
        fontSize:RFValue(12,580),
        fontFamily:'Quicksand-Medium'
    }
})