import React from 'react'
import {View,TouchableOpacity,StyleSheet,Text} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import {RFValue} from 'react-native-responsive-fontsize'

export default function HistoryItem({bankname,amount})
{
    return (
        <View style={style.container}>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <Feather name="credit-card" size={RFValue(25,580)} color="#C9C9C9"></Feather>
                <Text style={[style.text,{marginLeft:15}]}>{bankname}</Text>
            </View>
            <Text style={style.text}>$ {amount}</Text>
            <TouchableOpacity><Text style={[style.text,{color:'#F6AA11'}]}>Details</Text></TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor:'#252525',
        shadowColor:'black',
        shadowOpacity:0.16,
        shadowRadius:5,
        shadowOffset:{
            height:3,
            width:0
        },
        borderRadius:39,
        elevation:1,
        paddingLeft:18,
        paddingRight:18,
        paddingTop:24,
        paddingBottom:24,
        marginBottom:13,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    text:{
        fontSize:RFValue(12,580),
        color:'white',
        fontFamily:'Quicksand-Medium'
    }
})