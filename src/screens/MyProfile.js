import React,{useRef} from 'react'
import {View,StyleSheet,ImageBackground,TouchableOpacity,Text,Image,ScrollView,FlatList,TextInput} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ScalingDrawer from 'react-native-scaling-drawer'
import {RFValue} from 'react-native-responsive-fontsize'
import Sidebar from '../component/Sidebar'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MyVideoItem from '../component/MyVideoItems'
import RequestItem from '../component/RequestItem';

export default function MyProfile({navigation})
{
    let drawer = useRef(null)
    const videos = [
        {image:require('../assets/images/products/action.png'),title:'Action series',profile:require('../assets/images/profile/keniaos.png'),name:"Kenia Os",like:178},
        {image:require('../assets/images/products/nickmusic.png'),title:'Nick music',profile:require('../assets/images/profile/loazia.png'),name:"Kimberly Loaiza",like:178},
        {image:require('../assets/images/products/scuzzmusic.png'),title:'Scuzz Music',profile:require('../assets/images/profile/zurita.png'),name:"Juanpa Zurita",like:178},
        {image:require('../assets/images/products/clubmusic.png'),title:'Club  Music',profile:require('../assets/images/profile/lozzie.png'),name:"Lesslie Polinesia",like:178}
    ]

    const requests = [
        {profile:require('../assets/images/profile/profile6.png'),name:'Influencer Name',review:'5.0',count:4,price:500,status:'Pending',updated:'5 days ago'},
        {profile:require('../assets/images/profile/profile7.png'),name:'Influencer Name',review:'5.0',count:4,price:500,status:'Arrived',updated:'5 days ago'},
        {profile:require('../assets/images/profile/profile8.png'),name:'Influencer Name',review:'5.0',count:4,price:500,status:'Canceled',updated:'5 days ago'}
    ];
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
                        <Image source={require('../assets/images/menu.png')}></Image>
                    </TouchableOpacity>
                    <Text style={style.title}>My Profile</Text>
                    <TouchableOpacity style={style.righticon}>
                        <MaterialIcons name="logout" color="white" size={wp('5.1')}></MaterialIcons>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{marginTop:15}}>
                    <View style={{marginBottom:24}}>
                        <View style={[style.profileimg,{alignSelf:'center'}]}>
                            <Image source={require('../assets/images/profile.png')} style={style.profileimg}></Image>
                            <TouchableOpacity style={[style.editbtn,{position:'absolute',right:10,bottom:0}]}>
                                <Image source={require('../assets/images/edit.png')} style={{width:wp('3.79'),height:wp('3.79')}}></Image>
                                {/* <FontAwesome name="edit" color="white" size={wp('3.79')}></FontAwesome> */}
                            </TouchableOpacity>
                        </View>
                        <View style={{margin:30}}>
                            <View>
                                <Text style={style.label}>Full Name :</Text>
                                <View style={style.inputcontainer}>
                                    <TextInput style={style.input} placeholder="Search" placeholderTextColor="#929292" value="Daniel Jane" editable={false}></TextInput>
                                    <TouchableOpacity style={style.editbtn}>
                                        <Image source={require('../assets/images/edit.png')} style={{width:wp('3.79'),height:wp('3.79')}}></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{marginTop:16}}>
                                <Text style={style.label}>User Name :</Text>
                                <View style={style.inputcontainer}>
                                    <TextInput style={style.input} placeholder="Search" placeholderTextColor="#929292" value="Doniel Jane@gmail.com" editable={false}></TextInput>
                                    <TouchableOpacity style={style.editbtn}>
                                        <Image source={require('../assets/images/edit.png')} style={{width:wp('3.79'),height:wp('3.79')}}></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{marginTop:16}}>
                                <Text style={style.label}>Email ID :</Text>
                                <View style={style.inputcontainer}>
                                    <TextInput style={style.input} placeholder="Search" placeholderTextColor="#929292" value="Doniel Jane@gmail.com" editable={false}></TextInput>
                                    <TouchableOpacity style={style.editbtn}>
                                        <Image source={require('../assets/images/edit.png')} style={{width:wp('3.79'),height:wp('3.79')}}></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{marginTop:16}}>
                                <Text style={style.label}>Bio :</Text>
                                <View style={style.inputcontainer}>
                                    <TextInput style={style.input} placeholder="Search" placeholderTextColor="#929292" value="Sdasds" editable={false}></TextInput>
                                    <TouchableOpacity style={style.editbtn}>
                                        <Image source={require('../assets/images/edit.png')} style={{width:wp('3.79'),height:wp('3.79')}}></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{marginTop:16}}>
                                <Text style={style.label}>Password :</Text>
                                <View style={style.inputcontainer}>
                                    <TextInput style={style.input} placeholder="Search" placeholderTextColor="#929292" value="Daniel Jane" secureTextEntry={true} editable={false}></TextInput>
                                    <TouchableOpacity style={style.editbtn}>
                                        <Image source={require('../assets/images/edit.png')} style={{width:wp('3.79'),height:wp('3.79')}}></Image>
                                    </TouchableOpacity>
                                </View>
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
                        <View style={{paddingTop:22,paddingBottom:22}}>
                            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingBottom:15,borderBottomColor:'#F3F4F9',borderBottomWidth:1,paddingLeft:24,paddingRight:24}}>
                                <Text style={style.sectiontitle}>Requests</Text>
                                <TouchableOpacity style={style.btn_see} onPress={()=>navigation.navigate('Videos')}>
                                    <Text style={{fontSize:RFValue(12,580),color:'#F6AA11',fontWeight:'500',fontFamily:"Quicksand-Medium"}}>See All</Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={requests}
                                showsVerticalScrollIndicator={false}
                                keyExtractor={({item,index})=>index}
                                renderItem={({item,index})=>(
                                    <RequestItem {...item} key={index}></RequestItem>
                                )}
                            ></FlatList>
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
        backgroundColor:'white'
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
    headertitle:{
        fontSize:RFValue(22,580)
    },
    title:{
        fontSize:RFValue(18,580),
        color:'black',
        fontFamily:'Quicksand-Medium'
    },
    inputcontainer:{
        display:'flex',
        flexDirection:'row',
        paddingLeft:25,
        paddingRight:25,
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:'white',
        borderRadius:5,
        alignItems:'center',
        shadowColor:'black',
        shadowOpacity:0.16,
        elevation:5,
        shadowOffset:{
            height:3,
            width:0
        },
        shadowRadius:5
    },
    profileimg:{
        width:wp('28.5'),
        height:wp('28.5'),
        borderRadius:wp('14')
    },
    editbtn:{
        width:wp('7.72'),
        height:wp('7.72'),
        borderRadius:wp('3.8'),
        backgroundColor:'#F6AA11',
        justifyContent:'center',
        alignItems:'center'
    },
    label:{
        fontSize:RFValue(15,580),
        color:'black',
        fontFamily:'arial',
        marginBottom:10
    },
    input:{
        fontSize:RFValue(16,580),
        fontFamily:'Montserrat-Medium',
        color:'#A2A2A2',
        flex:1
    },
    videos:{
        backgroundColor:'#FFF5F7',
        padding:22
    },
    sectiontitle:{
        fontFamily:'Quicksand-Medium',
        fontSize:RFValue(18,580),
        color:'black'
    },
    btn_see:{
        borderRadius:11,
        paddingLeft:12,
        paddingRight:12,
        paddingTop:4,
        paddingBottom:4,
        borderColor:'#F6AA11',
        backgroundColor:'white',
        borderWidth:2
    }
})