import React,{useRef} from 'react'
import {View,StyleSheet,ImageBackground,TouchableOpacity,Image,Text} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import ScalingDrawer from 'react-native-scaling-drawer'
import Sidebar from '../component/Sidebar'
import {useDarkMode} from 'react-native-dark-mode'
export default function Conditions({navigation})
{
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
            <View style={style.container}>
                <View style={style.header}>
                    <TouchableOpacity onPress={()=>drawer.open()}>
                        <Image source={require('../assets/images/darkmode/menu.png')}></Image>
                    </TouchableOpacity>
                    <Text style={style.title}>Terms and Condition</Text>
                    <TouchableOpacity style={style.righticon}>

                    </TouchableOpacity>
                </View>
                <View style={style.section}>
                    <Text style={style.sectiontitle}>1. Terms   </Text>
                    <Text style={style.sectioncontent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</Text>
                </View>
                <View style={style.section}>
                    <Text style={style.sectiontitle}>1.1    </Text>
                    <Text style={style.sectioncontent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</Text>
                </View>
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
        alignItems:'center',
        padding:24,
        paddingBottom:24
    },
    righticon:{
        width:wp('9%'),
        height:wp('9%'),
        borderRadius:wp('5%'),
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:RFValue(18,580),
        color:'white',
        fontFamily:'Quicksand-Medium'
    },
    section:{
        marginTop:15,
        backgroundColor:'#252525',
        paddingLeft:24,
        paddingRight:24,
        paddingTop:5,
        paddingBottom:5
    },
    sectiontitle:{
        fontSize:RFValue(16,580),
        fontWeight:'bold',
        fontFamily:'arial',
        color:'#FFFFFF',
        textDecorationColor:'#CBCBCB',
        textDecorationLine:'underline'
    },
    sectioncontent:{
        color:'#FFFFFF',
        opacity:0.85,
        marginTop:5,
        fontSize:RFValue(12,580),
        fontFamily:'arial'
    }
})