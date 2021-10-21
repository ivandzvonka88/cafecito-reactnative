import React from 'react'
import {View,TouchableOpacity,StyleSheet,Image,Text} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default function MessageItem({message,image})
{
    return (
        <View style={style.container}>
            <Image source={image} style={style.profile}></Image>
            <Image source={require('../assets/images/triangle.png')} style={{marginRight:-2}}></Image>
            <View style={style.message}>
                <Text style={style.messagetxt}>{message}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        marginTop:10,
        alignItems:'flex-end'
    },
    profile:{
        width:wp('8.2'),
        height:wp('8.2'),
        borderRadius:wp('4.1'),
        marginRight:5
    },
    message:{
        maxWidth:wp('75'),
        backgroundColor:'#0000008D',
        padding:12,
        borderRadius:10,
        borderBottomLeftRadius:0
    },
    messagetxt:{
        color:'white',
        fontSize:RFValue(12,580),
        fontFamily:'Quicksand-Regular'
    }
})