import React from 'react';
import {ImageBackground,Text,StyleSheet, View,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {useDarkMode} from 'react-native-dark-mode'
export default function InfluenceDetail({name,image,camera,cup,review,count,navigation})
{
    return (
        <TouchableOpacity style={{width:wp('40.5'),marginBottom:15}} onPress={()=>navigation.navigate('InfluenceProfile')}>
            <ImageBackground source={image} style={{width:wp('40.5'),height:wp('58.7'),flexDirection:'column',borderRadius:10,overflow:'hidden'}} resizeMode="cover">
                <View style={{flex:1}}></View>
                <View style={{marginBottom:5}}>
                    <TouchableOpacity style={style.camerabtn}>
                        <Image source={require('../assets/images/videoicon.png')} style={{opacity:1,width:wp('3.6'),height:wp('2.46')}}></Image>
                        <Text style={style.price}>$ {camera}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[style.camerabtn,{marginTop:5,backgroundColor:'#0000009B'}]}>
                        <Image source={require('../assets/images/coffee.png')} style={{opacity:1,width:wp('3.6'),height:wp('2.46')}}></Image>
                        <Text style={style.price}>$ {cup}</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <Text style={style.title} numberOfLines={1}>{name}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',display:'flex',alignItems:'center'}}>
                <Text style={style.description}>Artist</Text>
                <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <FontAwesome name="star" color="#E9C448" size={RFValue(14,580)}></FontAwesome>
                    <Text style={[style.description,{marginLeft:5}]}>{review}({count})</Text>
                </View>
            </View>
            
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
    title:{
        fontSize:RFValue(21,580),
        marginTop:9,
        fontFamily:'Quicksand-Medium',
        color:'white'
    },
    description:{
        fontSize:RFValue(14,580),
        color:'#A4A4A4',
        fontFamily:'Quicksand-Medium'
    },
    camerabtn:{
        backgroundColor:'#F6AA119B',
        borderRadius:11,
        paddingTop:7,
        paddingBottom:7,
        paddingLeft:15,
        paddingRight:15,
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'center'
    },
    price:{
        marginLeft:5,
        fontSize:RFValue(15,580),
        color:'white',
        fontWeight:'bold',
        fontFamily:'Quicksand-Medium'
    }
})