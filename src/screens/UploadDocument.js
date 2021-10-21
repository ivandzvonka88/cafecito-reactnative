import React,{useState} from 'react'
import {View,StyleSheet,TouchableOpacity,Text,ScrollView} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {RFValue} from 'react-native-responsive-fontsize'
import Feather from 'react-native-vector-icons/Feather'
import Modal from 'react-native-modal'
import Upload from '../component/UploadDocument'
import Guide from '../component/IntroDocument'
export default function UploadDocument({navigation})
{
    const [modal,setmodal] = useState(false)
    const [index,setindex] = useState(0)

    const gettitle = () => {
        switch(index)
        {
            case 0:
                return 'Next';
            case 1:
                return 'Start Identification';
            case 2:
                return 'Submit';
        }
    }

    const action = () => {
        if(index < 2)
        {
            setindex(index + 1)
        }
        else
        {
            setmodal(true)
        }
    }
    return (
        <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity onPress={()=>{if(index > 0){setindex(index - 1)}else{navigation.goBack()}}}>
                    <Feather name="arrow-left" size={RFValue(25,580)} color='white'></Feather>
                </TouchableOpacity>
                <Text style={style.headertitle}>Upload Document</Text>
                <View style={{width:RFValue(25,580)}}></View>
            </View>
            <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
                {
                    index < 2? <Guide index={index}/>:<Upload/>
                }
                
            </ScrollView>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                <TouchableOpacity style={[style.dot,{backgroundColor:index >= 0?'#F6AA11':'#C2C2C2'}]}></TouchableOpacity>
                <TouchableOpacity style={[style.dot,{backgroundColor:index >= 1?'#F6AA11':'#C2C2C2'}]}></TouchableOpacity>
                <TouchableOpacity style={[style.dot,{backgroundColor:index >= 2?'#F6AA11':'#C2C2C2'}]}></TouchableOpacity>
            </View>
            <TouchableOpacity style={style.btncontainer} onPress={action}>
                <View style={{width:RFValue(16,580)}}></View>
                <Text style={style.btntext}>{gettitle()}</Text>
                <Feather name="arrow-right" color="white" size={RFValue(16,580)}></Feather>
            </TouchableOpacity>

            <Modal 
                isVisible={modal}
                onBackdropPress={()=>setmodal(false)}
                >
                <View style={style.modalinside}>
                    <View style={style.securitylogo}>
                        <Feather name="check" color="#F6AA11" size={RFValue(33,580)}></Feather>
                    </View>
                    <Text style={style.description}>Your account has been {'\n'} approved</Text>
                    <TouchableOpacity style={[style.btncontainer,{width:wp('34.54'),justifyContent:'center'}]} onPress={()=>{setmodal(false);}}>
                        <Text style={style.btntext}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:'#101010'
    },
    header:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    headertitle:{
        fontSize:RFValue(18,580),
        fontFamily:'Quicksand-Medium',
        color:'white'
    },
    btncontainer:{
        display:'flex',
        justifyContent:'space-between',
        padding:15,
        backgroundColor:'#F6AA11',
        borderRadius:35,
        flexDirection:'row',
        alignItems:'center',
        marginTop:hp('2.5%')
    },
    btntext:{
        color:'white',
        fontSize:RFValue(18,580),
        fontFamily:'Montserrat-Medium'
    },
    modalinside:{
        backgroundColor:'white',
        padding:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:17
    },
    securitylogo:{
        width:wp('27'),
        height:wp('27'),
        borderRadius:wp('13.5'),
        backgroundColor:'#FFF5F7',
        justifyContent:'center',
        alignItems:'center'
    },
    description:{
        fontSize:RFValue(18,580),
        fontFamily:'Quicksand-Medium',
        textAlign:'center',
        marginTop:16
    },
    dot:{
        width:wp('3.14'),
        height:wp('3.14'),
        borderRadius:wp('1.57'),
        backgroundColor:'#C2C2C2',
        marginRight:5
    }
})