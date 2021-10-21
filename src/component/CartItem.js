import React from 'react'
import {View,StyleSheet,Image,Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function CartItem({image,name,description,price,count})
{
    return (
        <View style={style.container}>
            <View style={style.sectionitem}>
                <Image source={image} style={style.image}></Image>
                <View style={{marginLeft:13}}>
                    <Text style={style.name}>{name}</Text>
                    <Text style={style.description}>{description}</Text>
                </View>
            </View>
            <View style={style.sectionitem}>
                <Text style={style.price}>${price}</Text>
                <View style={style.count}>
                    <TouchableOpacity>
                        <AntDesign name="minus" color="#F6AA11" size={RFValue(15,580)}></AntDesign>
                    </TouchableOpacity>
                    <Text style={style.counttext}>{count}</Text>
                    <TouchableOpacity>
                        <AntDesign name="plus" color="#F6AA11" size={RFValue(15,580)}></AntDesign>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={style.remove}>
                    <MaterialCommunityIcons name="delete-forever" color="#F6AA11" size={RFValue(17,580)}></MaterialCommunityIcons>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:15
    },
    sectionitem:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    image:{
        width:wp('16.9'),
        height:wp('16.9'),
        borderRadius:10
    },
    name:{
        fontSize:RFValue(13,580),
        color:'white',
        fontFamily:"Quicksand-Medium"
    },
    description:{
        fontSize:RFValue(9,580),
        color:'white',
        fontFamily:'Quicksand-Medium'
    },
    price:{
        paddingLeft:10,
        paddingRight:10,
        paddingTop:3,
        paddingBottom:3,
        backgroundColor:'#F6AA11',
        borderRadius:15,
        color:'white',
        fontSize:RFValue(10,580),
        fontFamily:'Quicksand-Medium'
    },
    count:{
        padding:11,
        paddingLeft:16,
        paddingRight:16,
        backgroundColor:'#252525',
        borderRadius:28,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft:9,
        marginRight:9,
        elevation:2
    },
    counttext:{
        fontSize:RFValue(15,580),
        color:'white',
        fontFamily:'Quicksand-Medium',
        marginLeft:7,
        marginRight:7
    },
    remove:{
        width:wp('7.49'),
        height:wp('7.49'),
        borderRadius:wp('3.8'),
        borderWidth:1,
        borderColor:'#F6AA11',
        justifyContent:'center',
        alignItems:'center'
    }
})