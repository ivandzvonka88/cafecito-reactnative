import React from 'react';
import {ImageBackground,Text,StyleSheet, View,TouchableOpacity,Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
export default function MyVideoItem({title,image,like})
{
    return (
        <View style={{width:wp('23.18'),marginRight:14}}>
            <ImageBackground source={image} style={{width:wp('23.18'),height:wp('23.18'),borderRadius:14,display:'flex',justifyContent:'center',alignItems:'center',position:'relative'}}>
                <TouchableOpacity><EvilIcons name="play" color="#F6AA11" size={RFValue(26,580)}></EvilIcons></TouchableOpacity>
                <View style={{display:'flex',position:'absolute',bottom:5,right:5,flexDirection:'row',alignItems:'center'}}>
                    <Entypo color="#F6AA11" size={RFValue(9,580)} name="heart"></Entypo>
                    <Text style={{color:'#F6AA11',fontSize:RFValue(9,580),fontFamily:'Quicksand-Medium'}}>{like}</Text>
                </View>
            </ImageBackground>
            <Text style={style.title}>{title}</Text>
        </View>
    )
}


const style = StyleSheet.create({
    title:{
        fontSize:RFValue(11,580),
        marginTop:9,
        fontFamily:'Quicksand-Medium',
        color:'white'
    },
    description:{
        fontSize:RFValue(9,580),
        color:'black',
        fontFamily:'Quicksand-Medium'
    },
    profile:{
        width:wp('5.8%'),
        height:wp('5.8%'),
        borderRadius:wp('2.9%')
    }
})