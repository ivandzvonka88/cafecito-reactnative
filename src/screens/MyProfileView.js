import React,{useRef} from 'react'
import {View,StyleSheet,ImageBackground,TouchableOpacity,Text,Image,ScrollView,FlatList,TextInput} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ScalingDrawer from 'react-native-scaling-drawer'
import {RFValue} from 'react-native-responsive-fontsize'
import Sidebar from '../component/Sidebar'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default function MyProfileView({navigation})
{
    let drawer = useRef(null)
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
                    <Text style={style.title}>My Profile</Text>
                    <TouchableOpacity style={style.righticon} onPress={()=>navigation.navigate('MyProfileEdit')}>
                        <Feather name="edit" color="white" size={wp('5.1')}></Feather>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{marginTop:15}}>
                    <View style={{marginBottom:15}}>
                        <View style={[style.profileimg,{alignSelf:'center'}]}>
                            <Image source={require('../assets/images/profile.png')} style={style.profileimg}></Image>
                        </View>
                        <View style={{margin:39,marginBottom:0}}>
                            <View>
                                <Text style={style.label}>Full Name:</Text>
                                <Text style={style.labelinfo}>Mariana Pliego</Text>
                            </View>
                            <View>
                                <Text style={style.label}>User Name:</Text>
                                <Text style={style.labelinfo}>Mariana009</Text>
                            </View>
                            <View>
                                <Text style={style.label}>Bio:</Text>
                                <Text style={style.labelinfo}>Professional</Text>
                            </View>
                            <View>
                                <Text style={style.label}>Address:</Text>
                                <Text style={style.labelinfo}>73  rue du Président Roosevelt</Text>
                            </View>
                            <View>
                                <Text style={style.label}>Birthday:</Text>
                                <Text style={style.labelinfo}>03/05/1989</Text>
                            </View>
                        </View>
                        <View style={{padding:38}}>
                            <TouchableOpacity style={style.inputcontainer} onPress={()=>navigation.navigate('PaymentMethod')}>
                                <AntDesign name="creditcard" color='#C9C9C9' size={RFValue(22,580)}></AntDesign>
                                <Text style={style.iteminfo}>Payment Methods</Text>
                                <AntDesign name="right" color="#B1B1B1" size={RFValue(15,580)}></AntDesign>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.inputcontainer} onPress={()=>navigation.navigate('Account')}>
                                <Feather name="user-check" color='#C9C9C9' size={RFValue(22,580)}></Feather>
                                <Text style={style.iteminfo}>Account</Text>
                                <AntDesign name="right" color="#B1B1B1" size={RFValue(15,580)}></AntDesign>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.inputcontainer} onPress={()=>navigation.navigate('MyVideo')}>
                                <Feather name="video" color='#C9C9C9' size={RFValue(22,580)}></Feather>
                                <Text style={style.iteminfo}>My Videos</Text>
                                <AntDesign name="right" color="#B1B1B1" size={RFValue(15,580)}></AntDesign>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.inputcontainer} onPress={()=>navigation.navigate('MyRequest')}>
                                <MaterialIcons name="chat-bubble-outline" color='#C9C9C9' size={RFValue(22,580)}></MaterialIcons>
                                <Text style={style.iteminfo}>My Requests</Text>
                                <AntDesign name="right" color="#B1B1B1" size={RFValue(15,580)}></AntDesign>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.inputcontainer} onPress={()=>navigation.navigate('PaymentHistory')}>
                                <Image source={require('../assets/images/darkmode/credit-card.png')} style={{width:RFValue(29,580),height:RFValue(22,580)}}></Image>
                                <Text style={style.iteminfo}>Payment History</Text>
                                <AntDesign name="right" color="#B1B1B1" size={RFValue(15,580)}></AntDesign>
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
        width:wp('100%'),
        height:hp('100%'),
        resizeMode:"cover",
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
        backgroundColor:'#F6AA11'
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
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:'#252525',
        borderRadius:32,
        alignItems:'center',
        shadowColor:'black',
        shadowOpacity:0.16,
        shadowOffset:{
            height:3,
            width:0
        },
        shadowRadius:5,
        marginBottom:10
    },
    profileimg:{
        width:wp('28.5'),
        height:wp('28.5'),
        borderRadius:wp('14')
    },
    label:{
        fontSize:RFValue(13,580),
        color:'white',
        fontFamily:'arial',
        marginBottom:3
    },
    labelinfo:{
        fontSize:RFValue(14,580),
        color:'white',
        opacity:0.67,
        fontFamily:'Montserrat-Medium',
        marginBottom:10
    },
    iteminfo:{
        fontFamily:'Montserrat-Medium',
        color:'white',
        fontSize:RFValue(13,580),
        flex:1,
        marginLeft:15
    }    
})