import React,{useRef} from 'react'
import {View,StyleSheet,ImageBackground,TouchableOpacity,Text,Image,ScrollView,FlatList,TextInput} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ScalingDrawer from 'react-native-scaling-drawer'
import {RFValue} from 'react-native-responsive-fontsize'
import Sidebar from '../component/Sidebar'
import AntDesign from 'react-native-vector-icons/AntDesign'
import RequestItem from '../component/RequestItem';
import Feather from 'react-native-vector-icons/Feather'
import InfluencerRequestItem from '../component/InfluecerRequestItem'

export default function InfluencerRequest({navigation})
{
    let drawer = useRef(null)

    const requests = [
        {profile:require('../assets/images/profile/profile1.png'),name:'Julian Dasilva',price:500,status:'Waiting',received:'5 days ago'},
        {profile:require('../assets/images/profile/profile25.png'),name:'Dasilva',price:500,status:'Waiting',received:'5 days ago'},
        {profile:require('../assets/images/profile/profile26.png'),name:'Julian doe',price:500,status:'Completed',received:'5 days ago'}
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
                    <Text style={style.title}>Requests</Text>
                    <TouchableOpacity style={style.righticon}>
                        <Feather name="refresh-cw" size={RFValue(22,580)} color="#000000"></Feather>
                        <Text style={style.badgeicon}>3</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.inputcontainer}>
                    <TextInput style={{flex:1}} placeholder="Search" placeholderTextColor="white"></TextInput>
                    <AntDesign name="search1" color="white" size={RFValue(17,580)}></AntDesign>
                </View>
                <FlatList
                    data={requests}
                    style={{marginTop:24}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={({item,index})=>index}
                    contentContainerStyle={{paddingBottom:48}}
                    renderItem={({item,index})=>(
                        <InfluencerRequestItem {...item} key={index}></InfluencerRequestItem>
                    )}
                ></FlatList>
            </View>
       </ScalingDrawer> 
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#101010',
        padding:24
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
        alignItems:'center',
        backgroundColor:'#DBB419'
    },
    badgeicon:{
        position:'absolute',
        zIndex:10,
        color:'white',
        fontSize:RFValue(12,580),
        color:'white',
        backgroundColor:'#D11131',
        width:RFValue(17,580),
        height:RFValue(17,580),
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        borderRadius:RFValue(9,580),
        top:-5,
        right:-5,
        fontFamily:'Quicksand-Medium'
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