import React from 'react';
import {ImageBackground,Text,StyleSheet, View,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather'
export default function LiveStreamItem({title,image,top,camera,cup})
{
    return (
        <View style={{width:wp('23.18'),marginRight:14}}>
            <ImageBackground source={image} style={{width:wp('23.18'),height:wp('33.57'),flexDirection:'column',borderRadius:10,overflow:'hidden'}} resizeMode="cover">
                <View style={{flex:1}}></View>
                <View style={{marginBottom:5}}>
                    <TouchableOpacity style={style.camerabtn}>
                        <Image source={require('../assets/images/videoicon.png')} style={{opacity:1,width:wp('2.2'),height:wp('1.42')}}></Image>
                        <Text style={style.price}>$ {camera}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[style.camerabtn,{marginTop:5,backgroundColor:'#0000009B'}]}>
                        <Image source={require('../assets/images/coffee.png')} style={{opacity:1,width:wp('2.2'),height:wp('1.42')}}></Image>
                        <Text style={style.price}>$ {cup}</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <Text style={style.title}>{title}</Text>
            <Text style={style.description}>Top {top}</Text>
        </View>
    )
}


const style = StyleSheet.create({
    title:{
        fontSize:RFValue(12,580),
        marginTop:9,
        fontFamily:'Quicksand-Medium',
        color:'#D5D5D5'
    },
    description:{
        fontSize:RFValue(8,580),
        color:'#A4A4A4',
        marginTop:4,
        fontFamily:'Quicksand-Medium'
    },
    camerabtn:{
        backgroundColor:'#F6AA119B',
        borderRadius:11,
        paddingTop:7,
        paddingBottom:7,
        paddingLeft:15,
        paddingRight:15,
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'center'
    },
    price:{
        marginLeft:5,
        fontSize:RFValue(7,580),
        color:'white',
        fontWeight:'bold',
        fontFamily:'Quicksand-Medium'
    }
})