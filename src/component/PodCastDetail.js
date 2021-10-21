import React from 'react';
import {View,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {useSelector} from 'react-redux'
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
export default function PodCastDetail({image,title,description,tags,navigation})
{
    const {role} = useSelector(state=>state.auth)
    return (
        <TouchableOpacity style={style.container} onPress={()=>navigation.navigate('PodcastDetail')}>
            <Image source={image} style={{width:wp('23.18'),height:wp('23.18'),borderRadius:14}}></Image>
            <View style={{marginLeft:15,flex:1}}>
                <Text style={style.title}>{title}</Text>
                <Text style={style.description}>{description}</Text>
                <View style={{marginTop:8,display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                    {
                        tags.map((item,index)=>{
                            return (
                                <TouchableOpacity style={style.tag} key={index}>
                                    <Text style={style.tagtext}>{item}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>
            {
                role == 'influencer' && (
                    <TouchableOpacity style={style.remove}>
                        <MaterialCommunity name="delete-forever" color="#F6AA11" size={RFValue(13,580)}></MaterialCommunity>
                    </TouchableOpacity>
                )
            }
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container:{
        padding:17,
        shadowColor:'black',
        shadowOpacity:0.16,
        shadowOffset:{
            height:3,
            width:0
        },
        shadowRadius:5,
        borderRadius:9,
        backgroundColor:'#252525',
        display:'flex',
        flexDirection:'row',
        marginBottom:12,
        alignItems:'center'
    },
    title:{
        fontSize:RFValue(15,580),
        color:'white',
        fontFamily:'Quicksand-Medium'
    },
    description:{
        color:'#F6AA11',
        fontSize:RFValue(10,580),
        fontFamily:'Quicksand-Medium'
    },
    tag:{
        paddingLeft:5,
        paddingRight:5,
        paddingTop:3,
        paddingBottom:3,
        borderRadius:11,
        borderWidth:1,
        borderColor:'#CECECE',
        marginRight:5
    },
    tagtext:{
        fontSize:RFValue(12,580),
        color:'#CECECE',
        fontFamily:'Quicksand-Medium'
    },
    remove:{
        borderRadius:wp('3.744'),
        width:wp('7.488'),
        height:wp('7.488'),
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#F6AA11'
    }
})