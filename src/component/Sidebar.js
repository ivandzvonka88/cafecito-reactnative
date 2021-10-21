import React from 'react'
import {View,TouchableOpacity,ScrollView,ImageBackground,StyleSheet,Image,Text} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import {useSelector} from 'react-redux'


export default function Sidebar({navigation})
{
    const {role} = useSelector(state=>state.auth)


    const sidebar = role != 'influencer'?[
        {icon:require('../assets/images/home.png'),name:'Home',navigate:'Home'},
        {icon:require('../assets/images/podcast.png'),name:'Featured Cafecitos',navigate:'Podcasts'},
        {icon:require('../assets/images/livestream.png'),name:'Cafecito en Vivo',navigate:'LiveStreams'},
        {icon:require('../assets/images/influencer.png'),name:'Cafecito Solo',navigate:'Influencers'},
        {icon:require('../assets/images/video.png'),name:'Videos',navigate:'Videos'},
        {icon:require('../assets/images/chat.png'),name:'Chat',navigate:'Chat'},
        {icon:require('../assets/images/shop.png'),name:'Shop for Tienda',navigate:'Shops'},
        {icon:require('../assets/images/user.png'),name:'My Profile',navigate:'MyProfileView'},
        {icon:require('../assets/images/notificationicon.png'),name:'Notifications',navigate:'Notifications'},
        {icon:require('../assets/images/help.png'),name:'Help',navigate:'Help'},
        {icon:require('../assets/images/Outline.png'),name:'Terms and conditions',navigate:'Condition'},
        {icon:require('../assets/images/contact.png'),name:'Contact Us',navigate:'ContactUs'},
        {icon:require('../assets/images/logout.png'),name:'Logout',navigate:'FirstScreen'}
    ]:[
        {icon:require('../assets/images/podcast.png'),name:'Featured Cafecitos',navigate:'Podcasts'},
        {icon:require('../assets/images/livestream.png'),name:'Cafecito en Vivo',navigate:'AddLiveStream'},
        {icon:require('../assets/images/video.png'),name:'Video',navigate:'Videos'},
        {icon:require('../assets/images/chat.png'),name:'Chat',navigate:'Chat'},
        {icon:require('../assets/images/shop.png'),name:'Shop for Tienda',navigate:'Shops'},
        {icon:require('../assets/images/interview.png'),name:'Requests',navigate:'InfluencerRequest'},
        {icon:require('../assets/images/user.png'),name:'Profile',navigate:'MyProfileInfluencer'},
        {icon:require('../assets/images/notificationicon.png'),name:'Notifications',navigate:'Notifications'},
        {icon:require('../assets/images/help.png'),name:'Help',navigate:'Help'},
        {icon:require('../assets/images/Outline.png'),name:'Terms and conditions',navigate:'Condition'},
        {icon:require('../assets/images/contact.png'),name:'Contact Us',navigate:'ContactUs'},
        {icon:require('../assets/images/logout.png'),name:'Logout',navigate:'FirstScreen'}
    ]

    return (
        <View style={{height:hp('100%'),width:wp('70%'),flex:1,backgroundColor:'#F6AA11'}} resizeMode="stretch">
            <ScrollView style={{flex:1}}>
                <View style={{marginBottom:45}}>
                    <View style={style.rightcontainer}></View>
                    <TouchableOpacity style={style.profile} onPress={()=>navigation.navigate('MyProfileView')}>
                        <Image source={role == 'influencer'?require('../assets/images/profile/influencer_me.png'):require('../assets/images/profile.png')} style={style.profileimg}></Image>
                    </TouchableOpacity>
                    <View style={{marginTop:10}}>
                        <Text style={style.username}>Mariana Pliego</Text>
                        <Text style={{fontSize:RFValue(13,580),color:'white',alignSelf:'center',fontFamily:'Quicksand-Medium'}}>mariana@cafecito.com</Text>
                    </View>
                    <View style={{marginTop:20}}>
                        {
                            sidebar.map((item,index)=>(
                                <TouchableOpacity key={index} style={style.sidebarcontainer} onPress={()=>navigation.navigate(item.navigate)}>
                                    <View style={{width:wp('7%'),alignItems:'center'}}>
                                        <Image source={item.icon}></Image>
                                    </View>
                                    <Text style={style.title}>{item.name}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </View>
            </ScrollView>
            
        </View>
    )
}

const style = StyleSheet.create({
    profile:{
        width:wp('22%'),
        height:wp('22%'),
        backgroundColor:'white',
        alignSelf:'center',
        marginTop:hp('8%'),
        alignItems:'center',
        justifyContent:'center',
        borderRadius:wp('11%')
    },
    rightcontainer:{
        width:wp('101'),
        height:wp('101'),
        borderRadius:wp('50.5'),
        position:'absolute',
        right:-wp('50.5'),
        top:-wp('50.5'),
        backgroundColor:'black'
    },
    profileimg:{
        width:wp('20%'),
        height:wp('20%'),
        borderRadius:wp('10%')
    },
    username:{
        fontSize:RFValue(18,580),
        color:'white',
        fontWeight:'bold',
        alignSelf:'center'
    },
    sidebarcontainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:22,
        paddingRight:22,
        marginBottom:30
    },
    title:{
        marginLeft:15,
        fontSize:RFValue(16,580),
        color:'white',
        fontFamily:'Quicksand-Medium'
    }

})