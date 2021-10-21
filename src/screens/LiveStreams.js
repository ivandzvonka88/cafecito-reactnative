import React,{useRef} from 'react'
import {View,StyleSheet,ImageBackground,TouchableOpacity,Text,Image,ScrollView,FlatList,TextInput} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ScalingDrawer from 'react-native-scaling-drawer'
import {RFValue} from 'react-native-responsive-fontsize'
import Sidebar from '../component/Sidebar'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LiveStreamItem from '../component/LiveStreamDetail'

export default function LiveStreams({navigation})
{
    let drawer = useRef(null)

    const livestreams = [
        {image:require('../assets/images/products/peter.png'),title:"Abdiel Larralde",top:5,camera:500,cup:200,subject:"Music Night"},
        {image:require('../assets/images/products/mike.png'),title:"Catalyna",top:5,camera:500,cup:200,subject:"Music Night"},
        {image:require('../assets/images/products/bad.png'),title:"Dakillah",top:1,camera:500,cup:200,subject:"Music Night"},
        {image:require('../assets/images/products/kimbely.png'),title:"Thalia",top:3,camera:500,cup:200,subject:"Music Night"}
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
                    <Text style={style.title}>Cafecito en Vivo</Text>
                    <TouchableOpacity style={style.righticon}>
                        
                    </TouchableOpacity>
                </View>
                <View style={style.inputcontainer}>
                    <TextInput style={{flex:1}} placeholder="Search" placeholderTextColor='white'></TextInput>
                    <AntDesign name="search1" color="white" size={RFValue(17,580)}></AntDesign>
                </View>
                <ScrollView style={{marginTop:15}}>
                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap'}}>
                        {
                            livestreams.map((item,index)=>(
                                <LiveStreamItem {...item} key={index} navigation={navigation}></LiveStreamItem>
                            ))
                        }
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
    }
})