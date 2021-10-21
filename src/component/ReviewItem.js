import React from 'react';
import {View,StyleSheet,Image,Text,TouchableOpacity} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {RFValue} from 'react-native-responsive-fontsize'
export default function ReviewItem({name,profile,count,time,description,me,reply})
{
    return (
        <View style={style.container}>
            <View style={style.header}>
                <View style={style.profile}>
                    <Image source={profile} style={style.profileimg}></Image>
                    <View style={{marginLeft:10}}>
                        <Text style={style.title}>{name}</Text>
                        <Text style={style.reviewcount}>{count} Reviews</Text>
                    </View>
                </View>
                <View>
                    <View style={{display:'flex',flexDirection:'row'}}>
                        <AntDesign color="#E9C448" size={RFValue(12,580)} name="star"></AntDesign>
                        <AntDesign color="#E9C448" size={RFValue(12,580)} name="star"></AntDesign>
                        <AntDesign color="#E9C448" size={RFValue(12,580)} name="star"></AntDesign>
                        <AntDesign color="#E9C448" size={RFValue(12,580)} name="star"></AntDesign>
                        <AntDesign color="#E9C448" size={RFValue(12,580)} name="star"></AntDesign>
                    </View>
                    <Text style={style.time}>{time}</Text>
                </View>
            </View>
            <Text style={style.description}>{description}</Text>
            {
                me && (
                    <TouchableOpacity style={{marginTop:10}} onPress={reply}>
                        <Text style={style.reviewcount}>Reply</Text>
                    </TouchableOpacity>
                )
            }
            
        </View>
    )
}


const style = StyleSheet.create({
    container:{
        borderBottomColor:'black',
        borderBottomWidth:1,
        backgroundColor:'#252525',
        padding:24
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    profile:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    profileimg:{
        width:wp('13.28'),
        height:wp('13.28'),
        borderRadius:wp('6.64')
    },
    title:{
        fontSize:RFValue(17,580),
        fontFamily:'arial',
        color:'white'
    },
    reviewcount:{
        fontFamily:'Quicksand-Medium',
        color:'#F6AA11',
        fontSize:RFValue(12,580)
    },
    time:{
        fontFamily:'Quicksand-Medium',
        color:'#888888',
        fontSize:RFValue(8,580)
    },
    description:{
        fontFamily:'Quicksand-Medium',
        color:'white',
        fontSize:RFValue(12,580),
        marginTop:5
    }
})