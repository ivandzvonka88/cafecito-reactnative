import React,{useRef} from 'react'
import {View,StyleSheet,ImageBackground,TouchableOpacity,Text,Image,ScrollView,FlatList,TextInput} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ScalingDrawer from 'react-native-scaling-drawer'
import {RFValue} from 'react-native-responsive-fontsize'
import Sidebar from '../component/Sidebar'
import AntDesign from 'react-native-vector-icons/AntDesign'
import RequestItem from '../component/RequestItem';

export default function MyRequest({navigation})
{
    let drawer = useRef(null)

    const requests = [
        {profile:require('../assets/images/profile/profile6.png'),name:'Yoss Hoffman',review:'5.0',count:4,price:500,status:'Pending',updated:'5 days ago'},
        {profile:require('../assets/images/profile/profile13.png'),name:'Daniela Alfaro',review:'5.0',count:4,price:500,status:'Arrived',updated:'5 days ago'},
        {profile:require('../assets/images/profile/profile14.png'),name:'Barbara De Regil',review:'5.0',count:4,price:500,status:'Canceled',updated:'5 days ago'},
        {profile:require('../assets/images/profile/profile15.png'),name:'Karen Polinesia',review:'5.0',count:4,price:500,status:'Pending',updated:'5 days ago'},
        {profile:require('../assets/images/profile/profile16.png'),name:'Celia Lora',review:'5.0',count:4,price:500,status:'Arrived',updated:'5 days ago'},
        {profile:require('../assets/images/profile/profile17.png'),name:'Lesslie Polinesia',review:'5.0',count:4,price:500,status:'Canceled',updated:'5 days ago'}
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
                <View style={{padding:24}}>
                    <View style={style.header}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <AntDesign name="arrowleft" color="white" size={RFValue(25,580)}></AntDesign>
                        </TouchableOpacity>
                        <Text style={style.title}>My Requests</Text>
                        <TouchableOpacity style={style.righticon}>
                            
                        </TouchableOpacity>
                    </View>
                    <View style={style.inputcontainer}>
                        <TextInput style={{flex:1}} placeholder="Search" placeholderTextColor="white"></TextInput>
                        <AntDesign name="search1" color="white" size={RFValue(17,580)}></AntDesign>
                    </View>
                </View>
                <FlatList
                    data={requests}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={({item,index})=>index}
                    contentContainerStyle={{paddingBottom:48}}
                    renderItem={({item,index})=>(
                        <RequestItem {...item} key={index}></RequestItem>
                    )}
                ></FlatList>
            </View>
       </ScalingDrawer> 
    )
}

const style = StyleSheet.create({
    container:{
        width:wp('100%'),
        height:hp('100%'),
        resizeMode:"cover",
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