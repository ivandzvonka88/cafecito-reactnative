import React,{useState} from 'react';
import {View,ScrollView,StyleSheet,KeyboardAvoidingView,TouchableOpacity,Text,Image} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { TextInput } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox'
export default function Payment({navigation})
{
    const [paid,setpaid] = useState(false)
    const [card,selectcard] = useState('visa')
    const [checked,setchecked] = useState(false)
    const nextstep = () => {
        if(paid)
        {   
            navigation.goBack();
        }
        else
        {
            setpaid(true)
        }
    }
    return (
        <KeyboardAvoidingView style={{flex:1}} behavior="height">
            <View style={style.container}>
                <View style={style.header}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Feather name="arrow-left" size={RFValue(25,580)} color="white"></Feather>
                    </TouchableOpacity>
                    <Text style={style.headertitle}>Payment</Text>
                    <View style={{width:RFValue(25,580)}}></View>
                </View>
                <ScrollView>
                    <View>
                        <View style={{padding:24}}>
                            <TouchableOpacity style={style.scancard}>
                                <Text style={style.paymentinfotitle}>Summary</Text>
                                <View style={{display:'flex',flexDirection:'row',marginTop:13}}>
                                    <Text style={[style.content,{flex:1}]}>Subtotal</Text>
                                    <Text style={[style.title,{flex:1}]}>$500</Text>
                                </View>
                                <View style={{display:'flex',flexDirection:'row',marginTop:13}}>
                                    <Text style={[style.content,{flex:1}]}>Service Fee</Text>
                                    <Text style={[style.title,{flex:1}]}>$50</Text>
                                </View>
                                <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:13}}>
                                    <TouchableOpacity style={style.checkbox} onPress={()=>setchecked(!checked)}>
                                        {
                                            checked && (
                                                <Feather name="check" size={RFValue(25,580)} color="#F6AA11"></Feather>
                                            )
                                        }
                                    </TouchableOpacity>
                                    <Text style={[style.content,{marginLeft:15}]}>Add Promo Code</Text>
                                </View>
                                <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:13}}>
                                    <Text style={style.paymentinfotitle}>Total $550.00</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {
                            !paid && (
                                <View style={style.paymentinfo}>
                                    <Text style={[style.paymentinfotitle,{color:'white'}]}>Shipping Information</Text>
                                    <TextInput style={[style.input,{marginTop:15}]} placeholder="Mobile Number" placeholderTextColor="white"></TextInput>
                                    <TextInput style={[style.input,{marginTop:15}]} placeholder="Email Address" placeholderTextColor="white"></TextInput>
                                    <TextInput style={[style.input,{marginTop:15}]} placeholder="Full Address" placeholderTextColor="white"></TextInput>
                                    <TextInput style={[style.input,{marginTop:15}]} placeholder="Apartment. suite,etc" placeholderTextColor="white"></TextInput>
                                    <View style={{display:'flex',flexDirection:'row',marginTop:15}}>
                                        <TextInput style={[style.input,{marginRight:15,flex:1}]} placeholder="City" placeholderTextColor="white"></TextInput>
                                        <TextInput style={[style.input,{flex:1}]} placeholder="Province/State" placeholderTextColor="white"></TextInput>
                                    </View>
                                    <View style={{display:'flex',flexDirection:'row',marginTop:15}}>
                                        <TextInput style={[style.input,{marginRight:15,flex:1}]} placeholder="Country" placeholderTextColor="white"></TextInput>
                                        <TextInput style={[style.input,{flex:1}]} placeholder="Postal Code" placeholderTextColor="white"></TextInput>
                                    </View>
                                </View>
                            )
                        }
                        <View style={style.paymentinfo}>
                            <Text style={[style.paymentinfotitle,{color:'white'}]}>Payment Method</Text>
                            <View style={[style.inputcontainer,{marginTop:15}]}>
                                <Image source={require('../assets/images/darkmode/visa.png')}></Image>
                                <View style={{marginLeft:20}}>
                                    <Text style={style.title}>Card Name</Text>
                                    <Text style={style.content}>3256 5654 6854 2156</Text>
                                </View>
                                <TouchableOpacity style={[style.checkbox,{marginLeft:'auto'}]} onPress={()=>selectcard('visa')}>
                                    {
                                        card == 'visa' && (
                                            <AntDesign name="check" color="#F6AA11" size={RFValue(25,580)}></AntDesign>
                                        )
                                    }
                                </TouchableOpacity>
                            </View>
                            <View style={style.inputcontainer}>
                                <Image source={require('../assets/images/darkmode/mastercard.png')}></Image>
                                <View style={{marginLeft:20}}>
                                    <Text style={style.title}>Card Name</Text>
                                    <Text style={style.content}>3256 5654 6854 2156</Text>
                                </View>
                                <TouchableOpacity style={[style.checkbox,{marginLeft:'auto'}]} onPress={()=>selectcard('mastercard')}>
                                    {
                                        card == 'mastercard' && (
                                            <AntDesign name="check" color="#F6AA11" size={RFValue(25,580)}></AntDesign>
                                        )
                                    }
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={[style.save_btn,{marginTop:15}]} onPress={()=>nextstep()}>
                                <View style={{width:RFValue(29,580)}}></View>
                                <Text style={style.btntext}>{paid?'Leave Feedback':'Pay Now'}</Text>
                                <AntDesign color="white" name="arrowright" size={RFValue(29,580)}></AntDesign>
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
        color:'white',
        fontFamily:'Quicksand-Medium',
        fontSize:RFValue(12,580)
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
    scancard:{
        backgroundColor:'#252525',
        borderRadius:12,
        padding:25,
        paddingLeft:27,
        paddingRight:27,
        borderWidth:1,
        borderColor:'#E1E1E1',
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
        color:'#F6AA11',
        fontFamily:'Quicksand-Bold'
    },
    input:{
        backgroundColor:'#252525',
        borderRadius:31,
        color:'white',
        fontSize:RFValue(12,580),
        fontFamily:'Quicksand-Medium',
        padding:15
    },
    checkbox:{
        borderRadius:5,
        width:30,
        height:30,
        backgroundColor:'#101010',
        borderWidth:0,
        shadowColor:'black',
        shadowOpacity:0.16,
        shadowRadius:5,
        shadowOffset:{
            height:3,
            width:0
        },
        borderRadius:5,
        elevation:2
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
        borderRadius:34,
        elevation:2,
        padding:15,
        marginBottom:16,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
})