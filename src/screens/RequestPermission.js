import React,{useState} from 'react';
import {View,ImageBackground,StyleSheet,KeyboardAvoidingView,Image,TouchableOpacity,Text,TextInput,ScrollView} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen' 
import {useDispatch,useSelector} from 'react-redux'
export default function RequestPermission({navigation})
{
    const {role} = useSelector(state=>state.auth)

    const logoimages = [
        require('../assets/images/darkmode/Character.png'),
        require('../assets/images/darkmode/notification.png')
    ];

    const influencer_logoimages = [
        require('../assets/images/influencer_location.png'),
        require('../assets/images/influencer_notification.png')
    ]

    const influencer_description = [
        'Enable location to customers show \n you on the app.',
        'Allow Notification to get new requests,\n messages, feedback and news.'
    ]

    const description = [
        "See shows you influencers and \n celebrities nearby.\n Enable your location to see them.",
        "We will notify you about new podcasts,\n live streams, videos and chat."
    ]

    const [index,setindex] = useState(0)

    const requestpermission = () => {
        if(index == 0)
        {
            setindex(1);
        }
        else
        {
            if(role == 'influencer')
            {
                navigation.navigate('Pricing')
            }
            else
            {
                navigation.navigate('Home')
            }
            
        }
    }

    const getstyle = () => {
    }

    return (
        <View style={style.container}>
            <View style={{flex:1}}>
                <Image source={role == 'influencer'?influencer_logoimages[index]:logoimages[index]} style={index == 0?style.logo1:style.logo2}></Image>
                <Text style={style.description}>{role == 'influencer'?influencer_description[index]:description[index]}</Text>
            </View>
            <View>
                <TouchableOpacity style={style.btncontainer} onPress={requestpermission}>
                    <View style={{width:RFValue(16,580)}}></View>
                    <Text style={style.btntext}>{index == 0?'Enable Location':'Allow Notifications'}</Text>
                    {
                        index == 0?<MaterialIcons name="my-location" color="white" size={RFValue(16,580)}></MaterialIcons>:<Feather name="bell" color="white" size={RFValue(16,580)}></Feather>
                    }
                </TouchableOpacity>
                <TouchableOpacity style={{alignSelf:'center',marginTop:17}}>
                    <Text style={{fontSize:RFValue(16,580),color:"white",fontFamily:'Montserrat-Regular'}}>Not now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#101010',
        padding:24,
        flexDirection:'column'
    },
    logo1:{
        alignSelf:'center',
        marginTop:hp('5%')
    },
    logo2:{
        alignSelf:'center',
        marginTop:hp('4%')
    },
    description:{
        fontSize:RFValue(16,580),
        color:'white',
        textAlign:'center',
        marginTop:43,
        fontFamily:'Montserrat-Regular'
    },
    btncontainer:{
        display:'flex',
        justifyContent:'space-between',
        padding:15,
        backgroundColor:'#F6AA11',
        borderRadius:35,
        flexDirection:'row',
        alignItems:'center',
        marginTop:hp('4%')
    },
    btntext:{
        color:'white',
        fontSize:RFValue(18,580),
        fontFamily:'Montserrat-Medium'
    }
})