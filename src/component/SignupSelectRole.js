import React from 'react';
import {View,TouchableOpacity,StyleSheet,Text} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {RFValue} from 'react-native-responsive-fontsize'
export default function SignupSelectRole({selectrole})
{

    return (
        <View style={style.container}>
            <TouchableOpacity style={[style.btncontainer,{backgroundColor:'#F6AA11'}]} onPress={()=>selectrole('customer')}>
                <Text style={style.btntext}>Continue as customer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[style.btncontainer,{borderWidth:1,borderColor:'#F6AA11'}]} onPress={()=>selectrole('influencer')}>
                <Text style={[style.btntext,{color:'#F6AA11'}]}>Continue as Influencer</Text>
            </TouchableOpacity>
        </View>
    )   
}

const style = StyleSheet.create({
    container:{
        flex:1,
        marginTop:hp('11%')
    },
    btncontainer:{
        padding:15,
        alignItems:'center',
        borderRadius:35,
        marginBottom:19
    },
    btntext:{
        fontSize:RFValue(18,580),
        color:'white',
        fontFamily:'Montserrat-Medium'
    }
})