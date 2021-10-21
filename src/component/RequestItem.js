import React from 'react'
import {View,StyleSheet,Image,Text, TouchableOpacity} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export default function RequestItem({profile,name,review,count,price,updated,status})
{
    const getstatuscolor = () => {
        switch(status)
        {
            case 'Pending':
                return '#EEB408';
            case 'Arrived':
                return '#10A400';
            default:
                return '#101010';
        }
    }
    return (
        <View style={style.container}>
            <Image source={profile} style={style.profile}></Image>
            <View style={{flex:1,marginLeft:15,marginRight:15}}>
                <Text style={style.name}>{name}</Text>
                <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <FontAwesome name="star" color="#F6AA11" size={RFValue(13,580)}></FontAwesome>
                    <Text style={[style.review,{marginLeft:5}]}>{review}({count})</Text>
                    <TouchableOpacity style={{marginLeft:5}}>
                        <Text style={style.see_review}>See all reviews</Text>
                    </TouchableOpacity>
                </View>
                <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <Text style={style.sectionitem}>Video</Text>
                    <Text style={[style.sectionitem,{paddingLeft:15}]}>${price}</Text>
                    <Text style={[style.sectionitem,{borderRightWidth:0,paddingLeft:15}]}>{updated}</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={[style.statusbtn,{backgroundColor:getstatuscolor()}]}>
                    <Text style={style.btntext}>{status}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        paddingLeft:24,
        paddingRight:24,
        paddingTop:17,
        paddingBottom:17,
        borderBottomColor:'black',
        borderBottomWidth:1,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#252525'
    },
    profile:{
        width:wp('13.28'),
        height:wp('13.28'),
        borderRadius:wp('6.64')
    },
    name:{
        fontFamily:'arial',
        fontSize:RFValue(17,580),
        color:'white'
    },
    review:{
        fontSize:RFValue(13,580),
        fontFamily:'Montserrat-Regular',
        color:'#C9C9C968'
    },
    see_review:{
        fontSize:RFValue(12,580),
        fontFamily:'Quicksand-Medium',
        color:'#F6AA11'
    },
    sectionitem:{
        fontSize:RFValue(11,580),
        fontFamily:'Quicksand-Medium',
        paddingRight:10,
        borderRightWidth:1,
        borderRightColor:'#FFFFFFB2',
        color:'#FFFFFFB2'
    },
    statusbtn:{
        width:wp('19.5'),
        justifyContent:'center',
        alignItems:'center',
        paddingTop:6,
        paddingBottom:6,
        borderRadius:11
    },
    btntext:{
        fontFamily:'Quicksand-Medium',
        fontSize:RFValue(10,580),
        color:'white'
    }
})