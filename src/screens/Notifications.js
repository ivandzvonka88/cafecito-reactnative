import React,{useRef} from 'react'
import {View,StyleSheet,ImageBackground,TouchableOpacity,Text,Image,ScrollView,FlatList,TextInput} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ScalingDrawer from 'react-native-scaling-drawer'
import {RFValue} from 'react-native-responsive-fontsize'
import Sidebar from '../component/Sidebar'
import AntDesign from 'react-native-vector-icons/AntDesign'
import NotificationItem from '../component/NotificationItem'
import {useDarkMode} from 'react-native-dark-mode'
export default function Notifications({navigation})
{
    let drawer = useRef(null)
    const notifications = [
        {title:"Lorem Ipsum is simply",message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",latest:true,received:"1 hour ago"},
        {title:"Lorem Ipsum is simply",message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",latest:false,received:"1 day ago"},
        {title:"Lorem Ipsum is simply",message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",latest:false,received:"3 hours ago"},
        {title:"Lorem Ipsum is simply",message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",latest:false,received:"2 days ago"},
        {title:"Lorem Ipsum is simply",message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",latest:false,received:"1 hour ago"}
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
                        <Image source={require('../assets/images/darkmode/menu.png')}></Image>
                    </TouchableOpacity>
                    <Text style={style.title}>Notifications</Text>
                    <TouchableOpacity style={style.righticon}>
                        
                    </TouchableOpacity>
                </View>
                <ScrollView style={{marginTop:15,flex:1}}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={notifications}
                        keyExtractor={({item,index})=>index}
                        renderItem={({item,index})=><NotificationItem {...item} key={index}></NotificationItem>}
                    ></FlatList>
                </ScrollView>
                <TouchableOpacity style={style.redbtn}>
                    <Image source={require('../assets/images/clearall.png')} style={style.clearimg}></Image>
                </TouchableOpacity>
            </View>
       </ScalingDrawer> 
    )
}


const style = StyleSheet.create({
    container:{
        width:wp('100%'),
        height:hp('100%'),
        resizeMode:"cover",
        paddingBottom:30,
        backgroundColor:'#101010'
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
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:'white',
        borderRadius:9,
        borderColor:'#E9E9E9',
        marginTop:20,
        alignItems:'center',
        borderWidth:1,
        shadowColor:'black',
        shadowOpacity:0.16,
        elevation:10,
        shadowOffset:{
            height:3,
            width:0
        },
        shadowRadius:5
    },
    redbtn:{
        width:wp('13.04'),
        height:wp('13.04'),
        borderRadius:wp('6.52'),
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#F6AA11',
        borderWidth:3,
        alignSelf:'center',
        marginTop:15
    },
    clearimg:{
        width:wp('6.52'),
        height:wp('3.62')
    }
})