import React,{useState} from 'react';
import {View,ScrollView,StyleSheet,KeyboardAvoidingView,Image,TouchableOpacity,Text} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen' 
import Collapsible from 'react-native-collapsible'
import { TextInput } from 'react-native-gesture-handler';
export default function AddCard({navigation})
{

    return (
        <KeyboardAvoidingView style={{flex:1}} behavior="height">
            <View style={style.container}>
                <View style={style.header}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Feather name="arrow-left" size={RFValue(25,580)} color="white"></Feather>
                    </TouchableOpacity>
                    <Text style={style.headertitle}>Add New Card</Text>
                    <View style={{width:RFValue(25,580)}}></View>
                </View>
                <ScrollView>
                    <View>
                        <View style={{padding:24}}>
                            <TouchableOpacity style={style.scancard}>
                                <Feather name="credit-card" size={RFValue(25,580)} color="#C9C9C9"></Feather>
                                <Text style={[style.title,{marginLeft:15}]}>Scan Your Card</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={style.paymentinfo}>
                            <Text style={style.paymentinfotitle}>Payment Info</Text>
                            <TextInput style={[style.input,{marginTop:15}]} placeholder="Name" placeholderTextColor="white"></TextInput>
                            <TextInput style={[style.input,{marginTop:15}]} placeholder="Credit Card Number" placeholderTextColor="white"></TextInput>
                            <View style={{display:'flex',flexDirection:'row',marginTop:15}}>
                                <TextInput style={[style.input,{marginRight:15,flex:1}]} placeholder="MM/YY" placeholderTextColor="white"></TextInput>
                                <TextInput style={[style.input,{flex:1}]} placeholder="Security Code" placeholderTextColor="white"></TextInput>
                            </View>
                        </View>
                        <View style={style.paymentinfo}>
                            <Text style={style.paymentinfotitle}>Billing Address</Text>
                            <TextInput style={[style.input,{marginTop:15}]} placeholder="Address" placeholderTextColor="white"></TextInput>
                            <TextInput style={[style.input,{marginTop:15}]} placeholder="Apartment, Suite ,etc (Optional)" placeholderTextColor="white"></TextInput>
                            <View style={{display:'flex',flexDirection:'row',marginTop:15}}>
                                <TextInput style={[style.input,{marginRight:15,flex:1}]} placeholder="City" placeholderTextColor="white"></TextInput>
                                <TextInput style={[style.input,{flex:1}]} placeholder="State" placeholderTextColor="white"></TextInput>
                            </View>
                            <View style={{display:'flex',flexDirection:'row',marginTop:15}}>
                                <TextInput style={[style.input,{marginRight:15,flex:1}]} placeholder="Country" placeholderTextColor="white"></TextInput>
                                <TextInput style={[style.input,{flex:1}]} placeholder="Zip Code" placeholderTextColor="white"></TextInput>
                            </View>
                            <TouchableOpacity style={[style.save_btn,{marginTop:15}]}  onPress={()=>navigation.goBack()}>
                                <View style={{width:RFValue(29,580)}}></View>
                                <Text style={style.btntext}>Save</Text>
                                <AntDesign color="white" name="check" size={RFValue(29,580)}></AntDesign>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                
            </View>
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
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
        alignItems:'center',
        padding:24
    },
    headertitle:{
        fontSize:RFValue(18,580),
        fontFamily:'Quicksand-Medium',
        color:'white'
    },
    title:{
        fontSize:RFValue(12,580),
        color:'white',
        fontFamily:'Quicksand-Medium'
    },
    content:{
        color:'#8E8E8E',
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
        paddingBottom:15,
        paddingTop:15,
        backgroundColor:'#F6AA11',
        borderRadius:35
    },
    btntext:{
        color:'white',
        fontFamily:'Montserrat-Medium',
        fontSize:RFValue(18,580)
    },
    scancard:{
        borderRadius:12,
        padding:20,
        paddingLeft:27,
        paddingRight:27,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#252525',
        marginLeft:20,
        marginRight:20
    },
    paymentinfo:{
        padding:24,
        paddingLeft:44,
        paddingRight:44,
        paddingBottom:23
    },
    paymentinfotitle:{
        fontSize:RFValue(15,580),
        color:'white',
        fontFamily:'Quicksand-Bold'
    },
    input:{
        backgroundColor:'#252525',
        borderRadius:31,
        color:'white',
        fontSize:RFValue(12,580),
        fontFamily:'Quicksand-Medium',
        paddingLeft:18,
        paddingRight:15
    }
})