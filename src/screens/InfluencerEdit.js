import React,{useRef} from 'react'
import {View,StyleSheet,ImageBackground,TouchableOpacity,Text,Image,ScrollView,FlatList,TextInput, KeyboardAvoidingView} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ScalingDrawer from 'react-native-scaling-drawer'
import {RFValue} from 'react-native-responsive-fontsize'
import Sidebar from '../component/Sidebar'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

export default function InfluencerEdit({navigation})
{
    return (
        <KeyboardAvoidingView style={{flex:1}} behavior="height">
            <View style={style.container}>
                <View style={style.header}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Feather name="arrow-left" size={RFValue(25,580)} color="white"></Feather>
                    </TouchableOpacity>
                    <Text style={style.title}>Edit Profile</Text>
                    <TouchableOpacity style={style.righticon}>
                        
                    </TouchableOpacity>
                </View>
                <ScrollView style={{marginTop:15}}>
                    <View style={{marginBottom:24}}>
                        <View style={[style.profileimg,{alignSelf:'center'}]}>
                            <Image source={require('../assets/images/profile.png')} style={style.profileimg}></Image>
                            <TouchableOpacity style={[style.editbtn,{position:'absolute',right:10,bottom:0}]}>
                                <Image source={require('../assets/images/edit.png')} style={{width:wp('3.79'),height:wp('3.79')}}></Image>
                                {/* <FontAwesome name="edit" color="white" size={wp('3.79')}></FontAwesome> */}
                            </TouchableOpacity>
                        </View>
                        <View style={{margin:30}}>
                            <View>
                                <Text style={style.label}>Full Name :</Text>
                                <View style={style.inputcontainer}>
                                    <TextInput style={style.input} placeholder="" placeholderTextColor="#FFFFFFAD"></TextInput>
                                </View>
                            </View>
                            <View style={{marginTop:16}}>
                                <Text style={style.label}>User Name :</Text>
                                <View style={style.inputcontainer}>
                                    <TextInput style={style.input} placeholder="" placeholderTextColor="#FFFFFFAD"></TextInput>
                                </View>
                            </View>
                            <View style={{marginTop:16}}>
                                <Text style={style.label}>Job :</Text>
                                <View style={style.inputcontainer}>
                                    <TextInput style={style.input} placeholder="" placeholderTextColor="#FFFFFFAD"></TextInput>
                                </View>
                            </View>
                            <View style={{marginTop:16}}>
                                <Text style={style.label}>Description :</Text>
                                <View style={style.inputcontainer}>
                                    <TextInput style={style.input} placeholder="" placeholderTextColor="#FFFFFFAD"></TextInput>
                                </View>
                            </View>
                            <View style={{marginTop:16}}>
                                <Text style={style.label}>Address :</Text>
                                <View style={style.inputcontainer}>
                                    <TextInput style={style.input} placeholder="Full Address" placeholderTextColor="#FFFFFFAD"></TextInput>
                                </View>
                                <View style={style.inputcontainer}>
                                    <TextInput style={style.input} placeholder="Apartment, Suite ,etc (Optional)" placeholderTextColor="#FFFFFFAD"></TextInput>
                                </View>
                                <View style={{display:'flex',flexDirection:'row'}}>
                                    <View style={[style.inputcontainer,{marginRight:15,flex:1}]}>
                                        <TextInput style={style.input} placeholder="City" placeholderTextColor="#FFFFFFAD"></TextInput>
                                    </View>
                                    <View style={[style.inputcontainer,{flex:1}]}>
                                        <TextInput style={style.input} placeholder="State" placeholderTextColor="#FFFFFFAD"></TextInput>
                                    </View>
                                </View>
                                <View style={{display:'flex',flexDirection:'row'}}>
                                    <View style={[style.inputcontainer,{marginRight:15,flex:1}]}>
                                        <TextInput style={style.input} placeholder="Country" placeholderTextColor="#FFFFFFAD"></TextInput>
                                    </View>
                                    <View style={[style.inputcontainer,{flex:1}]}>
                                        <TextInput style={style.input} placeholder="PostalCode" placeholderTextColor="#FFFFFFAD"></TextInput>
                                    </View>
                                </View>
                            </View>
                            <View style={style.pricecontainer}>
                                <Text style={[style.label,{fontSize:RFValue(18,580)}]}>Price</Text>
                                <View style={{display:'flex',flexDirection:'row',marginTop:15}}>
                                    <View style={{flex:1,marginRight:9}}>
                                        <Text style={style.pricelabel}>Video Message</Text>
                                        <View style={[style.inputcontainer,{backgroundColor:'black'}]}>
                                            <TextInput style={style.input} placeholder="Video Message" placeholderTextColor="#FFFFFFAD" value='$500'></TextInput>
                                        </View>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text style={style.pricelabel}>Cafecito</Text>
                                        <View style={[style.inputcontainer,{backgroundColor:'black'}]}>
                                            <TextInput style={style.input} placeholder="PostalCode" placeholderTextColor="#FFFFFFAD" value="$30"></TextInput>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity style={style.save_btn} onPress={()=>navigation.navigate('MyProfileView')}>
                                <View style={{width:RFValue(25,580)}}></View>
                                <Text style={style.btntext}>Save</Text>
                                <AntDesign color="white" size={RFValue(25,580)} name="check"></AntDesign>
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
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:24,
        paddingRight:24,
        paddingTop:24
    },
    righticon:{
        width:wp('9%'),
        height:wp('9%'),
        borderRadius:wp('5%'),
        justifyContent:'center',
        alignItems:'center',
    },
    headertitle:{
        fontSize:RFValue(22,580)
    },
    title:{
        fontSize:RFValue(18,580),
        color:'white',
        fontFamily:'Quicksand-Medium'
    },
    inputcontainer:{
        display:'flex',
        flexDirection:'row',
        paddingLeft:25,
        paddingRight:25,
        paddingTop:3,
        paddingBottom:3,
        backgroundColor:'#252525',
        borderRadius:100,
        alignItems:'center',
        shadowColor:'black',
        shadowOpacity:0.16,
        elevation:1,
        shadowOffset:{
            height:3,
            width:0
        },
        shadowRadius:5,
        marginTop:10
    },
    profileimg:{
        width:wp('28.5'),
        height:wp('28.5'),
        borderRadius:wp('14')
    },
    editbtn:{
        width:wp('7.72'),
        height:wp('7.72'),
        borderRadius:wp('3.8'),
        backgroundColor:'#F6AA11',
        justifyContent:'center',
        alignItems:'center'
    },
    label:{
        fontSize:RFValue(13,580),
        color:'white',
        fontFamily:'Quicksand-Medium'
    },
    input:{
        fontSize:RFValue(14,580),
        fontFamily:'Quicksand-Medium',
        color:'white',
        flex:1
    },
   save_btn:{
       borderRadius:35,
       backgroundColor:'#F6AA11',
       paddingTop:15,
       paddingBottom:15,
       paddingLeft:24,
       paddingRight:24,
       display:'flex',
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       marginTop:28
   },
   btntext:{
       color:'white',
       fontSize:RFValue(18,580),
       fontFamily:'Montserrat-Medium'
   },
   pricecontainer:{
       borderRadius:29,
       backgroundColor:'#252525',
       padding:20,
       paddingTop:16,
       paddingBottom:16,
       marginTop:15
   },
   pricelabel:{
       fontSize:RFValue(12,580),
       color:'#F6AA11',
       fontFamily:'Quicksand-Medium'
   }
})