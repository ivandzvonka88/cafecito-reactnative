import React,{useRef} from 'react'
import {View,StyleSheet,ImageBackground,TouchableOpacity,Text,Image,ScrollView,FlatList} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ScalingDrawer from 'react-native-scaling-drawer'
import {RFValue} from 'react-native-responsive-fontsize'
import Sidebar from '../component/Sidebar'
import PodCastItem from '../component/PodcastItem'
import LiveStreamItem from '../component/LiveStreamItem'
import InfluenceItem from '../component/InfluenceItem'
import VideoItem from '../component/VideoItem'
import ShopItem from '../component/ShopItem'

export default function Home({navigation})
{
    let drawer = useRef(null)

    const podcast = [
        {image:require('../assets/images/products/ezrazno.png'),title:"Erazno y La Chokolata",description:"Revolver Podcasts"},
        {image:require('../assets/images/products/piolfn.png'),title:"EI Show de piolin",description:"Karen Polinesia"},
        {image:require('../assets/images/products/donche.png'),title:"Don cheto AL AIRE",description:"Barbara De Regil"},
        {image:require('../assets/images/products/hablando.png'),title:"Hablando de Frente",description:"Daniela Alfaro"}
    ]

    const livestreams = [
        {image:require('../assets/images/products/peter.png'),title:"Abdiel Larralde",top:5,camera:500,cup:200},
        {image:require('../assets/images/products/mike.png'),title:"Catalyna",top:5,camera:500,cup:200},
        {image:require('../assets/images/products/bad.png'),title:"Dakillah",top:1,camera:500,cup:200},
        {image:require('../assets/images/products/kimbely.png'),title:"Thalia",top:3,camera:500,cup:200}
    ];

    const influences = [
        {image:require('../assets/images/products/juanpa.png'),name:'Catalyna',camera:500,cup:200,review:5.0,count:4},
        {image:require('../assets/images/products/kimbelylozia.png'),name:'Abdiel Larralde',camera:500,cup:200,review:5.0,count:4},
        {image:require('../assets/images/products/lessie.png'),name:'Dakillah',camera:500,cup:200,review:5.0,count:4},
        {image:require('../assets/images/products/celia.png'),name:'Thalia',camera:500,cup:200,review:5.0,count:4}
    ]

    const videos = [
        {image:require('../assets/images/products/action.png'),title:'Birthday Wishes',profile:require('../assets/images/profile/keniaos.png'),name:"Eddie Sotelo",like:178},
        {image:require('../assets/images/products/nickmusic.png'),title:'Anniversary Wishes',profile:require('../assets/images/profile/loazia.png'),name:"Maria Marin",like:178},
        {image:require('../assets/images/products/scuzzmusic.png'),title:'Holiday Greetings',profile:require('../assets/images/profile/zurita.png'),name:"Erazno y Chok",like:178},
        {image:require('../assets/images/products/clubmusic.png'),title:'Practical Jokes',profile:require('../assets/images/profile/lozzie.png'),name:"Erazno (solo)",like:178}
    ]

    const shop = [
        {image:require('../assets/images/products/javana.png'),name:"El Piolin Hoodie",price:50,description:"US Tienda"},
        {image:require('../assets/images/products/davidoff.png'),name:"El Bueno La Mala El Feo Shirt",price:50,description:"US Tienda"},
        {image:require('../assets/images/products/starbucks.png'),name:"Juntos We Shine Mug",price:50,description:"US Tienda"},
        {image:require('../assets/images/products/coffeebeans.png'),name:"Don Cheto Trucker Hat",price:50,description:"US Tienda"}
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
                    <Image source={require('../assets/images/darkmode/logotitle.png')}></Image>
                    <TouchableOpacity style={style.righticon} onPress={()=>navigation.navigate('Chat')}>
                        <Image source={require('../assets/images/chat.png')}></Image>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View>
                        <View style={{marginTop:hp('2%'),padding:24}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:14,alignItems:'center'}}>
                                <Text style={style.title}>Featured Cafecitos</Text>
                                <TouchableOpacity style={style.btn_see} onPress={()=>navigation.navigate('Podcasts')}>
                                    <Text style={{fontSize:RFValue(12,580),color:'#F6AA11',fontWeight:'500',fontFamily:"Quicksand-Medium"}}>See All</Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={podcast}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={({item,index})=>index}
                                renderItem={({item,index})=><PodCastItem {...item} navigation={navigation} key={index}></PodCastItem>}
                            ></FlatList>
                        </View>
                        <View style={{padding:24}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:14,alignItems:'center'}}>
                                <Text style={style.title}>Cafecito en Vivo</Text>
                                <TouchableOpacity style={style.btn_see} onPress={()=>navigation.navigate('LiveStreams')}>
                                    <Text style={{fontSize:RFValue(12,580),color:'#F6AA11',fontWeight:'500',fontFamily:"Quicksand-Medium"}}>See All</Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={livestreams}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={({item,index})=>index}
                                renderItem={({item,index})=><LiveStreamItem {...item} key={index}></LiveStreamItem>}
                            ></FlatList>
                        </View>
                        <View style={{padding:24}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:14,alignItems:'center'}}>
                                <Text style={style.title}>Cafecito Solo</Text>
                                <TouchableOpacity style={style.btn_see} onPress={()=>navigation.navigate('Influencers')}>
                                    <Text style={{fontSize:RFValue(12,580),color:'#F6AA11',fontWeight:'500',fontFamily:"Quicksand-Medium"}}>See All</Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={influences}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={({item,index})=>index}
                                renderItem={({item,index})=><InfluenceItem {...item} key={index} navigation={navigation}></InfluenceItem>}
                            ></FlatList>
                        </View>
                        <View style={{padding:24}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:14,alignItems:'center'}}>
                                <Text style={style.title}>Videos</Text>
                                <TouchableOpacity style={style.btn_see} onPress={()=>navigation.navigate('Videos')}>
                                    <Text style={{fontSize:RFValue(12,580),color:'#F6AA11',fontWeight:'500',fontFamily:"Quicksand-Medium"}}>See All</Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={videos}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={({item,index})=>index}
                                renderItem={({item,index})=><VideoItem {...item} key={index}></VideoItem>}
                            ></FlatList>
                        </View>
                        <View style={{padding:24,marginBottom:24}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:14,alignItems:'center'}}>
                                <Text style={style.title}>Shop for Tienda</Text>
                                <TouchableOpacity style={style.btn_see} onPress={()=>navigation.navigate('Shops')}>
                                    <Text style={{fontSize:RFValue(12,580),color:'#F6AA11',fontWeight:'500',fontFamily:"Quicksand-Medium"}}>See All</Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={shop}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={({item,index})=>index}
                                renderItem={({item,index})=><ShopItem {...item} key={index} navigation={navigation}></ShopItem>}
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
        backgroundColor:'#101010'
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:24
    },
    headertitle:{
        fontSize:RFValue(22,580)
    },
    righticon:{
        width:wp('9%'),
        height:wp('9%'),
        borderRadius:wp('5%'),
        backgroundColor:'#F6AA11',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:RFValue(18,580),
        fontFamily:'Quicksand-Medium',
        color:'white'
    },
    btn_see:{
        borderRadius:11,
        paddingLeft:12,
        paddingRight:12,
        paddingTop:4,
        paddingBottom:4,
        borderColor:'#F6AA11',
        borderWidth:1
    }
})
