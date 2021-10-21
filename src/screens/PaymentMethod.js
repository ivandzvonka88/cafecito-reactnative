import React from 'react';
import {View,StyleSheet,Image,TouchableOpacity,Text} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen' 
import {useSelector} from 'react-redux'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function PaymentMethod({navigation})
{
    const {role} = useSelector(state=>state.auth)
    return (
            <View style={style.container}>
                <View style={{marginBottom:24}}>
                    <View style={style.header}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Feather name="arrow-left" size={RFValue(25,580)} color='white'></Feather>
                        </TouchableOpacity>
                        <Text style={style.headertitle}>Payment Methods</Text>
                        <View style={{width:RFValue(25,580)}}></View>
                    </View>
                    <TouchableOpacity style={style.btncontainer}>
                        <Image source={require('../assets/images/darkmode/credit-card-large.png')} style={{width:wp('27.3'),height:wp('19.84')}}></Image>
                    </TouchableOpacity>
                    <View style={{marginTop:24,marginBottom:48}}>
                        <View style={style.inputcontainer}>
                            <Image source={require('../assets/images/darkmode/visa.png')}></Image>
                            <View style={{marginLeft:20,flex:1}}>
                                <Text style={style.title}>Card Name</Text>
                                <Text style={style.content}>3256 5654 6854 2156</Text>
                            </View>
                            {
                                role == 'influencer' && (
                                    <TouchableOpacity style={style.removebtn}>
                                        <MaterialCommunityIcons name="delete-forever" size={RFValue(13,580)} color="#F6AA11"></MaterialCommunityIcons>
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                        <View style={style.inputcontainer}>
                            <Image source={require('../assets/images/darkmode/mastercard.png')}></Image>
                            <View style={{marginLeft:20,flex:1}}>
                                <Text style={style.title}>Card Name</Text>
                                <Text style={style.content}>3256 5654 6854 2156</Text>
                            </View>
                            {
                                role == 'influencer' && (
                                    <TouchableOpacity style={style.removebtn}>
                                        <MaterialCommunityIcons name="delete-forever" size={RFValue(13,580)} color="#F6AA11"></MaterialCommunityIcons>
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                        <TouchableOpacity style={style.save_btn} onPress={()=>navigation.navigate('AddCard')}>
                            <View style={{width:RFValue(29,580)}}></View>
                            <Text style={style.btntext}>Add New Card</Text>
                            <AntDesign color="white" name="pluscircleo" size={RFValue(29,580)}></AntDesign>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    )
}


const style = StyleSheet.create({
    container:{
        flex:1,
        width:wp('100%'),
        height:hp('100%'),
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
    },
    inputcontainer:{
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
        padding:15,
        marginBottom:16,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    btncontainer:{
        marginTop:30,
        width:wp('39'),
        height:wp('39'),
        borderRadius:wp('20'),
        backgroundColor:'#F6AA11',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    title:{
        fontSize:RFValue(12,580),
        color:'white',
        fontFamily:'Quicksand-Medium'
    },
    link:{
        fontSize:RFValue(12,580),
        color:'#F6AA11',
        fontFamily:'Quicksand-Medium'
    },
    content:{
        color:'white',
        fontFamily:'Quicksand-Medium',
        fontSize:RFValue(12,580),
        alignItems:'center'
    },
    save_btn:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:24,
        paddingRight:24,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:'#F6AA11',
        borderRadius:35
    },
    btntext:{
        color:'white',
        fontFamily:'Montserrat-Medium',
        fontSize:RFValue(18,580)
    },
    removebtn:{
        width:wp('7.488'),
        height:wp('7.488'),
        borderRadius:wp('3.744'),
        borderWidth:1,
        borderColor:'#F6AA11',
        justifyContent:'center',
        alignItems:'center'
    }
})