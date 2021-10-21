import React, { useState } from 'react'
import {View,StyleSheet,ImageBackground,ScrollView,TouchableOpacity,Text,TextInput,Image} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {RFValue} from 'react-native-responsive-fontsize'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import IonIcons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontiso from 'react-native-vector-icons/Fontisto'

export default function Request({navigation})
{
    const [checked,setchecked] = useState(false)
    return (
        <View style={style.container}>
            <View style={style.header}>
                <View style={style.topheader}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <AntDesign name="arrowleft" color="white" size={RFValue(25,580)}></AntDesign>
                    </TouchableOpacity>
                    <Text style={style.headertitle}>Request</Text>
                    <View style={{width:RFValue(25,580)}}></View>
                </View>
            </View>
            <ScrollView style={{flex:1}}>
                <View>
                    <View style={style.contentprofile}>
                        <View style={{alignItems:'center'}}>
                            <Image source={require('../assets/images/products/piolfn.png')} style={{borderRadius:15,width:wp('24.15'),height:wp('24.15')}}></Image>
                            <Text style={style.title}>New Request for Piolin</Text>
                        </View>
                        <View style={{flexDirection:'row',display:'flex',marginTop:10}}>
                            <View style={{flex:1,borderRightColor:'#000000',borderRightWidth:1}}>
                                <Text style={style.infotitle}>What will you request?</Text>
                                <View style={{flexDirection:'row',display:'flex',marginTop:10}}>
                                    <View style={{flex:1,alignItems:'center'}}>
                                        <TouchableOpacity style={[style.btninfo,{backgroundColor:'#F6AA11'}]} onPress={()=>navigation.navigate('Camera')}>
                                            <FontAwesome5 size={RFValue(25,580)} color="white" name="video"></FontAwesome5>
                                        </TouchableOpacity>
                                        <Text style={style.iteminfo}>Video ($500)</Text>
                                    </View>
                                    <View style={{flex:1,alignItems:'center'}}>
                                        <TouchableOpacity style={style.btninfo}>
                                            <Image source={require('../assets/images/coffee-hot.png')} style={{width:RFValue(25,580),height:RFValue(25,580)}}></Image>
                                        </TouchableOpacity>
                                        <Text style={style.iteminfo}>Cafecito ($500)</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <Text style={style.infotitle}>Who is this for?</Text>
                                <View style={{flexDirection:'row',display:'flex',marginTop:10}}>
                                    <View style={{flex:1,alignItems:'center'}}>
                                        <TouchableOpacity style={style.btninfo}>
                                            <IonIcons size={RFValue(25,580)} color="#F6AA11" name="person"></IonIcons>                                    
                                        </TouchableOpacity>
                                        <Text style={style.iteminfo}>Somoone else</Text>
                                    </View>
                                    <View style={{flex:1,alignItems:'center'}}>
                                        <TouchableOpacity style={style.btninfo}>
                                            <MaterialCommunityIcons name="face" size={RFValue(25,580)} color="#F6AA11"></MaterialCommunityIcons>
                                        </TouchableOpacity>
                                        <Text style={style.iteminfo}>Myself</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={style.content}>
                        <View>
                            <Text style={style.label}>To</Text>
                            <View style={style.inputcontainer}>
                                <TextInput style={style.input}></TextInput>
                            </View>
                        </View>
                        <View>
                            <Text style={style.label}>From</Text>
                            <View style={style.inputcontainer}>
                                <TextInput style={style.input}></TextInput>
                            </View>
                        </View>
                        <View>
                            <Text style={style.label}>Pronoun</Text>
                            <View style={style.inputcontainer}>
                                <TextInput style={style.input}></TextInput>
                            </View>
                        </View>
                        <Text style={[style.infotitle,{fontSize:RFValue(14,580),textAlign:'left'}]}>Select an occasion</Text>
                        <View style={{flexDirection:'row',display:'flex',flexWrap:'wrap',marginTop:10}}>
                            <View style={{alignItems:'center',marginRight:15,marginBottom:15}}>
                                <TouchableOpacity style={style.btninfo}>
                                    <MaterialCommunityIcons name="block-helper" color="#F6AA11" size={RFValue(25,580)}></MaterialCommunityIcons>
                                </TouchableOpacity>
                                <Text style={style.iteminfo}>None</Text>
                            </View>
                            <View style={{alignItems:'center',marginRight:15,marginBottom:15}}>
                                <TouchableOpacity style={[style.btninfo,{backgroundColor:'#F6AA11'}]}>
                                    <FontAwesome5 name="birthday-cake" color="white" size={RFValue(25,580)}></FontAwesome5>
                                </TouchableOpacity>
                                <Text style={style.iteminfo}>Birthday</Text>
                            </View>
                            <View style={{alignItems:'center',marginRight:15,marginBottom:15}}>
                                <TouchableOpacity style={style.btninfo}>
                                    <Feather name="gift" color="#F6AA11" size={RFValue(25,580)}></Feather>
                                </TouchableOpacity>
                                <Text style={style.iteminfo}>Gift</Text>
                            </View>
                            <View style={{alignItems:'center',marginRight:15,marginBottom:15}}>
                                <TouchableOpacity style={style.btninfo}>
                                    <MaterialCommunityIcons name="chart-line-variant" color="#F6AA11" size={RFValue(25,580)}></MaterialCommunityIcons>
                                </TouchableOpacity>
                                <Text style={style.iteminfo}>Pop talk</Text>
                            </View>
                            <View style={{alignItems:'center',marginRight:15,marginBottom:15}}>
                                <TouchableOpacity style={style.btninfo}>
                                    <MaterialIcons name="chat-bubble-outline" color="#F6AA11" size={RFValue(25,580)}></MaterialIcons>
                                </TouchableOpacity>
                                <Text style={style.iteminfo}>Question</Text>
                            </View>
                            <View style={{alignItems:'center',marginRight:15,marginBottom:15}}>
                                <TouchableOpacity style={style.btninfo}>
                                    <MaterialCommunityIcons name="flag-triangle" color="#F6AA11" size={RFValue(25,580)}></MaterialCommunityIcons>
                                </TouchableOpacity>
                                <Text style={style.iteminfo}>Get advice</Text>
                            </View>
                            <View style={{alignItems:'center',marginRight:10,marginBottom:15}}>
                                <TouchableOpacity style={style.btninfo}>
                                    <FontAwesome5 name="gripfire" color="#F6AA11" size={RFValue(25,580)}></FontAwesome5>
                                </TouchableOpacity>
                                <Text style={style.iteminfo}>Roast</Text>
                            </View>
                            <View style={{alignItems:'center',marginRight:10,marginBottom:10}}>
                                <TouchableOpacity style={style.btninfo}>
                                    <Fontiso name="smiley" color="#F6AA11" size={RFValue(25,580)}></Fontiso>
                                </TouchableOpacity>
                                <Text style={style.iteminfo}>Announcement</Text>
                            </View>
                            <View style={{alignItems:'center',marginRight:15,marginBottom:15}}>
                                <TouchableOpacity style={style.btninfo}>
                                    <AntDesign name="hearto" color="#F6AA11" size={RFValue(25,580)}></AntDesign>
                                </TouchableOpacity>
                                <Text style={style.iteminfo}>Wedding</Text>
                            </View>
                            <View style={{alignItems:'center',marginRight:15,marginBottom:15}}>
                                <TouchableOpacity style={style.btninfo}>
                                    <Feather name="users" color="#F6AA11" size={RFValue(25,580)}></Feather>
                                </TouchableOpacity>
                                <Text style={style.iteminfo}>Anniversary</Text>
                            </View>
                            <View style={{alignItems:'center',marginRight:15,marginBottom:15}}>
                                <TouchableOpacity style={style.btninfo}>
                                    <Feather name="star" color="#F6AA11" size={RFValue(25,580)}></Feather>
                                </TouchableOpacity>
                                <Text style={style.iteminfo}>Just cuz</Text>
                            </View>
                        </View>
                        <Text style={[style.infotitle,{fontSize:RFValue(15,580),textAlign:'left'}]}>Instructions</Text>
                        <Text style={style.description}>My instructions for "Piolin" are</Text>
                        <View style={[style.inputcontainer,{marginTop:5}]}>
                            <TextInput style={style.input} multiline={true} numberOfLines={5}></TextInput>
                        </View>
                        <Text style={[style.description,{marginTop:5,fontSize:RFValue(13,580)}]}>
                        If this is a gift don't forget to add pronunciation, it really healps
                        </Text>
                        <View style={[style.inputcontainer,{marginTop:10}]}>
                            <Fontiso name="email" size={RFValue(25,580)} color="#A2A2A2"></Fontiso>
                            <TextInput style={style.input} placeholder="My Email" placeholderTextColor='white'></TextInput>
                        </View>
                        <Text style={style.description}>Text me order updates (optional)</Text>
                        <View style={[style.inputcontainer,{marginTop:5}]}>
                            <TextInput style={style.input}></TextInput>
                        </View>
                        <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                            <TouchableOpacity style={style.checkbox} onPress={()=>setchecked(!checked)}>
                                {
                                    checked && (
                                        <Feather name="check" color="#F6AA11" size={RFValue(25,580)}></Feather>
                                    )
                                }
                            </TouchableOpacity>
                            <Text style={[style.description,{marginLeft:5}]}>Hide this video from "Piolin" a profile</Text>
                        </View>
                        <TouchableOpacity style={style.continuebtn} onPress={()=>navigation.goBack()}>
                            <View style={{width:RFValue(25,580)}}></View>
                            <Text style={style.btntext}>Continue</Text>
                            <AntDesign name="arrowright" color="white" size={RFValue(25,580)}></AntDesign>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#101010'
    },
    header:{
        padding:24,
        paddingBottom:10
    },
    topheader:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    contentprofile:{
        paddingLeft:24,
        paddingRight:24,
        paddingBottom:10,
    },
    headertitle:{
        fontSize:RFValue(18,580),
        color:'white',
        fontFamily:'Quicksand-Medium'
    },
    title:{
        fontSize:RFValue(19,580),
        color:'#C9C9C9',
        fontFamily:'Quicksand-Medium',
        marginTop:5
    },
    infotitle:{
        color:'white',
        fontSize:RFValue(12,580),
        fontFamily:"Quicksand-Medium",
        textAlign:'center'
    },
    btninfo:{
        width:wp('13.28'),
        height:wp('13.28'),
        borderRadius:wp('6.64'),
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#F6AA11',
        borderWidth:1
    },
    iteminfo:{
        fontSize:RFValue(9,580),
        color:'#C9C9C9',
        fontFamily:"Quicksand-Medium",
        marginTop:5
    },
    content:{
        padding:24,
        paddingTop:10
    },
    label:{
        fontSize:RFValue(15,580),
        color:'white',
        fontFamily:'Quicksand-Medium',
        marginBottom:9
    },
    inputcontainer:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#252525',
        shadowColor:'black',
        shadowOpacity:0.16,
        shadowRadius:5,
        shadowOffset:{
            height:3,
            width:0
        },
        borderRadius:28,
        paddingLeft:15,
        paddingRight:15,
        alignItems:'center',
        marginBottom:16
    },
    input:{
        fontSize:RFValue(16,580),
        flex:1,
        fontFamily:'Montserrat-Regular'
    },
    description:{
        fontSize:RFValue(15,580),
        color:'white',
        fontFamily:'Quicksand-Regular'
    },
    continuebtn:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#F6AA11',
        paddingLeft:24,
        paddingRight:24,
        paddingTop:15,
        paddingBottom:15,
        borderRadius:35,
        marginTop:15,
        marginBottom:40
    },
    btntext:{
        fontSize:RFValue(18,580),
        color:'white',
        fontFamily:'Montserrat-Medium',
    },
    checkbox:{
        width:wp('7.2'),
        height:wp('7.2'),
        backgroundColor:'#252525',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    }
})