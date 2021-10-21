import React from 'react';
import {View,StyleSheet,TouchableOpacity,Text} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

export default function Radio({checked,setchecked,label})
{
    return (
        <View style={style.container}>
            <TouchableOpacity style={style.radiocontainer} onPress={setchecked}>
                {
                    checked && (
                        <View style={style.dot}></View>
                    )
                }
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:15}}>
                <Text style={style.label}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    radiocontainer:{
        backgroundColor:'white',
        width:RFValue(21,580),
        height:RFValue(21,580),
        borderRadius:RFValue(11,580),
        borderWidth:1,
        borderColor:'#F6AA11',
        justifyContent:'center',
        alignItems:'center'
    },
    dot:{
        backgroundColor:'#F6AA11',
        width:RFValue(13,580),
        height:RFValue(13,580),
        borderRadius:RFValue(7,580)
    },
    label:{
        fontFamily:'Quicksand-Medium',
        color:'white',
        fontSize:RFValue(12,580)
    }
})
