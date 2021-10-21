import React,{useRef} from 'react'
import {View,StyleSheet,ImageBackground,TouchableOpacity,Text,Image,ScrollView,FlatList,TextInput} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ScalingDrawer from 'react-native-scaling-drawer'
import {RFValue} from 'react-native-responsive-fontsize'
import Sidebar from '../component/Sidebar'
import AntDesign from 'react-native-vector-icons/AntDesign'
import InfluenceDetail from '../component/InfluenceDetail'
import Feather from 'react-native-vector-icons/Feather'

export default function Influences({navigation})
{
    let drawer = useRef(null)
    
    const influences = [
        {image:require('../assets/images/products/juanpa.png'),name:'Catalyna',camera:500,cup:200,review:5.0,count:4},
        {image:require('../assets/images/products/kimbelylozia.png'),name:'Abdiel Larralde',camera:500,cup:200,review:5.0,count:4},
        {image:require('../assets/images/products/lessie.png'),name:'Thalia',camera:500,cup:200,review:5.0,count:4},
        {image:require('../assets/images/products/celia.png'),name:'Dakillah',camera:500,cup:200,review:5.0,count:4}
    ]

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
                    <Text style={style.title}>Cafecito Solo</Text>
                    <TouchableOpacity style={style.righticon} onPress={()=>navigation.navigate('MapView')}>
                        <Feather name="map" color="white" size={wp('5%')}></Feather>
                    </TouchableOpacity>
                </View>
                <View style={style.inputcontainer}>
                    <TextInput style={{flex:1}} placeholder="Search" placeholderTextColor='white'></TextInput>
                    <AntDesign name="search1" color="white" size={RFValue(17,580)}></AntDesign>
                </View>
                <ScrollView style={{marginTop:15}}>
                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap'}}>
                        {
                            influences.map((item,index)=>(
                                <InfluenceDetail {...item} key={index} navigation={navigation}></InfluenceDetail>
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
        backgroundColor:'#F6AA11',
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