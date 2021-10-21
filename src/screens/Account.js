import React from 'react';
import {View,StyleSheet,Image,TouchableOpacity,Text} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen' 
import { ScrollView } from 'react-native-gesture-handler';
import {Switch} from 'react-native-switch'
import {useSelector} from 'react-redux'
export default function Account({navigation})
{
    const {role} = useSelector(state=>state.auth)

    return (
            <View style={style.container}>
                <View style={{marginBottom:24,flex:1}}>
                    <View style={style.header}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Feather name="arrow-left" size={RFValue(25,580)} color='white'></Feather>
                        </TouchableOpacity>
                        <Text style={style.headertitle}>Account</Text>
                        <View style={{width:RFValue(25,580)}}></View>
                    </View>
                    <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
                        <View style={{marginTop:24,marginBottom:48}}>
                            <Text style={[style.title,{marginBottom:10}]}>Email Address</Text>
                            <TouchableOpacity style={style.inputcontainer} onPress={()=>navigation.navigate('Email')}>
                                <Text style={style.title}>test@gmail.com</Text>
                                <AntDesign color="#B1B1B1" name="right" size={RFValue(12,580)}></AntDesign>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.inputcontainer} onPress={()=>navigation.navigate('Password')}>
                                <Text style={style.title}>Update Password</Text>
                                <AntDesign color="#B1B1B1" name="right" size={RFValue(12,580)}></AntDesign>
                            </TouchableOpacity>
                            {
                                role == 'influencer' && (
                                    <TouchableOpacity style={style.inputcontainer}>
                                        <Text style={style.title}>Direct Chat</Text>
                                        <Switch 
                                            circleSize={24} 
                                            barHeight={30}
                                            circleBorderWidth={0}  
                                            circleActiveColor="#F6AA11" 
                                            circleInActiveColor="white"
                                            switchLeftPx={3}
                                            switchRightPx={3}
                                            backgroundActive="#101010"
                                            backgroundInactive="#101010"
                                            switchWidthMultiplier={2}
                                            switchBorderRadius={30}
                                            renderActiveText={false}
                                            renderInActiveText={false}
                                            value={true}
                                        ></Switch>
                                    </TouchableOpacity>
                                )
                            }
                            <TouchableOpacity style={style.inputcontainer}>
                                <Text style={style.title}>Share my Location</Text>
                                <Switch 
                                    circleSize={24} 
                                    barHeight={30}
                                    circleBorderWidth={0}  
                                    circleActiveColor="#F6AA11" 
                                    circleInActiveColor="white"
                                    switchLeftPx={3}
                                    switchRightPx={3}
                                    backgroundActive="#101010"
                                    backgroundInactive="#101010"
                                    switchWidthMultiplier={2}
                                    switchBorderRadius={30}
                                    renderActiveText={false}
                                    renderInActiveText={false}
                                    value={true}
                                ></Switch>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.inputcontainer}>
                                <Text style={style.title}>Notification</Text>
                                <Switch 
                                    circleSize={24} 
                                    barHeight={30}
                                    circleBorderWidth={0}  
                                    circleActiveColor="#F6AA11" 
                                    circleInActiveColor="white"
                                    switchLeftPx={3}
                                    switchRightPx={3}
                                    backgroundActive="#101010"
                                    backgroundInactive="#101010"
                                    switchWidthMultiplier={2}
                                    switchBorderRadius={30}
                                    renderActiveText={false}
                                    renderInActiveText={false}
                                    value={true}
                                ></Switch>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.inputcontainer} onPress={()=>navigation.navigate('Help')}>
                                <Text style={style.title}>Help</Text>
                                <AntDesign color="#B1B1B1" name="right" size={RFValue(12,580)}></AntDesign>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.inputcontainer} onPress={()=>navigation.navigate('Conditions')}>
                                <Text style={style.title}>Terms and Conditions</Text>
                                <AntDesign color="#B1B1B1" name="right" size={RFValue(12,580)}></AntDesign>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.inputcontainer} onPress={()=>navigation.navigate('ContactUs')}>
                                <Text style={style.title}>Contact Us</Text>
                                <AntDesign color="#B1B1B1" name="right" size={RFValue(12,580)}></AntDesign>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.inputcontainer}>
                                <Text style={style.title}>Logout</Text>
                                <AntDesign color="#B1B1B1" name="right" size={RFValue(12,580)}></AntDesign>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    
                </View>
            </View>
    )
}


const style = StyleSheet.create({
    container:{
        flex:1,
        width:wp('100%'),
        height:hp('100%'),
        padding:24,
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
        alignItems:'center'
    },
    headertitle:{
        fontSize:RFValue(18,580),
        fontFamily:'Quicksand-Medium',
        color:'white'
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
        padding:24,
        paddingTop:18,
        paddingBottom:18,
        marginBottom:16,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    btncontainer:{
        marginTop:30,
        width:wp('39'),
        height:wp('39'),
        borderRadius:wp('20'),
        backgroundColor:'#FFF5F7',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    title:{
        fontSize:RFValue(12,580),
        color:'white',
        fontFamily:'Quicksand-Medium'
    },
    link:{
        fontSize:RFValue(12,580),
        color:'#F6AA11',
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
        padding:18,
        backgroundColor:'#F6AA11',
        borderRadius:5
    },
    btntext:{
        color:'white',
        fontFamily:'Montserrat-Medium',
        fontSize:RFValue(18,580)
    }
})