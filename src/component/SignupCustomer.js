import React,{useState} from 'react'
import {View,ImageBackground,StyleSheet,KeyboardAvoidingView,Image,TouchableOpacity,Text,TextInput} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import CheckBox from '@react-native-community/checkbox' 
import Modal from 'react-native-modal'
export default function SignupCustomer({role,navigation})
{
    const [checked,setchecked] = useState(false)
    const [modal,setmodal] = useState(false)

    const signup = () => {
        if(role == 'influencer')
        {
            setmodal(true)
        }
        else
        {
            navigation.navigate('Login');
        }
    }
    return (
        <View style={style.container}>
             <View style={style.inputcontainer}>
                <Feather name="user" size={RFValue(25,580)} color="white"></Feather>
                <TextInput placeholder="Full Name" placeholderTextColor="white" style={style.input}></TextInput>
            </View>
            <View style={style.inputcontainer}>
                <Feather name="user" size={RFValue(25,580)} color="white"></Feather>
                <TextInput placeholder="Username" placeholderTextColor="white" style={style.input}></TextInput>
            </View>
            <View style={style.inputcontainer}>
                <EvilIcons name="envelope" size={RFValue(25,580)} color="white"></EvilIcons>
                <TextInput placeholder="Email" placeholderTextColor="white" style={style.input}></TextInput>
            </View>
            <View style={style.inputcontainer}>
                <SimpleLineIcons name="lock" size={RFValue(22,580)} color="white"></SimpleLineIcons>
                <TextInput placeholder="Password" placeholderTextColor="white" style={style.input} secureTextEntry={true}></TextInput>
            </View>
            <View style={style.inputcontainer}>
                <SimpleLineIcons name="lock" size={RFValue(22,580)} color="white"></SimpleLineIcons>
                <TextInput placeholder="Confirm Password" placeholderTextColor="white" style={style.input} secureTextEntry={true}></TextInput>
            </View>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginLeft:10,marginRight:10}}>
                <TouchableOpacity style={style.checkbox} onPress={()=>setchecked(!checked)}>
                    {
                        checked && (
                            <Feather name="check" color='#F6AA11' size={RFValue(25,580)}></Feather>
                        )
                    }
                </TouchableOpacity>
                <Text style={[style.termtext,{marginLeft:15}]}>I agree with </Text>
                <Text style={[style.termtext,{color:'#F6AA11',textDecorationColor:'#F6AA11',textDecorationLine:'underline'}]}>terms and conditions</Text>
            </View>
            <TouchableOpacity style={style.btncontainer} onPress={signup}>
                <View style={{width:RFValue(16,580)}}></View>
                <Text style={style.btntext}>Signup</Text>
                <Feather name="arrow-right" color="white" size={RFValue(16,580)}></Feather>
            </TouchableOpacity>
            <View style={{flexDirection:'row',display:'flex',alignItems:'center',marginTop:hp('2%')}}>
                <View style={{flex:1,height:1,backgroundColor:'#B6B6B6'}}></View>
                <Text style={{fontSize:RFValue(16,580),color:"#C2C2C2",marginLeft:10,marginRight:10,fontFamily:'din1451alt_G'}}>Quick signup in with</Text>
                <View style={{flex:1,height:1,backgroundColor:'#B6B6B6'}}></View>
            </View>
            <View style={{flexDirection:'row',marginTop:hp('2%'),justifyContent:'space-between',display:'flex',marginBottom:24}}>
                <TouchableOpacity style={[style.socialbtncontainer,{marginRight:15,backgroundColor:'#3D5C9E'}]}>
                    <Text style={[style.btntext,{fontSize:RFValue(14,580),fontFamily:'din1451alt_G'}]}>Signup with</Text>
                    <FontAwesome name="facebook" color="white" size={RFValue(25,580)}></FontAwesome>
                </TouchableOpacity>
                <TouchableOpacity style={[style.socialbtncontainer,{backgroundColor:'#F34336'}]}>
                    <Text style={[style.btntext,{fontSize:RFValue(14,580),fontFamily:'din1451alt_G'}]}>Signup with</Text>
                    <AntDesign name="google" color="white" size={RFValue(25,580)}></AntDesign>
                </TouchableOpacity>
            </View>

            <Modal 
                isVisible={modal}
                onBackdropPress={()=>setmodal(false)}
                >
                <View style={style.modalinside}>
                    <View style={style.securitylogo}>
                        <Image source={require('../assets/images/security.png')}></Image>
                    </View>
                    <Text style={style.description}>Wait Admin Need approve your Account.</Text>
                    <TouchableOpacity style={[style.btncontainer,{width:wp('34.54'),justifyContent:'center'}]} onPress={()=>{setmodal(false); navigation.navigate('Upload')}}>
                        <Text style={style.btntext}>Ok</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}


const style = StyleSheet.create({
    container:{
        marginTop:10,
        marginBottom:24
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
        borderRadius:32,
        elevation:1,
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:15,
        paddingRight:15,
        alignItems:'center',
        marginBottom:16,
        marginLeft:10,
        marginRight:10
    },
    input:{
        fontSize:RFValue(15,580),
        marginLeft:15,
        flex:1,
        fontFamily:'Montserrat-Regular'
    },
    termtext:{
        fontSize:RFValue(14,580),
        fontFamily:'Montserrat-Regular',
        color:'white'
    },
    btncontainer:{
        display:'flex',
        justifyContent:'space-between',
        padding:15,
        backgroundColor:'#F6AA11',
        borderRadius:35,
        flexDirection:'row',
        alignItems:'center',
        marginTop:hp('2.5%')
    },
    btntext:{
        color:'white',
        fontSize:RFValue(18,580),
        fontFamily:'Montserrat-Medium'
    },
    socialbtncontainer:{
        display:'flex',
        justifyContent:'space-between',
        flex:1,
        borderRadius:30,
        flexDirection:'row',
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:25,
        paddingRight:25,
        alignItems:'center'
    },
    modalinside:{
        backgroundColor:'white',
        padding:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:17
    },
    securitylogo:{
        width:wp('27'),
        height:wp('27'),
        borderRadius:wp('13.5'),
        backgroundColor:'#FFF5F7',
        justifyContent:'center',
        alignItems:'center'
    },
    description:{
        fontSize:RFValue(18,580),
        fontFamily:'Quicksand-Medium',
        textAlign:'center',
        marginTop:16
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