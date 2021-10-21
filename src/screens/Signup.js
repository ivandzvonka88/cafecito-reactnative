import React,{useState} from 'react';
import {View,ImageBackground,StyleSheet,KeyboardAvoidingView,Image,TouchableOpacity,Text,TextInput,ScrollView} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen' 
import SelectRole from '../component/SignupSelectRole'
import SignupMain from '../component/SignupCustomer'
import {useDispatch} from 'react-redux'

export default function Signup({navigation})
{

    const [role,setrole] = useState(false)
    const dispatch = useDispatch()
    const selectrole = (selectedrole) => {
        dispatch({type:"SELECT_ROLE",role:selectedrole})
        setrole(selectedrole)
    }
    return (
        <View style={style.container}>
            <KeyboardAvoidingView style={{height:hp('100%')}} behavior="padding">
                <ScrollView>
                    <View style={{marginBottom:24}}>
                        <View style={style.header}>
                            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                                <Feather name="arrow-left" size={RFValue(25,580)} color='white'></Feather>
                            </TouchableOpacity>
                            <Text style={style.headertitle}>Sign up</Text>
                            <View style={{width:RFValue(25,580)}}></View>
                        </View>
                        <Image source={require('../assets/images/darkmode/carp.png')} style={style.logo}></Image>
                        {
                            !role && (
                                <SelectRole selectrole={selectrole}/>
                            )
                        }

                        {
                            role && (
                                <SignupMain role={role} navigation={navigation}/>
                            )
                        }
                        
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:'#101010'
    },
    logo:{
        width:wp('25%'),
        height:wp('30%'),
        alignSelf:'center',
        marginTop:hp('4%')
    },
    header:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    headertitle:{
        fontSize:RFValue(18,580),
        fontFamily:'Quicksand-Medium',
        color:'white'
    }
})
