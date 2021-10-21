import React from 'react'
import {View,StyleSheet,Text,TouchableOpacity,Image,FlatList} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {RFValue} from 'react-native-responsive-fontsize'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LiveVideo from '../component/LiveVideo'
import {useSelector} from 'react-redux'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export default function PodCastDetail({navigation})
{
    const {role} = useSelector(state=>state.auth)
    const videodata = [
        {title:"4to Capitulo de Choko...",time:'2 hr 13min'},
        {title:'El Capitulo 3 de Choko...',time:'2 hr 23 min'},
        {title:'Hoy el Capitulo 2 de...',time:'2 hr 18 min'}
    ]
    return (
        <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <AntDesign name="arrowleft" color="white" size={RFValue(25,580)}></AntDesign>
                </TouchableOpacity>
                <Text style={style.headertitle}>Erazno y La Chokolata</Text>
                <TouchableOpacity style={style.righticon} onPress={()=>navigation.goBack()}>
                    {
                        role == 'influencer' && (
                            <AntDesign name="closecircleo" size={RFValue(21,580)} color="#F6AA11"></AntDesign>
                        )
                    }
                </TouchableOpacity>
            </View>
            <View style={{marginTop:15,flex:1}}>
                <View style={{flex:1}}>
                    <View style={style.top}>
                        <Image source={require('../assets/images/products/ezrazno.png')} style={style.logo} resizeMode="cover"/>
                        <View style={{marginLeft:26}}>
                            <Text style={style.title}>Erazno y La Chokolata</Text>
                            <Text style={style.info}>Revolver Podcasts</Text>
                            <View style={{marginTop:10,display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                                <TouchableOpacity style={style.tagbtn}>
                                    <Text style={style.tagtext}>Comedy</Text>
                                </TouchableOpacity>
                            </View>
                            {
                                role == 'influencer' && (
                                    <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>
                                        <FontAwesome name="feed" color="white" size={RFValue(9,580)}></FontAwesome>
                                        <Text style={[style.info,{marginLeft:5}]}>RSS Feed</Text>
                                    </View>
                                    
                                )   
                            }
                        </View>
                    </View>
                    <View style={{flex:1,overflow:'hidden',padding:24}}>
                        <Text style={style.content}>
                        reVolver came into being in 2005 when a forward-thinking team of radio executives leveraged their relationships in the entertainment space to develop an innovative technology content platform. Operating with a talent-first mentality, the group pooled resources to create and collaborate on unique programming, designed to connect with the ever-growing U.S. Hispanic market.
                        {'\n'}
                        The resulting digital audio network is now a global media platform with creators, subscribers and fans around the world. Our programming encompasses virtually every interest and topic imaginable. At the same time, we offer powerful new revenue models for content publishers as well as effective marketing opportunities for advertisers.
                        {'\n'}
                        reVolver is a leader in on-demand audio geared towards multicultural consumers.  If you’d like to take advantage of the incredible exposure our platform delivers, we’d be happy to share more information with you.
                        </Text>
                    </View>
                </View>
                <View style={{flex:1,padding:24}}>
                    <Text style={style.contenttitle}>60 Episodes</Text>
                    <FlatList
                        data={videodata}
                        showsVerticalScrollIndicator={false}
                        style={{marginTop:15}}
                        keyExtractor={({item,index})=>index}
                        renderItem={({item,index})=><LiveVideo key={index} {...item} navigation={navigation}></LiveVideo>}
                    ></FlatList>
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
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:24,
        paddingRight:24,
        paddingTop:24,
        paddingBottom:0
    },
    righticon:{
        width:wp('9%'),
        height:wp('9%'),
        borderRadius:wp('5%'),
        justifyContent:'center',
        alignItems:'center'
    },
    headertitle:{
        fontSize:RFValue(18,580),
        color:'white',
        fontFamily:'Quicksand-Medium'
    },
    logo:{
        width:wp('27.05'),
        height:wp('27.05'),
        borderRadius:14,
        resizeMode:"cover"
    },
    top:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:24,
        paddingRight:24
    },
    title:{
        fontSize:RFValue(15,580),
        color:'white',
        fontFamily:'Quicksand-Medium'
    },
    info:{
        fontSize:RFValue(10,580),
        fontFamily:'Quicksand-Medium',
        color:'#F6AA11'
    },
    tagbtn:{
        borderColor:'#CECECE',
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:3,
        paddingTop:3,
        borderRadius:11,
        marginRight:10,
        borderWidth:1
    },
    tagtext:{
        color:'#CECECE',
        fontFamily:'Quicksand-Medium',
        fontSize:RFValue(12,580)
    },
    content:{
        fontFamily:'Quicksand-Regular',
        fontSize:RFValue(12,580),
        color:'white'
    },
    contenttitle:{
        fontSize:RFValue(19,580),
        color:'#F6AA11',
        fontFamily:'Quicksand-Medium'
    }
})