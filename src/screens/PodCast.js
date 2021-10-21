import React,{useRef} from 'react'
import {View,StyleSheet,ImageBackground,TouchableOpacity,Text,Image,ScrollView,FlatList,TextInput} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ScalingDrawer from 'react-native-scaling-drawer'
import {RFValue} from 'react-native-responsive-fontsize'
import Sidebar from '../component/Sidebar'
import AntDesign from 'react-native-vector-icons/AntDesign'
import PodCastItem from '../component/PodCastDetail'
import {useSelector} from 'react-redux'
import Feather from 'react-native-vector-icons/Feather'
import BottomNavigation from '../component/BottomNavigation'
export default function PodCast({navigation})
{
    let drawer = useRef(null)

    const {role} = useSelector(state=>state.auth)

    const podcast = [
        {image:require('../assets/images/products/ezrazno.png'),title:"Erazno y La Chokolata",description:"Revolver Podcasts",tags:["Comedy"]},
        {image:require('../assets/images/products/piolfn.png'),title:"EI Show de piolin",description:"Karen Polinesia",tags:["Tag1","Tag1","Tag1"]},
        {image:require('../assets/images/products/donche.png'),title:"Don cheto AL AIRE",description:"Barbara De Regil",tags:["Tag1","Tag1","Tag1"]},
        {image:require('../assets/images/products/hablando.png'),title:"Hablando de Frente",description:"Daniela Alfaro",tags:["Tag1","Tag1","Tag1"]}
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
                    <Text style={style.title}>Featured Cafecitos</Text>
                    <TouchableOpacity style={style.righticon} onPress={directpage}>
                        <Image source={role == 'influencer'?require('../assets/images/chat.png'):require('../assets/images/filter.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={style.inputcontainer}>
                    <TextInput style={{flex:1,color:'white'}} placeholder="Search" placeholderTextColor='white'></TextInput>
                    <AntDesign name="search1" color="white" size={RFValue(17,580)}></AntDesign>
                </View>
                <ScrollView style={{marginTop:15,flex:1}} showsVerticalScrollIndicator={false}>
                    <View>
                        <FlatList
                            data={podcast}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={({item,index})=>index}
                            renderItem={({item,index})=><PodCastItem {...item} key={index} navigation={navigation}></PodCastItem>}
                        ></FlatList>
                    </View>
                </ScrollView>
                {
                    role == 'influencer' && (
                        <TouchableOpacity style={style.addbtn} onPress={()=>navigation.navigate('AddFeed')}>
                            <Feather name="plus" color="white" size={RFValue(31,580)}></Feather>
                        </TouchableOpacity>
                    )
                }
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
        color:'#D5D5D5',
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
    addbtn:{
        width:wp('17.87'),
        height:wp('17.87'),
        backgroundColor:'#F6AA11',
        borderRadius:wp('8.9'),
        justifyContent:'center',
        alignItems:'center',
        marginTop:25,
        alignSelf:'center',
        position:'absolute',
        bottom:48
    }
})
