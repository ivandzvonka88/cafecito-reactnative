import React from 'react';
import {ImageBackground,Text,StyleSheet, View,TouchableOpacity,Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import {useDarkMode} from 'react-native-dark-mode'
export default function VideoItem({title,image,profile,name,like})
{
    return (
        <View style={{width:wp('24'),marginRight:14}}>
            <ImageBackground source={image} style={{width:wp('24'),height:wp('24'),borderRadius:14,display:'flex',justifyContent:'center',alignItems:'center',position:'relative',overflow:'hidden'}} resizeMode="cover">
                <TouchableOpacity><EvilIcons name="play" color="#F6AA11" size={RFValue(26,580)}></EvilIcons></TouchableOpacity>
                <View style={{display:'flex',position:'absolute',bottom:5,right:5,flexDirection:'row',alignItems:'center'}}>
                    <Entypo color="#F6AA11" size={RFValue(9,580)} name="heart"></Entypo>
                    <Text style={{color:'#F6AA11',fontSize:RFValue(9,580),fontFamily:'Quicksand-Medium'}}>{like}</Text>
                </View>
            </ImageBackground>
            <Text style={style.title} numberOfLines={1}>{title}</Text>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:5}}>
                <Image source={profile} style={style.profile}></Image>
                <Text style={style.description}>{name}</Text>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    title:{
        fontSize:RFValue(11,580),
        marginTop:9,
        fontFamily:'Quicksand-Medium',
        color:'#D5D5D5'
    },
    description:{
        fontSize:RFValue(9,580),
        color:'black',
        fontFamily:'Quicksand-Medium',
        color:'#D5D5D5',
        marginLeft:5
    },
    profile:{
        width:wp('5.8%'),
        height:wp('5.8%'),
        borderRadius:wp('2.9%')
    }
})