import React,{useRef} from 'react'
import {View,StyleSheet,TextInput,TouchableOpacity,Image,Text,ScrollView,KeyboardAvoidingView} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import ScalingDrawer from 'react-native-scaling-drawer'
import Sidebar from '../component/Sidebar'
import Feather from 'react-native-vector-icons/Feather'
import {useDarkMode} from 'react-native-dark-mode'
export default function Conditions({navigation})
{
    let drawer = useRef(null)
    const userinfo = {
        phone:"(343) 233 2242",
        address:"Cafecito 114 Dallas Parkway, Suite 430 Dallas, Texas 75254",
        email:"Doniel Jane@gmail.com"
    }

    const message = {
        subject:"Lorem Ipsum is simply dummy.",
        message:"Lorem Ipsum is simply"
    }
    return (
        <ScalingDrawer
            tapToClose={true}
            minimizeFactor={0.7}
            swipeOffset={10}
            scalingFactor={1}
            content={<Sidebar navigation={navigation}></Sidebar>}
            ref={ref =>drawer = ref}
        >
            <KeyboardAvoidingView style={style.container} behavior="height">
                <View style={style.container}>
                    <View style={style.header}>
                        <TouchableOpacity onPress={()=>drawer.open()}>
                            <Image source={require('../assets/images/darkmode/menu.png')}></Image>
                        </TouchableOpacity>
                        <Text style={style.title}>Contact Us</Text>
                        <TouchableOpacity style={style.righticon}>

                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        <View>
                            <View style={style.content}>
                                <View>
                                    <Text style={style.label}>By Phone:</Text>
                                    <View style={style.inputcontainer}>
                                        <TextInput style={style.input} placeholderTextColor="#A2A2A2" defaultValue={userinfo.phone}></TextInput>
                                    </View>
                                </View>
                                <View>
                                    <Text style={style.label}>By Mail:</Text>
                                    <View style={style.inputcontainer}>
                                        <TextInput style={style.input} placeholderTextColor="#A2A2A2" defaultValue={userinfo.address} multiline={true}></TextInput>
                                    </View>
                                </View>
                                <View>
                                    <Text style={style.label}>By Email:</Text>
                                    <View style={style.inputcontainer}>
                                        <TextInput style={style.input} placeholderTextColor="#A2A2A2" defaultValue={userinfo.email}></TextInput>
                                    </View>
                                </View>
                            </View>
                            <View style={style.form}>
                                <Text style={style.formtitle}>Submit form</Text>
                                <View style={{marginTop:10}}>
                                    <Text style={style.label}>Subject</Text>
                                    <View style={style.inputcontainer}>
                                        <TextInput style={style.input} placeholderTextColor="#A2A2A2" defaultValue={message.subject}></TextInput>
                                    </View>
                                </View>
                                <View style={{marginTop:10}}>
                                    <Text style={style.label}>Comment</Text>
                                    <View style={style.inputcontainer}>
                                        <TextInput style={style.input} placeholderTextColor="#A2A2A2" defaultValue={message.message} multiline={true} numberOfLines={5} textAlignVertical="top"></TextInput>
                                    </View>
                                </View>
                                <TouchableOpacity style={[style.btnsubmit,{marginBottom:50}]}>
                                    <View style={{width:RFValue(25,580)}}></View>
                                    <Text style={style.btntext}>Submit</Text>
                                    <Feather name="check-circle" color="white" size={RFValue(25,580)}></Feather>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                    
                </View>
            </KeyboardAvoidingView>
       </ScalingDrawer> 
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
        padding:24,
        paddingBottom:0
    },
    righticon:{
        width:wp('9%'),
        height:wp('9%'),
        borderRadius:wp('5%'),
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:RFValue(18,580),
        color:'white',
        fontFamily:'Quicksand-Medium'
    },
    content:{
        padding:37
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
        borderRadius:28,
        paddingLeft:15,
        paddingRight:15,
        marginBottom:16,
        marginTop:5,
        display:'flex',
        flexDirection:'row'
    },
    label:{
        fontSize:RFValue(15,580),
        color:'white',
        fontFamily:'arial'
    },
    input:{
        fontFamily:'Montserrat-Medium',
        color:'white',
        fontSize:RFValue(14,580),
        flex:1
    },
    form:{
        padding:24
    },
    formtitle:{
        color:'#F6AA11',
        fontSize:RFValue(16,580),
        fontWeight:'bold',
        fontFamily:'arial',
        borderBottomColor:'#CBCBCB',
        borderBottomWidth:1,
        alignSelf:'center',
        paddingBottom:5
    },
    btnsubmit:{
        paddingLeft:24,
        paddingRight:24,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:'#F6AA11',
        borderRadius:35,
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    btntext:{
        color:'white',
        fontFamily:'Montserrat-Medium',
        fontSize:RFValue(18,580)
    }
})