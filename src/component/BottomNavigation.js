import React from 'react';
import {View,StyleSheet,Image,Text,TouchableOpacity} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
export default function BottomNavigation({navigation,active})
{
    const listnav = [
        {name:'PodCasts',title:'Podcast',icon:require('../assets/images/icons/podcast.png'),active:require('../assets/images/icons/podcast-active.png')},
        {name:'AddLiveStream',title:'Live Stream',icon:require('../assets/images/icons/livestream.png'),active:require('../assets/images/icons/livestream-active.png')},
        {name:'Videos',title:'Video',icon:require('../assets/images/icons/video.png'),active:require('../assets/images/icons/video-active.png')},
        {name:'Shops',title:'Shop',icon:require('../assets/images/icons/shop.png'),active:require('../assets/images/icons/shop-active.png')},
        {name:'MyProfile',title:'Profile',icon:require('../assets/images/icons/profile.png'),active:require('../assets/images/icons/profile-active.png')}
    ]

    return (
        <View style={style.container}>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                {
                    listnav.map((item)=>(
                        <TouchableOpacity style={style.item} onPress={()=>navigation.navigate(item.name)}>
                            <Image source={active == item.name?item.active:item.icon}></Image>
                        </TouchableOpacity>
                    ))
                }
            </View>

            <View style={{display:'flex',flexDirection:'row'}}>
                {
                    listnav.map((item)=>(
                        <TouchableOpacity style={style.item} onPress={()=>navigation.navigate(item.name)}>
                            <Text style={[style.itemtext,{color:active == item.name?'#F6AA11':'#D5D5D5'}]}>{item.title}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
            
        </View>
    )
}

const style= StyleSheet.create({
    container:{
        backgroundColor:'#252525',
        marginBottom:20,
        width:wp('100'),
        padding:15

    },
    item:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    itemtext:{
        fontSize:RFValue(10,580),
        fontFamily:'Quicksand-Medium',
        marginTop:7
    }
})