import React from 'react'
import {View,Image,StyleSheet,Text} from 'react-native'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {RFValue} from 'react-native-responsive-fontsize'
export default function MessageSend({images=[],message,time,received})
{
    return (
        <View style={style.container}>
            <View style={{marginLeft:15}}>
                {
                    images.map((item,index)=>(
                        <Image source={item} key={index} style={style.image}></Image>
                    ))
                }
                <View style={{display:'flex',flexDirection:'row',alignItems:'flex-end'}}>
                    <View style={style.message}>
                        <Text style={style.messagecontent}>{message}</Text>
                    </View>
                    <Image source={require('../assets/images/triangle_send.png')} style={{marginLeft:-1}}></Image>
                </View>
                <View style={{display:'flex',justifyContent:'flex-end',flexDirection:'row',alignItems:'center'}}>
                    <Text style={style.time}>{time}</Text>
                    {
                        received?<Image source={received} style={style.received}></Image>:null
                    }
                    
                </View>
                
            </View>
            
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row-reverse',
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
        backgroundColor:'#F6AA11',
        borderBottomRightRadius:0,
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
    },
    received:{
        width:wp('3.38'),
        height:wp('3.38'),
        borderRadius:wp('1.69'),
        marginLeft:10
    }
})
