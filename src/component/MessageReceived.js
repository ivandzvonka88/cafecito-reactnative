import React from 'react'
import {View,Image,StyleSheet,Text} from 'react-native'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {RFValue} from 'react-native-responsive-fontsize'
import {useDarkMode} from 'react-native-dark-mode'
export default function MessageReceived({images=[],message,time,profile})
{
    return (
        <View style={style.container}>
            <Image source={profile} style={style.profile}></Image>
            <View style={{marginLeft:15}}>
                {
                    images.map((item,index)=>(
                        <Image source={item} key={index} style={style.image}></Image>
                    ))
                }
                <View style={{display:'flex',flexDirection:'row',alignItems:'flex-end'}}>
                    <Image source={require('../assets/images/darkmode/triangle_received.png')} style={{marginRight:-1}}></Image>
                    <View style={style.message}>
                        <Text style={style.messagecontent}>{message}</Text>
                    </View>
                </View>
                <Text style={style.time}>{time}</Text>
            </View>
            
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-end',
        marginBottom:15
    },
    image:{
        marginBottom:10,
        maxWidth:wp('70')
    },
    message:{
        borderRadius:9,
        padding:15,
        backgroundColor:'#252525',
        borderBottomLeftRadius:0,
        maxWidth:wp('60')
    },
    messagecontent:{
        fontSize:RFValue(12,580),
        fontFamily:'Quicksand-Regular',
        color:'white'
    },
    time:{
        fontSize:RFValue(11,580),
        fontFamily:'FiraSans-Regular',
        color:'#63697B'
    },
    profile:{
        width:wp('8.1'),
        height:wp('8.1'),
        borderRadius:wp('4.2'),
        marginRight:10
    }
})
