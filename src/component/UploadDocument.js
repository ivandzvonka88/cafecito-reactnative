import React from 'react'
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
export default function UploadDocument()
{
    return (
        <View style={{marginTop:30}}>
            <TouchableOpacity style={style.imageupload}>
                <Feather name="image" color="#A7A7A7" size={RFValue(40,580)}></Feather>
                <TouchableOpacity style={style.uploadbtn}>
                    <Feather name="upload" color="white" size={RFValue(17,580)}></Feather>
                </TouchableOpacity>
            </TouchableOpacity>
            <Text style={[style.label,{marginTop:15,textAlign:'center'}]}>Upload Selfie Photo</Text>
            <Text style={style.label}>Upload ID</Text>
            <View style={style.uploadcontainer}>
                <Feather name="image" color="#F6AA11" size={RFValue(40,580)}></Feather>
                <TouchableOpacity style={style.upload}>
                    <Text style={style.uploadtxt}>Upload</Text>
                </TouchableOpacity>
            </View>
            <Text style={style.info}>ex: IC card, Passport, CNI Card</Text>
        </View>
    )
}

const style = StyleSheet.create({
    imageupload:{
        width:wp('36.23'),
        height:wp('36.23'),
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#E3E3E3',
        borderRadius:wp('18')
    },
    uploadbtn:{
        width:wp('10.87'),
        height:wp('10.87'),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:wp('5.5'),
        backgroundColor:'#F6AA11',
        position:'absolute',
        right:0,
        bottom:0
    },
    label:{
        marginTop:20,
        color:'white',
        fontFamily:'Montserrat-Regular',
        fontSize:RFValue(16,580)
    },
    uploadcontainer:{
        backgroundColor:'#252525',
        borderRadius:5,
        alignItems:'center',
        padding:15,
        height:wp('47.1'),
        marginTop:5,
        justifyContent:'center'
    },
    upload:{
        width:wp('23.67'),
        padding:7,
        alignItems:'center',
        marginTop:15,
        borderRadius:17,
        borderColor:'#F6AA11',
        borderWidth:1
    },
    uploadtxt:{
        color:'#F6AA11',
        fontSize:RFValue(12,580),
        fontFamily:'Quicksand-Medium'
    },
    info:{
        fontSize:RFValue(12,580),
        color:'white',
        fontFamily:'Montserrat-Regular'
    }
})