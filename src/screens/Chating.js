import React from 'react'
import {View,ScrollView,ImageBackground,StyleSheet,TouchableOpacity,Image,Text,TextInput,KeyboardAvoidingView} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {RFValue} from 'react-native-responsive-fontsize'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontiso from 'react-native-vector-icons/Fontisto'
import IonIcons from 'react-native-vector-icons/Ionicons'
import MessageReceived from '../component/MessageReceived'
import MessageSend from '../component/MessageSend'
import {useDarkMode} from 'react-native-dark-mode'
export default function Charting({navigation})
{
    const messages = [
        {message:'By the way, did not you see my dog! I present to you Sheldon! 😁',sended:true,images:[require('../assets/images/products/dog.png')],time:'8:13'},
        {message:'Hmm ... Tuesday night, around 19 hours is good for you?',sended:false,time:'8:11',profile:require('../assets/images/profile/profile4.png')},
        {message:'Hi Ashley! Yes with pleasure! Do you prefer when?',sended:true,time:'8:10',received:require('../assets/images/profile/profile4.png')},
        {message:'Hi Cassie! Would you be available for a coffee next week? 😁',sended:false,time:'8:07',profile:require('../assets/images/profile/profile4.png')},
    ]

    return (
        <KeyboardAvoidingView behavior="height" style={style.container}>
            <View style={{flex:1}}>
            
                <View style={{flex:1}}>
                    <View style={style.header}>
                        <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                            <TouchableOpacity onPress={()=>navigation.goBack()}>
                                <Feather name="arrow-left" size={RFValue(25,580)} color="white"></Feather>
                            </TouchableOpacity>
                            <Image source={require('../assets/images/profile/profile4.png')} style={{width:wp('11.11'),height:wp('11.11'),marginLeft:15}}></Image>
                            <Text style={style.profile}>Blair Dota</Text>
                        </View>
                        <View style={{display:'flex',flexDirection:'row'}}>
                            <TouchableOpacity onPress={()=>navigation.navigate('VideoCall')}>
                                <FontAwesome5 name="video" color="#F6AA11" size={RFValue(23,580)}></FontAwesome5>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft:10}} onPress={()=>navigation.navigate('AudioCall')}>
                                <FontAwesome5 name="phone-alt" color="#11D177" size={RFValue(23,580)}></FontAwesome5>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft:10}}>
                                <FontAwesome name="user-circle" color="white" size={RFValue(23,580)}></FontAwesome>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView style={style.content} contentContainerStyle={{padding:24,flexDirection:'column-reverse'}}>
                        {
                            messages.map((item,index)=>{
                                if(item.sended)
                                {
                                    return <MessageSend {...item} key={index}></MessageSend>
                                }
                                else
                                {
                                    return (
                                        <MessageReceived {...item} key={index}></MessageReceived>
                                    )
                                }
                            })
                        }
                    </ScrollView>
                    <View style={style.chatcontainer}>
                        <Fontiso color="#BFC4D3" size={RFValue(23,580)} name="smiley"></Fontiso>
                        <TextInput style={{flex:1,marginLeft:15,marginRight:15}} placeholder="Type something" placeholderTextColor="#C9C9C9"></TextInput>
                        <TouchableOpacity>
                            <IonIcons name="send" color="#F6AA11" size={RFValue(23,580)}></IonIcons>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    </KeyboardAvoidingView>
    )
}



const style = StyleSheet.create({
    header:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        padding:24,
        justifyContent:'space-between'
    },
    profile:{
        fontSize:RFValue(16,580),
        color:'white',
        fontWeight:'bold',
        fontFamily:'arial',
        marginLeft:15
    },
    content:{
        flex:1
    },
    chatcontainer:{
        backgroundColor:'#252525',
        display:'flex',
        flexDirection:'row',
        paddingLeft:15,
        paddingRight:15,
        paddingTop:5,
        paddingBottom:5,
        alignItems:'center'
    },
    container:{
        flex:1,
        backgroundColor:'#101010'
    }
})