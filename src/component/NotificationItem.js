import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity,Image} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {useDarkMode} from 'react-native-dark-mode'
export default function NotificationItem({latest,title,message,received})
{
    return (
        <View style={[style.container,{backgroundColor:'#252525'}]}>
            <TouchableOpacity style={latest?style.latestalert:style.alert}>
                <MaterialCommunityIcons name="bell-ring-outline" color={'white'} size={wp('5.55')}></MaterialCommunityIcons>
            </TouchableOpacity>
            <View style={{flex:1,marginLeft:12,marginRight:12}}>
                <Text style={style.title}>{title}</Text>
                <Text style={style.message}>{message}</Text>
            </View>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <Image source={require('../assets/images/darkmode/calendar.png')}></Image>
                <Text style={style.received}>{received}</Text>
            </View>
        </View>
    )
    
}

const style = StyleSheet.create({
    container:{
        paddingLeft:24,
        paddingRight:24,
        paddingTop:16,
        paddingBottom:16,
        borderBottomColor:'black',
        borderBottomWidth:1,
        display:'flex',
        flexDirection:'row'
    },
    latestalert:{
        width:wp('13.28'),
        height:wp('13.28'),
        backgroundColor:'#F6AA11',
        borderRadius:wp('6.64'),
        justifyContent:'center',
        alignItems:'center'
    },
    alert:{
        width:wp('13.28'),
        height:wp('13.28'),
        backgroundColor:'#101010',
        borderRadius:wp('6.64'),
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:RFValue(15,580),
        fontFamily:'arial',
        color:'white'
    },
    message:{
        fontSize:RFValue(11,580),
        fontFamily:'arial',
        color:'#FFFFFF66'
    },
    received:{
        fontSize:RFValue(12,580),
        fontFamily:'arial',
        color:'#FFFFFFC7',
        marginLeft:5
    }

})