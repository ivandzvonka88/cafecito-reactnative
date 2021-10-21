import React from 'react'
import {View,StyleSheet,ImageBackground,TextInput,Text,Image,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {RFValue} from 'react-native-responsive-fontsize'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontiso from 'react-native-vector-icons/Fontisto'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MessageItem from '../component/MessageItem'
import {useSelector} from 'react-redux'
import {Switch} from 'react-native-switch'
import OctIcons from 'react-native-vector-icons/Octicons'
export default function ChatRoom({navigation})
{
    const {role} = useSelector(state=>state.auth)

    const profiles = [require('../assets/images/profile.png'),require('../assets/images/profile/profile19.png'),require('../assets/images/profile/profile20.png'),require('../assets/images/profile/profile21.png'),require('../assets/images/profile/profile22.png')]
    
    const data = [
        {message:"User Requested Video message",image:require('../assets/images/profile/profile23.png')},
        {message:"User Join",image:require('../assets/images/profile/profile24.png')},
        {message:"How are you?",image:require('../assets/images/profile/profile4.png')}
    ]
    return (
        <View style={style.container}>
            <ImageBackground style={{flex:1}} source={require('../assets/images/background.png')}>
                <View style={{flex:1,padding:24,backgroundColor:'#00000051'}}>
                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={style.title}>Action series</Text>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <FontAwesome name="times-circle-o" size={RFValue(22,580)} color="white"></FontAwesome>
                        </TouchableOpacity>
                    </View>
                    <View style={{display:'flex',flexDirection:'row'}}>
                        {
                            profiles.map((item,index)=>{
                                return (
                                    <TouchableOpacity key={index} style={style.profile}>
                                        <Image source={item} style={style.profile}></Image>
                                        <Text style={style.dot}></Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                    <View style={{display:'flex',flexDirection:'row',marginTop:10}}>
                        <TouchableOpacity style={style.camerabtn}>
                            <Feather name="video" color="white" size={RFValue(18,580)}></Feather>
                            <Text style={[style.btntext,{marginLeft:3}]}>$500</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[style.camerabtn,{marginLeft:10,backgroundColor:'black'}]}>
                            <Image source={require('../assets/images/coffee.png')}></Image>
                            <Text style={[style.btntext,{marginLeft:3}]}>$200</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{flex:1}} contentContainerStyle={{flex:1,flexDirection:'column-reverse'}}>
                        {
                            data.map((item,index)=>{
                                return <MessageItem image={item.image} message={item.message} key={index}></MessageItem>
                            })
                        }
                    </ScrollView>
                    <View style={{flexDirection:'row',display:'flex',marginTop:10}}>
                        <TouchableOpacity style={style.btn} onPress={()=>navigation.navigate('Chat')}>
                            <MaterialIcons name="chat-bubble-outline" color="white" size={RFValue(18,580)}></MaterialIcons>
                            <Text style={[style.btntext,{fontSize:RFValue(14,580),marginLeft:10}]}>Chat</Text>
                        </TouchableOpacity>
                        {
                            role == 'influencer' ? (
                                <>
                                    <TouchableOpacity style={[style.btn,{backgroundColor:'#0000007A',marginLeft:10}]}>
                                        <Feather name="camera" color="white" size={RFValue(25,580)} style={{marginRight:10}}></Feather>
                                        <Switch 
                                            circleSize={18} 
                                            barHeight={20}
                                            circleBorderWidth={0}  
                                            circleActiveColor="#F6AA11" 
                                            circleInActiveColor="#858585"
                                            switchLeftPx={3}
                                            switchRightPx={3}
                                            backgroundActive="white"
                                            backgroundInactive="white"
                                            switchWidthMultiplier={2}
                                            switchBorderRadius={30}
                                            renderActiveText={false}
                                            renderInActiveText={false}
                                            value={true}
                                        ></Switch>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[style.btn,{backgroundColor:'#0000007A',marginLeft:10}]}>
                                        <Feather name="volume-2" color="white" size={RFValue(25,580)} style={{marginRight:10}}></Feather>
                                        <Switch 
                                            circleSize={18} 
                                            barHeight={20}
                                            circleBorderWidth={0}  
                                            circleActiveColor="#F6AA11" 
                                            circleInActiveColor="#858585"
                                            switchLeftPx={3}
                                            switchRightPx={3}
                                            backgroundActive="white"
                                            backgroundInactive="white"
                                            switchWidthMultiplier={2}
                                            switchBorderRadius={30}
                                            renderActiveText={false}
                                            renderInActiveText={false}
                                            value={false}
                                        ></Switch>
                                    </TouchableOpacity>
                                </>
                            ):(
                                <TouchableOpacity style={[style.btn,{backgroundColor:'#464646',marginLeft:10}]} onPress={()=>navigation.navigate('Request')}>
                                    <Feather name="git-pull-request" color="white" size={RFValue(18,580)}></Feather>
                                    <Text style={[style.btntext,{fontSize:RFValue(14,580),marginLeft:10}]}>Request</Text>
                                </TouchableOpacity>
                            )
                        }
                        
                    </View>
                </View>
            </ImageBackground>
            <View style={style.chatcontainer}>
                <Fontiso color="#BFC4D3" size={RFValue(23,580)} name="smiley"></Fontiso>
                <TextInput style={{flex:1,marginLeft:15,marginRight:15}} placeholder="Send Chat" placeholderTextColor='white'></TextInput>
                <TouchableOpacity>
                    <IonIcons name="send" color="#F6AA11" size={RFValue(23,580)}></IonIcons>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1
    },
    chatcontainer:{
        backgroundColor:'#2B2A29',
        display:'flex',
        flexDirection:'row',
        paddingLeft:15,
        paddingRight:15,
        paddingTop:5,
        paddingBottom:5,
        alignItems:'center'
    },
    title:{
        fontSize:RFValue(22,580),
        color:'white',
        fontFamily:'Quicksand-Medium'
    },
    profile:{
        width:wp('11.6'),
        height:wp('11.6'),
        borderRadius:wp('5.8'),
        marginRight:3,
        position:'relative'
    },
    dot:{
        position:'absolute',
        right:0,
        top:5,
        width:10,
        height:10,
        borderRadius:5,
        backgroundColor:'#84C857',
        zIndex:10
    },
    camerabtn:{
        paddingLeft:10,
        paddingRight:10,
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:'#F6AA11',
        borderRadius:16,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    btntext:{
        color:'white',
        fontSize:RFValue(15,580),
        fontFamily:'Quicksand-Medium'
    },
    btn:{
        paddingLeft:15,
        paddingRight:15,
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:'#F6AA11',
        borderRadius:30,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        shadowOpacity:0.16,
        shadowRadius:5,
        shadowOffset:{
            height:3,
            width:0
        },
        elevation:20
    }
})