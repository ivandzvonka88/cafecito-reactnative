import React from 'react';
import {ImageBackground,Text,StyleSheet, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useDarkMode} from 'react-native-dark-mode'
export default function ShopItem({name,image,price,description,navigation})
{
    return (
        <View style={{width:wp('23.18'),marginRight:14}}>
            <ImageBackground source={image} style={{width:wp('23.18'),height:wp('23.18'),flexDirection:'column',borderRadius:14,overflow:'hidden'}} resizeMode="cover">
                <View style={{flex:1}}></View>
                <View style={{marginBottom:5}}>
                    <TouchableOpacity style={style.camerabtn}>
                        <Text style={style.price}>$ {price}</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <TouchableOpacity onPress={()=>navigation.navigate('ShopDetail')}>
                <Text style={style.title}>{name}</Text>
            </TouchableOpacity>
            <Text style={style.description}>{description}</Text>
            
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
        fontFamily:'Quicksand-Medium'
    },
    camerabtn:{
        backgroundColor:'#F6AA11',
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
        fontSize:RFValue(10,580),
        color:'white',
        fontWeight:'bold',
        fontFamily:'Quicksand-Medium'
    }
})