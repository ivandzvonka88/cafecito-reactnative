import React,{useState} from 'react';
import {View,ImageBackground,StyleSheet,KeyboardAvoidingView,Image,TouchableOpacity,Text} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen' 
import Collapsible from 'react-native-collapsible'

export default function Help({navigation})
{
    const [collapsed,setcollapsed] = useState([true,true])
    
    return (
            <View style={style.container}>
                <View style={{marginBottom:24}}>
                    <View style={style.header}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Feather name="arrow-left" size={RFValue(25,580)} color='white'></Feather>
                        </TouchableOpacity>
                        <Text style={style.headertitle}>Help</Text>
                        <View style={{width:RFValue(25,580)}}></View>
                    </View>
                    <TouchableOpacity style={style.btncontainer}>
                        <AntDesign name="questioncircleo" color='white' size={wp('19.08')}></AntDesign>
                    </TouchableOpacity>
                    <View style={{marginTop:24,marginBottom:48}}>
                        <View style={style.inputcontainer}>
                            <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                <Text style={style.title}>Introduction</Text>
                                <TouchableOpacity onPress={()=>setcollapsed([!collapsed[0],collapsed[1]])}>
                                    <AntDesign name={collapsed[0]?"right":"down"} color="#B1B1B1" size={RFValue(20,580)}></AntDesign>
                                </TouchableOpacity>
                            </View>
                            <Collapsible collapsed={collapsed[0]}>
                                <Text style={style.content}>A Paragraph of text with on <Text style={style.link}>unassigned link</Text></Text>
                                <Text style={style.content}>A second row of text with a <Text style={style.link}>web link</Text></Text>
                            </Collapsible>
                        </View>
                        <View style={style.inputcontainer}>
                            <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                <Text style={style.title}>How To Use</Text>
                                <TouchableOpacity onPress={()=>setcollapsed([collapsed[0],!collapsed[1]])}>
                                    <AntDesign name={collapsed[1]?"right":"down"} color="#B1B1B1" size={RFValue(20,580)}></AntDesign>
                                </TouchableOpacity>
                            </View>
                            <Collapsible collapsed={collapsed[1]}>
                                <Text style={style.content}>A Paragraph of text with on <Text style={style.link}>unassigned link</Text></Text>
                                <Text style={style.content}>A second row of text with a <Text style={style.link}>web link</Text></Text>
                            </Collapsible>
                        </View>
                    </View>
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
        borderRadius:8,
        elevation:2,
        padding:15,
        marginBottom:16,
        marginLeft:10,
        marginRight:10
    },
    btncontainer:{
        marginTop:30,
        width:wp('39'),
        height:wp('39'),
        borderRadius:wp('20'),
        backgroundColor:'#F6AA11',
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
        color:'white',
        fontFamily:'Quicksand-Medium',
        fontSize:RFValue(12,580),
        alignItems:'center'
    }
})