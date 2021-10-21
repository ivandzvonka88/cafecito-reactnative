import React from 'react';
import {View,ScrollView,StyleSheet,KeyboardAvoidingView,TouchableOpacity,Text,FlatList} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {RFValue} from 'react-native-responsive-fontsize'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import CartItem from '../component/CartItem'
export default function Payment({navigation})
{
    const cartitems = [
        {
            image:require('../assets/images/products/javana.png'),name:'Javana',description:'Karen Polinesia',price:50,count:1
        },
        {
            image:require('../assets/images/products/starbucks.png'),name:'Javana',description:'Karen Polinesia',price:50,count:1
        },
        {
            image:require('../assets/images/products/coffeebeans.png'),name:'Javana',description:'Karen Polinesia',price:50,count:1
        },
        {
            image:require('../assets/images/products/davidoff.png'),name:'Javana',description:'Karen Polinesia',price:50,count:1
        }
    ]

    return (
        <KeyboardAvoidingView style={{flex:1}} behavior="height">
            <View style={style.container}>
                <View style={style.header}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Feather name="arrow-left" size={RFValue(25,580)} color="white"></Feather>
                    </TouchableOpacity>
                    <Text style={style.headertitle}>Cart</Text>
                    <View style={{width:RFValue(25,580)}}></View>
                </View>
                <ScrollView>
                    <View style={{padding:24}}>
                        <FlatList
                            data={cartitems}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={({item,index})=>index}
                            contentContainerStyle={{paddingBottom:48}}
                            renderItem={({item,index})=>(
                                <CartItem {...item} key={index}></CartItem>
                            )}
                        ></FlatList>
                    </View>
                </ScrollView>
                <TouchableOpacity style={style.save_btn} onPress={()=>navigation.navigate('Payment')}>
                    <View style={{width:RFValue(29,580)}}></View>
                    <Text style={style.btntext}>Checkout</Text>
                    <AntDesign color="white" name="arrowright" size={RFValue(29,580)}></AntDesign>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#101010'
    },
    logo:{
        width:wp('25%'),
        height:wp('30%'),
        alignSelf:'center',
        marginTop:hp('4%')
    },
    header:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        padding:24
    },
    headertitle:{
        fontSize:RFValue(18,580),
        fontFamily:'Quicksand-Medium',
        color:'white'
    },
    title:{
        fontSize:RFValue(12,580),
        color:'black',
        fontFamily:'Quicksand-Medium'
    },
    content:{
        color:'#757575',
        fontFamily:'Quicksand-Medium',
        fontSize:RFValue(12,580)
    },
    save_btn:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:24,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:'#F6AA11',
        borderRadius:35,
        margin:24
    },
    btntext:{
        color:'white',
        fontFamily:'Montserrat-Medium',
        fontSize:RFValue(18,580)
    },
    scancard:{
        backgroundColor:'#F9F9F9',
        borderRadius:10,
        padding:25,
        paddingLeft:27,
        paddingRight:27,
        borderWidth:1,
        borderColor:'#E1E1E1',
        marginLeft:20,
        marginRight:20
    },
    paymentinfo:{
        padding:24,
        paddingLeft:44,
        paddingRight:44,
        paddingBottom:23,
        backgroundColor:'#FFF5F7'
    },
    paymentinfotitle:{
        fontSize:RFValue(15,580),
        color:'#F6AA11',
        fontFamily:'Quicksand-Bold'
    },
    input:{
        backgroundColor:'white',
        borderRadius:10,
        color:'#757575',
        fontSize:RFValue(12,580),
        fontFamily:'Quicksand-Medium',
        padding:15,
        borderWidth:1,
        borderColor:'#E1E1E1'
    }
})