import React from 'react'
import {ImageBackground,View,StyleSheet,TouchableOpacity,Text,Image,Slider} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {RFValue} from 'react-native-responsive-fontsize'
import LiveVideo from '../component/LiveVideo'
import Feather from 'react-native-vector-icons/Feather'
import {useDarkMode} from 'react-native-dark-mode'
export default function Episode({navigation})
{
    return (
        <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <AntDesign name="arrowleft" color="white" size={RFValue(25,580)}></AntDesign>
                </TouchableOpacity>
                <Text style={style.headertitle}>Episode</Text>
                <View style={{width:RFValue(25,580)}}></View>
            </View>
            <View style={style.top}>
                <Image source={require('../assets/images/products/ezrazno.png')} style={style.image}></Image>
                <View style={{marginLeft:15}}>
                    <Text style={style.title}>Erazno y La Chokolata</Text>
                    <Text style={style.info}>Revolver Podcasts</Text>
                </View>
            </View>
            <View style={style.episodecontainer}>
                <Text style={style.episodetitle}>Episodes Name</Text>
                <View style={{marginTop:10,marginBottom:10}}>
                    <LiveVideo title="4to Capitulo de..." time="25:00 minuts" navigation={navigation}></LiveVideo>
                </View>
                <Text style={style.description}>4to Capitulo de Choko Salvaje, la ultima parte de el Chokolatazo a Venezuela, parodias, el Doggy y mas 01-28-21</Text>
            </View>
            <View style={{flex:1}}></View>
            <View style={{padding:24,marginBottom:24}}>
                <Text style={[style.title,{fontSize:RFValue(15,580)}]} numberOfLines={1}>4to Capitulo de Choko Salvaje, la ultima...</Text>
                <Text style={[style.description,{fontSize:RFValue(13,580)}]} numberOfLines={1}>Lorem Ipsum is simply dummy text of the printing industry.</Text>
                <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:10}}>
                    <TouchableOpacity style={style.pausebtn}>
                        <Feather name="pause" color="white" size={RFValue(15,580)}></Feather>
                    </TouchableOpacity>    
                    <Slider value={0.3} style={{flex:1}} thumbTintColor="#F6AA11" minimumTrackTintColor="#F6AA11" maximumTrackTintColor="#BEC2CC"></Slider>
                    <Text style={{fontSize:RFValue(12,580),fontFamily:'arial',fontWeight:'bold',color:'#B0B0B0C6',marginLeft:10}}>3:40</Text>
                </View>
                
            </View>
        </View>
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
        alignItems:'center',
        padding:24,
        justifyContent:'space-between'
    },
    headertitle:{
        fontSize:RFValue(18,580),
        color:'white',
        fontFamily:'Quicksand-Medium'
    },
    top:{
        paddingLeft:24,
        paddingBottom:17,
        paddingRight:24,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    image:{
        width:wp('20.77'),
        height:wp('20.77'),
        borderRadius:14
    },
    title:{
        fontSize:RFValue(15,580),
        color:'#B0B0B0',
        fontFamily:'Quicksand-Medium'
    },
    info:{
        fontSize:RFValue(10,580),
        color:'#F6AA11',
        fontFamily:'Quicksand-Medium'
    },
    episodecontainer:{
        padding:24
    },
    episodetitle:{
        color:'#F6AA11',
        fontFamily:'Quicksand-Medium',
        fontSize:RFValue(19,580)
    },
    description:{
        fontSize:RFValue(12,580),
        fontFamily:'Quicksand-Regular',
        color:'#B0B0B0'
    },
    pausebtn:{
        shadowColor:'#F6AA11',
        shadowOpacity:0.3,
        shadowRadius:5,
        shadowOffset:{
            height:2,
            width:0
        },
        elevation:1,
        backgroundColor:'#F6AA11',
        borderRadius:7,
        paddingLeft:2,
        paddingRight:2,
        paddingTop:1,
        paddingBottom:1
    }
})