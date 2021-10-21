import React from 'react';
import {Image,Text,StyleSheet, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function PodCastItem({title,image,description,navigation})
{
    return (
        <View style={{width:wp('23.18'),marginRight:14}}>
            <Image source={image} style={{width:wp('23.18'),height:wp('23.18'),flex:1,borderRadius:14}}></Image>
            <TouchableOpacity onPress={()=>navigation.navigate('PodcastDetail')}><Text style={style.title}>{title}</Text></TouchableOpacity>
            <Text style={style.description}>{description}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    title:{
        fontSize:RFValue(12,580),
        marginTop:9,
        fontFamily:'Quicksand-Medium',
        color:'#D5D5D5'
    },
    description:{
        fontSize:RFValue(8,580),
        color:'#A4A4A4',
        marginTop:4,
        fontFamily:'Quicksand-Medium'
    }
})