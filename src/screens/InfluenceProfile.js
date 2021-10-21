import React from 'react'
import {View,StyleSheet,ScrollView,TouchableOpacity,Text,Image,FlatList} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {RFValue} from 'react-native-responsive-fontsize'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MyVideoItem from '../component/MyVideoItems'
import ReviewItem from '../component/ReviewItem'

export default function InfluenceProfile({navigation})
{
    const videos = [
        {image:require('../assets/images/products/product14.png'),title:'Holiday Greetings',profile:require('../assets/images/profile/keniaos.png'),name:"Kenia Os",like:178},
        {image:require('../assets/images/products/product16.png'),title:'Practical Jokes',profile:require('../assets/images/profile/loazia.png'),name:"Kimberly Loaiza",like:178},
        {image:require('../assets/images/products/scuzzmusic.png'),title:'Holiday Greetings',profile:require('../assets/images/profile/zurita.png'),name:"Juanpa Zurita",like:178},
        {image:require('../assets/images/products/product15.png'),title:'Practical Jokes',profile:require('../assets/images/profile/lozzie.png'),name:"Lesslie Polinesia",like:178}
    ]

    const reviews = [
        {profile:require('../assets/images/profile/profile6.png'),name:'Daniela Alfaro',count:3,time:'2 days ago',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},
        {profile:require('../assets/images/profile/profile18.png'),name:'Barbara De Regil',count:3,time:'2 days ago',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
    ]

    return (
        <View style={{width:wp('100'),height:hp('100'),backgroundColor:'#101010'}}>
            <View style={style.header}>
                <View style={style.topheader}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <AntDesign name="arrowleft" color="#C9C9C9" size={RFValue(25,580)}></AntDesign>
                    </TouchableOpacity>
                    <Text style={style.headertitle}>Dakillah's Profile</Text>
                    <View style={{width:RFValue(25,580)}}></View>
                </View>
            </View>
            <ScrollView style={{flex:1}}>
                <View>
                    <View style={style.contentprofile}>
                        <Image source={require('../assets/images/products/celia.png')} style={{width:wp('30.43'),height:wp('30.43'),borderRadius:10}}></Image>
                        <View style={{marginLeft:10}}>
                            <Text style={style.headertitle}>Dakillah</Text>
                            <Text style={style.infotitle}>Artist</Text>
                            <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:5}}>
                                <TouchableOpacity style={[style.btninfo]}>
                                    <FontAwesome5 name="video" color='#F6AA11' size={RFValue(10,580)}></FontAwesome5>
                                </TouchableOpacity> 
                                <Text style={style.iteminfo}>($500)</Text>
                                <TouchableOpacity style={style.btninfo}>
                                    <Image source={require('../assets/images/coffee-hot.png')} style={{width:RFValue(10,580),height:RFValue(10,580)}}></Image>
                                </TouchableOpacity> 
                                <Text style={style.iteminfo}>($500)</Text>
                            </View>
                            <View style={{display:'flex',flexDirection:'row',marginTop:5}}>
                                <AntDesign name="star" color="#E9C448" size={RFValue(11,580)}></AntDesign>
                                <AntDesign name="star" color="#E9C448" size={RFValue(11,580)}></AntDesign>
                                <AntDesign name="star" color="#E9C448" size={RFValue(11,580)}></AntDesign>
                                <AntDesign name="star" color="#E9C448" size={RFValue(11,580)}></AntDesign>
                                <AntDesign name="star" color="#E9C448" size={RFValue(11,580)}></AntDesign>
                                <Text style={style.iteminfo}>5.0 (4)</Text>
                            </View>
                            <Text style={style.infotitle}>Address</Text>
                            <Text style={[style.infotitle,{color:'white'}]}>CONSTITUCION SN, EL PARQUE, 81259 SINALOA, {'\n'}Ahome, 81256</Text>
                        </View>
                        
                    </View>
                    <View style={style.content}>
                        <Text style={style.description}>
                        78.4% of juki_lop's followers are female and 21.6% are male. Average engagement rate on the posts is around 14.40%. The average number of likes per post is 1049987 and the average number of comments is 6821.
                        {'\n\n'}
                        Juki_lop loves posting about Actors, Music, Modeling.
                        </Text>
                        <View style={{marginTop:15,flexDirection:'row',display:'flex'}}>
                            <TouchableOpacity style={style.btn} onPress={()=>navigation.navigate('Chat')}>
                                <MaterialIcons name="chat-bubble-outline" color="white" size={RFValue(18,580)}></MaterialIcons>
                                <Text style={[style.btntext,{fontSize:RFValue(14,580),marginLeft:10}]}>Chat</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[style.btn,{backgroundColor:'#101010',marginLeft:10,borderWidth:1,borderColor:'#EEB408'}]} onPress={()=>navigation.navigate('Request')}>
                                <Feather name="git-pull-request" color="#F6AA11" size={RFValue(18,580)}></Feather>
                                <Text style={[style.btntext,{fontSize:RFValue(14,580),marginLeft:10,color:'#F6AA11'}]}>Request</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={style.videos}>
                        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={style.sectiontitle}>Videos</Text>
                            <TouchableOpacity style={style.btn_see} onPress={()=>navigation.navigate('Videos')}>
                                <Text style={{fontSize:RFValue(12,580),color:'#F6AA11',fontWeight:'500',fontFamily:"Quicksand-Medium"}}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={videos}
                            showsHorizontalScrollIndicator={false}
                            style={{marginTop:24}}
                            horizontal={true}
                            keyExtractor={({item,index})=>index}
                            renderItem={({item,index})=>(
                                <MyVideoItem {...item} key={index}></MyVideoItem>
                            )}
                        ></FlatList>
                    </View>
                    <View style={style.ratingcontainer}>
                        <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                            <View style={{flex:1}}>
                                <Text style={style.sectiontitle}>Rated on Jul 5</Text>
                                <View style={{display:'flex',flexDirection:'row',marginTop:5,alignItems:'center'}}>
                                    <AntDesign name="star" color="#E9C448" size={RFValue(18,580)}></AntDesign>
                                    <AntDesign name="star" color="#E9C448" size={RFValue(18,580)}></AntDesign>
                                    <AntDesign name="star" color="#E9C448" size={RFValue(18,580)}></AntDesign>
                                    <AntDesign name="star" color="#E9C448" size={RFValue(18,580)}></AntDesign>
                                    <AntDesign name="star" color="#E9C448" size={RFValue(18,580)}></AntDesign>
                                    <Text style={{marginLeft:10,fontSize:RFValue(13,580),color:'white'}}>5.0(4)</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={style.btncircle}>
                                <Feather name="edit" color="white" size={RFValue(16,580)}></Feather>
                            </TouchableOpacity>
                        </View>
                        <Text style={[style.description,{marginTop:10}]}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </Text>
                        <View style={{marginTop:20}}>
                            <View style={{flexDirection:'row',display:'flex',justifyContent:'space-between'}}>
                                <Text style={style.sectiontitle}>Reviews</Text>
                                <TouchableOpacity style={style.btn_see}>
                                    <Text style={{fontSize:RFValue(12,580),color:'#F6AA11',fontWeight:'500',fontFamily:"Quicksand-Medium"}}>See All 32 Reviews</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <FlatList
                        data={reviews}
                        showsVerticalScrollIndicator={false}
                        style={{marginBottom:45}}
                        keyExtractor={({item,index})=>index}
                        renderItem={({item,index})=><ReviewItem {...item} key={index}></ReviewItem>}
                    ></FlatList>
                </View>
            </ScrollView>
            
        </View>
    )
}

const style= StyleSheet.create({
    header:{
        padding:24,
        paddingBottom:10
    },
    topheader:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    contentprofile:{
        paddingLeft:24,
        paddingRight:24,
        paddingBottom:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    headertitle:{
        fontSize:RFValue(18,580),
        color:'white',
        fontFamily:'Quicksand-Medium'
    },
    title:{
        fontSize:RFValue(19,580),
        color:'black',
        fontFamily:'Quicksand-Medium',
        marginTop:5
    },
    infotitle:{
        color:'white',
        fontSize:RFValue(10,580),
        fontFamily:"Quicksand-Medium"
    },
    btninfo:{
        width:wp('5.8'),
        height:wp('5.8'),
        borderRadius:wp('6.64'),
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#F6AA11',
        borderWidth:1
    },
    iteminfo:{
        fontSize:RFValue(9,580),
        color:'white',
        fontFamily:"Quicksand-Medium",
        marginLeft:5, 
        marginRight:10
    },
    content:{
        padding:24,
        paddingTop:10
    },
    label:{
        fontSize:RFValue(15,580),
        color:'black',
        fontFamily:'Quicksand-Medium',
        marginBottom:9
    },
    description:{
        fontSize:RFValue(12,580),
        color:'white',
        fontFamily:'Quicksand-Regular'
    },
    btntext:{
        color:'white',
        fontSize:RFValue(15,580),
        fontFamily:'Quicksand-Medium'
    },
    btn:{
        paddingLeft:24,
        paddingRight:24,
        paddingTop:12,
        paddingBottom:12,
        backgroundColor:'#F6AA11',
        borderRadius:21,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        shadowOpacity:0.16,
        shadowRadius:5,
        shadowOffset:{
            height:3,
            width:0
        }
    },
    videos:{
        padding:22
    },
    sectiontitle:{
        fontFamily:'Quicksand-Medium',
        fontSize:RFValue(18,580),
        color:'white'
    },
    btn_see:{
        borderRadius:15,
        paddingLeft:12,
        paddingRight:12,
        paddingTop:4,
        paddingBottom:4,
        borderColor:'#F6AA11',
        borderWidth:1
    },
    ratingcontainer:{
        padding:24
    },
    btncircle:{
        padding:8,
        backgroundColor:'#F6AA11',
        shadowOpacity:0.16,
        shadowRadius:5,
        shadowOffset:{
            height:3,
            width:0
        },
        borderRadius:16
    }
})