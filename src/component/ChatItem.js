import React from 'react';
import {View,StyleSheet,TouchableOpacity,Image,Text} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
export default function ChatItem({profile,name,isonline,last,is_invite,received,message,navigation})
{
    return (
        <View style={last?style.containerlast:style.container}>
            <View style={{position:'relative'}}>
                <Image source={profile} style={style.profile}></Image>
                {
                    isonline && (
                        <TouchableOpacity style={style.badge}></TouchableOpacity>
                    )
                }
            </View>
            <TouchableOpacity style={{marginLeft:15,flex:1,marginRight:15}} onPress={()=>navigation.navigate('Chating')}>
                <Text style={style.name}>{name}</Text>
                <Text style={[style.message,{color:last?'white':'#C9C9C9',opacity:last?1:style.message.opacity}]} numberOfLines={1}>{message}</Text>
            </TouchableOpacity>
            {
                is_invite ? (
                    <View>
                        <TouchableOpacity style={style.accept}>
                            <Text style={style.btntext}>Accept</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[style.reject,{marginTop:8}]}>
                            <Text style={style.btntext}>Reject</Text>
                        </TouchableOpacity>
                    </View>
                ):<Text style={[style.received,{color:last?'white':'#C9C9C9',opacity:last?1:style.received.opacity}]}>{received}</Text>
            }
        </View>
    )
}


const style = StyleSheet.create({
    container:{
        paddingLeft:24,
        paddingRight:24,
        paddingTop:17,
        paddingBottom:17,
        backgroundColor:'#252525',
        borderBottomColor:'#707070',
        borderBottomWidth:1,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    containerlast:{
        paddingLeft:18,
        paddingRight:18,
        paddingTop:17,
        paddingBottom:17,
        backgroundColor:'#F6AA11',
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    profile:{
        width:wp('13.28'),
        height:wp('13.28'),
        borderRadius:wp('6.64')
    },
    badge:{
        width:11,
        height:11,
        borderRadius:6,
        backgroundColor:'#84C857',
        position:'absolute',
        right:0,
        top:5
    },
    name:{
        fontSize:RFValue(16,580),
        color:'white',
        fontWeight:'bold',
        fontFamily:'arial'
    },
    message:{
        marginTop:9,
        fontSize:RFValue(13,580),
        color:'#C9C9C9',
        opacity:0.4,
        fontWeight:'100',
        fontFamily:'arial'
    },
    accept:{
        width:61,
        height:21,
        backgroundColor:'#47B437',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:11,
        fontFamily:'Quicksand-Medium'
    },
    reject:{
        width:61,
        height:21,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:11,
        fontFamily:'Quicksand-Medium'
    },
    btntext:{
        fontSize:12,
        color:'white'
    },
    received:{
        color:'#C9C9C9',
        opacity:0.3,
        fontSize:RFValue(13,580),
        fontFamily:'arial'
    }
})