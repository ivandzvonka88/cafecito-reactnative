import React,{useRef} from 'react'
import {View,StyleSheet,ScrollView,TouchableOpacity,Text,Image,FlatList} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {RFValue} from 'react-native-responsive-fontsize'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ScalingDrawer from 'react-native-scaling-drawer'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Sidebar from '../component/Sidebar'
export default function MyProfileInfluencer({navigation})
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
            <View style={{flex:1,backgroundColor:'#101010'}}>
                <View style={style.header}>
                    <View style={style.topheader}>
                        <TouchableOpacity onPress={()=>drawer.open()}>
                            <Image source={require('../assets/images/darkmode/menu.png')}></Image>
                        </TouchableOpacity>
                        <Text style={style.headertitle}>My Profile</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('InfluencerEdit')}>
                            <Image source={require('../assets/images/icons/edit.png')}></Image>                  
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={{flex:1}}>
                    <View>
                        <View style={style.contentprofile}>
                            <Image source={require('../assets/images/profile/influencer_me.png')} style={{width:wp('30.43'),height:wp('30.43'),borderRadius:10}}></Image>
                            <View style={{marginLeft:10}}>
                                <Text style={style.headertitle}>Daniel Jone</Text>
                                <Text style={style.infotitle}>Job</Text>
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
                            </View>
                            
                        </View>
                        <View style={style.content}>
                            <Text style={style.description}>
                            78.4% of juki_lop's followers are female and 21.6% are male. Average engagement rate on the posts is around 14.40%. The average number of likes per post is 1049987 and the average number of comments is 6821.
                            {'\n\n'}
                            Juki_lop loves posting about Actors, Music, Modeling.
                            </Text>
                        </View>
                        <View style={{padding:38,paddingTop:12}}>
                            <TouchableOpacity style={style.inputcontainer} onPress={()=>navigation.navigate('PaymentMethod')}>
                                <AntDesign name="creditcard" color='#C9C9C9' size={RFValue(22,580)}></AntDesign>
                                <Text style={style.itemdescription}>Payment Methods</Text>
                                <AntDesign name="right" color="#B1B1B1" size={RFValue(15,580)}></AntDesign>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.inputcontainer} onPress={()=>navigation.navigate('Account')}>
                                <Feather name="user-check" color='#C9C9C9' size={RFValue(22,580)}></Feather>
                                <Text style={style.itemdescription}>Account</Text>
                                <AntDesign name="right" color="#B1B1B1" size={RFValue(15,580)}></AntDesign>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.inputcontainer} onPress={()=>navigation.navigate('MyReviews')}>
                                <MaterialIcons name="chat-bubble-outline" color='#C9C9C9' size={RFValue(22,580)}></MaterialIcons>
                                <Text style={style.itemdescription}>My Reviews</Text>
                                <AntDesign name="right" color="#B1B1B1" size={RFValue(15,580)}></AntDesign>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.inputcontainer} onPress={()=>navigation.navigate('PaymentHistory')}>
                                <Image source={require('../assets/images/darkmode/credit-card.png')} style={{width:RFValue(29,580),height:RFValue(22,580)}}></Image>
                                <Text style={style.itemdescription}>Payment History</Text>
                                <AntDesign name="right" color="#B1B1B1" size={RFValue(15,580)}></AntDesign>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                
            </View>
        </ScalingDrawer>
    )
}

const style= StyleSheet.create({
    header:{
        padding:24,
        paddingBottom:40
    },
    topheader:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
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
        color:'#F6AA11',
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
        paddingTop:40
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
    itemdescription:{
        fontFamily:'Montserrat-Medium',
        color:'white',
        fontSize:RFValue(13,580),
        flex:1,
        marginLeft:15
    }
})