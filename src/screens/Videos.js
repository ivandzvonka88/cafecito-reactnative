import React,{useRef} from 'react'
import {View,StyleSheet,ImageBackground,TouchableOpacity,Text,Image,ScrollView,FlatList,TextInput} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ScalingDrawer from 'react-native-scaling-drawer'
import {RFValue} from 'react-native-responsive-fontsize'
import Sidebar from '../component/Sidebar'
import AntDesign from 'react-native-vector-icons/AntDesign'
import VideoDetail from '../component/VideoDetail'
import OctIcons from 'react-native-vector-icons/Octicons'
import {useSelector} from 'react-redux'
import BottomNavigation from '../component/BottomNavigation'

export default function Videos({navigation})
{
    const {role} = useSelector(state=>state.auth)
    let drawer = useRef(null)
    const videos = role != 'influencer'?[
        {image:require('../assets/images/products/action.png'),title:'Birthday Wishes',profile:require('../assets/images/profile/keniaos.png'),name:"Eddie Sotelo",like:178},
        {image:require('../assets/images/products/nickmusic.png'),title:'Anniversary Wishes',profile:require('../assets/images/profile/loazia.png'),name:"Maria Marin",like:178},
        {image:require('../assets/images/products/scuzzmusic.png'),title:'Holiday Greetings',profile:require('../assets/images/profile/zurita.png'),name:"Erazno y Chok",like:178},
        {image:require('../assets/images/products/clubmusic.png'),title:'Practical Jokes',profile:require('../assets/images/profile/lozzie.png'),name:"Erazno (solo)",like:178}
    ]:[
        {image:require('../assets/images/products/product14.png'),title:'Birthday Wishes',profile:require('../assets/images/profile/keniaos.png'),name:"Eddie Sotelo",like:178},
        {image:require('../assets/images/products/product16.png'),title:'Birthday Wishes',profile:require('../assets/images/profile/loazia.png'),name:"Maria Marin",like:178},
        {image:require('../assets/images/products/scuzzmusic.png'),title:'Holiday Greetings',profile:require('../assets/images/profile/zurita.png'),name:"Erazno y Chok",like:178},
        {image:require('../assets/images/products/product15.png'),title:'Practical Jokes',profile:require('../assets/images/profile/lozzie.png'),name:"Erazno (solo)",like:178}
    ]

    const directpage = () => {
        if(role == 'influencer')
        {
            navigation.navigate('Chat')
        }
    }

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
                    
                    <Text style={style.title}>{role == 'influencer'?'My Videos':'Videos'}</Text>
                    <TouchableOpacity style={style.righticon} onPress={directpage}>
                        {
                            role == 'influencer' && (
                                <Image source={require('../assets/images/chat.png')}></Image>
                            )
                        }
                        
                    </TouchableOpacity>
                </View>
                <View style={style.inputcontainer}>
                    <TextInput style={{flex:1}} placeholder="Search" placeholderTextColor='white'></TextInput>
                    <AntDesign name="search1" color="white" size={RFValue(17,580)}></AntDesign>
                </View>
                <ScrollView style={{marginTop:15,flex:1}} showsVerticalScrollIndicator={false}>
                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap'}}>
                        {
                            videos.map((item,index)=>(
                                <VideoDetail {...item} key={index} navigation={navigation} me={role == 'influencer'}></VideoDetail>
                            ))
                        }
                    </View>
                </ScrollView>
                <View style={{flexDirection:'row',justifyContent:'center',position:'absolute',bottom:30,width:wp('100%')}}>
                    <TouchableOpacity style={style.btnadd} onPress={()=>navigation.navigate('Camera')}>
                        <OctIcons name="plus" color="white" size={31}></OctIcons>
                    </TouchableOpacity>
                </View>
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
        color:'white',
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
        shadowRadius:5
    },
    btnadd:{
        backgroundColor:'#F6AA11',
        width:74,
        height:74,
        borderRadius:37,
        justifyContent:'center',
        alignItems:'center'
    }
})