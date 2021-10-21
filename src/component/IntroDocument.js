import React from 'react'
import {View,Image,StyleSheet,Text} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'

export default function IntroDocument({index})
{
    const info = [
        {image:require('../assets/images/uploadphoto.png'),title:'Upload Your Photo',description:'We just need a selfie of you straight on. Make sure you don’t have any background lights.'},
        {image:require('../assets/images/documentready.png'),title:'Get ID document ready',description:"Before you start, make sure your passport, driver license with you. You will need to upload during the process."}
    ]

    return (
        <View style={{marginTop:30,alignItems:'center'}}>
            <Image source={info[index].image}></Image>
            <Text style={style.title}>{info[index].title}</Text>
            <Text style={style.description}>{info[index].description}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    title:{
        fontSize:RFValue(16,580),
        fontFamily:'Quicksand-Bold',
        color:'white',
        marginTop:20
    },
    description:{
        fontSize:RFValue(14,580),
        fontFamily:'Quicksand-Medium',
        color:'white',
        marginTop:15,
        textAlign:'center'
    }
})