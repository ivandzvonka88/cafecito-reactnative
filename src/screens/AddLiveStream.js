import React,{useRef, useState} from 'react'
import {View,StyleSheet,TouchableOpacity,Text,Image,ScrollView,FlatList,TextInput} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ScalingDrawer from 'react-native-scaling-drawer'
import {RFValue} from 'react-native-responsive-fontsize'
import Sidebar from '../component/Sidebar'
import AntDesign from 'react-native-vector-icons/AntDesign'
import PodCastItem from '../component/PodCastDetail'
import {useSelector} from 'react-redux'
import Feather from 'react-native-vector-icons/Feather'
import BottomNavigation from '../component/BottomNavigation'
import Radio from '../component/Radio'

export default function AddLiveStream({navigation})
{
    let drawer = useRef(null)

    const {role} = useSelector(state=>state.auth)

    const [selected,setselected] = useState("video")
    return (
        <ScalingDrawer
            tapToClose={true}
            minimizeFactor={0.7}
            swipeOffset={10}
            scalingFactor={1}
            content={<Sidebar navigation={navigation}></Sidebar>}
            ref={ref =>drawer = ref}
        >
            <View style={style.container}>
                <View style={style.header}>
                    <TouchableOpacity onPress={()=>drawer.open()}>
                        <Image source={require('../assets/images/darkmode/menu.png')}></Image>
                    </TouchableOpacity>
                    <Text style={style.title}>Cafecito en Vivo</Text>
                    <TouchableOpacity style={style.righticon} onPress={()=>navigation.navigate('Chat')}>
                        <Image source={require('../assets/images/chat.png')}></Image>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{marginTop:15,flex:1}} showsVerticalScrollIndicator={false}>
                    <View>
                       <View style={style.uploadcontainer}>
                            <Feather name="image" color="#F6AA11" size={RFValue(37,580)}></Feather>
                            <TouchableOpacity style={style.uploadimg}>
                                <Text style={style.uploadtext}>Add Image</Text>
                            </TouchableOpacity>
                       </View>
                       <View style={{marginTop:24}}>
                           <Text style={style.label}>Title</Text>
                           <View style={style.inputcontainer}>
                               <TextInput style={{flex:1}} placeholder="Title" placeholderTextColor="white"></TextInput>
                           </View>
                           <Text style={[style.label,{marginTop:15}]}>Guests Limit</Text>
                           <View style={[style.quantitycontainer,{marginBottom:30}]}>
                                <TouchableOpacity>
                                    <AntDesign color="#F6AA11" name="minus" size={RFValue(15,580)}></AntDesign>
                                </TouchableOpacity>
                                <Text style={style.input}>01</Text>
                                <TouchableOpacity>
                                    <AntDesign color="#F6AA11" name="plus" size={RFValue(15,580)}></AntDesign>
                                </TouchableOpacity>
                            </View>
                            <View style={[style.uploadcontainer,{alignItems:'baseline'}]}>
                                <Text style={style.label}>Live Method</Text>
                                <View style={{display:'flex',flexDirection:'row',marginTop:15}}>
                                    <View>
                                        <Radio label="Video" setchecked={()=>setselected('video')} checked={selected == "video"}></Radio>
                                    </View>
                                    <View style={{marginLeft:25}}>
                                        <Radio label="Audio" setchecked={()=>setselected('audio')} checked={selected == "audio"}></Radio>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity style={style.addbtn} onPress={()=>navigation.navigate('ChatRoom')}>
                                <View style={{width:RFValue(16,580)}}></View>
                                <Text style={style.btntext}>Go Live</Text>
                                <Feather name="arrow-right" color="white" size={RFValue(16,580)}></Feather>
                            </TouchableOpacity>
                       </View>
                    </View>
                </ScrollView>
            </View>
            
       </ScalingDrawer> 
    )
}


const style = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:'#101010'
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    righticon:{
        width:wp('9%'),
        height:wp('9%'),
        borderRadius:wp('5%'),
        justifyContent:'center',
        alignItems:'center'
    },
    headertitle:{
        fontSize:RFValue(22,580)
    },
    title:{
        fontSize:RFValue(18,580),
        color:'#D5D5D5',
        fontFamily:'Quicksand-Medium'
    },
    inputcontainer:{
        display:'flex',
        flexDirection:'row',
        paddingLeft:25,
        paddingRight:25,
        backgroundColor:'#252525',
        borderRadius:28,
        marginTop:20,
        alignItems:'center',
        shadowColor:'black',
        shadowOpacity:0.16,
        shadowOffset:{
            height:3,
            width:0
        },
        shadowRadius:5,
        marginTop:10
    },
    addbtn:{
        display:'flex',
        justifyContent:'space-between',
        padding:15,
        backgroundColor:'#F6AA11',
        borderRadius:35,
        flexDirection:'row',
        alignItems:'center',
        marginTop:22
    },
    uploadcontainer:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        padding:25,
        backgroundColor:'#252525'
    },
    uploadimg:{
        borderWidth:1,
        borderRadius:17,
        borderColor:'#F6AA11',
        paddingLeft:24,
        paddingRight:24,
        paddingTop:5,
        paddingBottom:5,
        marginTop:15
    },
    uploadtext:{
        fontFamily:'Quicksand-Medium',
        fontSize:RFValue(12,580),
        color:'#F6AA11'
    },
    label:{
        fontSize:RFValue(12,580),
        color:'white',
        fontFamily:'Quicksand-Medium'
    },
    quantitycontainer:{
        padding:15,
        paddingLeft:15,
        paddingRight:15,
        width:wp('36'),
        borderRadius:28,
        backgroundColor:'#252525',
        marginTop:15,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        shadowColor:'black',
        shadowOpacity:0.16,
        shadowOffset:{
            height:3,
            width:0
        },
        shadowRadius:5
    },
    input:{
        fontSize:RFValue(15,580),
        borderWidth:0,
        textAlign:'center',
        color:'white'
    },
    btntext:{
        color:'white',
        fontSize:RFValue(18,580),
        fontFamily:'Montserrat-Medium'
    }
})
