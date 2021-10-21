import React from 'react'
import {View,StyleSheet,ImageBackground,TouchableOpacity,Text,Image} from 'react-native'
import {RFValue,RFPercentage} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useDarkMode} from 'react-native-dark-mode'
export default function FirstScreen({navigation})
{
    const isDarkMode = useDarkMode();

    const login = () => {
        navigation.navigate('Login')
    }

    const signup = () => {
        navigation.navigate('Signup')
    }


    return (
        <View style={style.container}>
            <View style={{flex:1,alignItems:'center'}}>
                <Image source={require('../assets/images/darkmode/icon.png')} style={style.logo} resizeMode="cover"></Image>
            </View>
            <View style={{marginBottom:24}}>
                <TouchableOpacity style={[style.btncontainer,{backgroundColor:'#F6AA11',marginBottom:10}]} onPress={login}>
                    <Text style={style.btntext}>Login</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row',display:'flex',justifyContent:'center'}}>
                    <Text style={style.description}>Don’t have an account?</Text>
                    <TouchableOpacity onPress={signup} style={{marginLeft:2}}>
                        <Text style={style.signup}>Signup</Text>
                    </TouchableOpacity>
                </View>
                {/* <TouchableOpacity style={[style.btncontainer,{backgroundColor:'black'}]} onPress={signup}>
                    <Text style={style.btntext}>Sign up</Text>
                </TouchableOpacity> */}
                
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:'#101010',
        flexDirection:'column'
    },
    btncontainer:{
        padding:15,
        alignItems:'center',
        borderRadius:35
    },
    btntext:{
        fontSize:RFValue(18,580),
        color:'white',
        fontFamily:'Montserrat-Medium'
    },
    logo:{
        width:wp('49%'),
        height:wp('52%'),
        resizeMode:'cover',
        marginTop:hp('14')
    },
    description:{
        fontSize:RFValue(18,580),
        fontFamily:'Quicksand-Medium',
        color:'#9B9494'
    },
    signup:{
        fontSize:RFValue(18,580),
        fontFamily:'Quicksand-Bold',
        color:'white'
    }
})