import React from 'react';
import {ImageBackground,Text,StyleSheet, View,Image,TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux'
import OctIcons from 'react-native-vector-icons/Octicons'
export default function ShopItemDetail({name,image,price,description,navigation})
{
    const {role} = useSelector(state=>state.auth)
    
    const directpage = () => {
        if(role == 'influencer')
        {
            navigation.navigate('EditShop')
        }
        else
        {
            navigation.navigate('ShopDetail')
        }
    }

    return (
        <TouchableOpacity style={{width:wp('40.5'),marginBottom:10}} onPress={directpage}>
            <ImageBackground source={image} style={{width:wp('40.5'),height:wp('40.5'),borderRadius:14,overflow:'hidden',position:'relative'}} resizeMode="cover">
                <View style={{flex:1}}></View>
                <View style={{marginBottom:5,width:wp('40.5')}}>
                    <TouchableOpacity style={style.camerabtn}>
                        <Text style={style.price}>$ {price}</Text>
                    </TouchableOpacity>
                </View>
                {
                    role == "influencer" && (
                        <TouchableOpacity style={style.remove}>
                            <OctIcons name="trashcan" color="white" size={RFValue(17,580)}></OctIcons>
                        </TouchableOpacity>
                    )
                }
            </ImageBackground>
            
            <Text style={style.title}>{name}</Text>
            {
                role != 'influencer' && (
                    <Text style={style.description}>{description}</Text>
                )
            }
            
            
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    title:{
        fontSize:RFValue(18,580),
        marginTop:17,
        fontFamily:'Quicksand-Medium',
        color:'white'
    },
    description:{
        fontSize:RFValue(12,580),
        color:'#A4A4A4',
        fontFamily:'Quicksand-Medium'
    },
    camerabtn:{
        backgroundColor:'#F6AA11',
        borderRadius:11,
        paddingTop:7,
        paddingBottom:7,
        paddingLeft:15,
        paddingRight:15,
        marginLeft:'auto',
        marginRight:10,
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'flex-end'
    },
    price:{
        fontSize:RFValue(10,580),
        color:'white',
        fontWeight:'bold',
        fontFamily:'Quicksand-Medium'
    },
    remove:{
        position:'absolute',
        width:wp('17.4'),
        height:wp('17.4'),
        borderRadius:wp('8.7'),
        right:-wp('8.7'),
        top:-wp('8.7'),
        backgroundColor:'#F6AA11',
        alignItems:'flex-start',
        justifyContent:'flex-end',
        padding:wp('2.5'),
        paddingLeft:wp('3.5'),
        paddingTop:wp('3.5')
    }
})