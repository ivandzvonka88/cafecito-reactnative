import React from 'react';
import {ImageBackground,Text,StyleSheet, View,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function LiveStreamDetail({title,image,top,camera,cup,subject,navigation})
{
    return (
        <TouchableOpacity style={{width:wp('40.5'),marginBottom:10}} onPress={()=>navigation.navigate('ChatRoom')}>
            <ImageBackground source={image} style={{width:wp('40.5'),height:wp('58.7'),flexDirection:'column',padding:10,borderRadius:10,overflow:'hidden'}} resizeMode="cover">
                <View style={{flex:1}}>
                    <Text style={style.top}>Top {top}</Text>
                </View>
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
            <Text style={style.title}>{subject}</Text>
            <Text style={style.description}>{title}</Text>
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
    top:{
        color:'white',
        fontSize:RFValue(13,580),
        fontFamily:'Quicksand-Medium'
    },
    description:{
        fontSize:RFValue(16,580),
        color:'#F6AA11',
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