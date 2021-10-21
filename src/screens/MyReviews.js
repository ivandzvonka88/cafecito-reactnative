import React,{useState} from 'react';
import {View,StyleSheet,TouchableOpacity,Text,FlatList,TextInput} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import Feather from 'react-native-vector-icons/Feather'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
import ReviewItem from '../component/ReviewItem'
import Modal from 'react-native-modal'

export default function MyReviews({navigation})
{
    const reviews = [
        {profile:require('../assets/images/profile/profile6.png'),name:'Daniela Alfaro',count:3,time:'2 days ago',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},
        {profile:require('../assets/images/profile/profile18.png'),name:'Barbara De Regil',count:3,time:'2 days ago',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
    ]

    const [modal,setmodal] = useState(false)
    return (
        <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Feather name="arrow-left" size={RFValue(25,580)} color="white"></Feather>
                </TouchableOpacity>
                <Text style={style.title}>My Reviews</Text>
                <TouchableOpacity style={style.righticon}>
                    
                </TouchableOpacity>
            </View>
            <FlatList
                data={reviews}
                showsVerticalScrollIndicator={false}
                style={{marginBottom:45,marginTop:24}}
                keyExtractor={({item,index})=>index}
                renderItem={({item,index})=><ReviewItem {...item} key={index} me={true} reply={()=>setmodal(true)}></ReviewItem>}
            ></FlatList>

            <Modal 
                isVisible={modal}
                onBackdropPress={()=>setmodal(false)}
            >
                <View style={style.modalinside}>
                    <Text style={[style.title,{color:'black',textAlign:'center'}]}>Reply to customer</Text>
                    <TextInput style={style.replytext} textAlignVertical="top" numberOfLines={8}></TextInput>
                    <TouchableOpacity style={style.sendbtn}>
                        <Text style={style.btntext}>Send</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignSelf:'center',marginTop:12}} onPress={()=>setmodal(false)}>
                        <Text style={[style.title,{color:'black',fontSize:RFValue(12,580)}]}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#101010'
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:24,
        paddingRight:24,
        paddingTop:24
    },
    righticon:{
        width:wp('9%'),
        height:wp('9%'),
        borderRadius:wp('5%'),
        justifyContent:'center',
        alignItems:'center',
    },
    headertitle:{
        fontSize:RFValue(22,580)
    },
    title:{
        fontSize:RFValue(18,580),
        color:'white',
        fontFamily:'Quicksand-Medium'
    },
    modalinside:{
        backgroundColor:'white',
        padding:20,
        borderRadius:17
    },
    replytext:{
        borderRadius:5,
        borderWidth:1,
        borderColor:'#BFBFBF',
        marginTop:20,
        fontFamily:'Quicksand-Medium',
        color:'black'
    },
    sendbtn:{
        backgroundColor:'#F6AA11',
        borderRadius:23,
        padding:13,
        width:wp('31.64'),
        marginTop:11,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    btntext:{
        fontFamily:'Montserrat-Medium',
        color:'white',
        fontSize:RFValue(15,580)
    }
})