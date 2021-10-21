import React,{useEffect, useState} from 'react'
import {View,Image,StyleSheet,TouchableOpacity,Text} from 'react-native'
import MapView,{PROVIDER_GOOGLE,Marker,Overlay} from 'react-native-maps'
import GeoLocation from '@react-native-community/geolocation'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {RFValue} from 'react-native-responsive-fontsize'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

export default function Map({navigation})
{
    const [region,setregion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
  });

  const [markers,setmarkers] = useState([])
  

  useEffect(()=>{
   GeoLocation.getCurrentPosition(position=>{
        setregion({
            latitude:parseFloat(position.coords.latitude),
            longitude:parseFloat(position.coords.longitude),
            latitudeDelta:0.1,
            longitudeDelta:0.1
        })

        setmarkers([
            {image:require('../assets/images/products/mike.png'),name:"Catalyna",lat:{latitude:position.coords.latitude - 0.01,longitude:position.coords.longitude - 0.01}},
            {image:require('../assets/images/products/kimbelylozia.png'),name:"Abdiel Larralde",lat:{latitude:position.coords.latitude + 0.03,longitude:position.coords.longitude + 0.01}},
            {image:require('../assets/images/products/kimbely.png'),name:"Thalia",lat:{latitude:position.coords.latitude + 0.04,longitude:position.coords.longitude - 0.04}},
            {image:require('../assets/images/products/celia.png'),name:"Dakillah",lat:{latitude:position.coords.latitude + 0.015,longitude:position.coords.longitude + 0.02}}
        ])

    },error=>console.log(error))
  },[])

  const mapStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ]

    return (
         <View style={{flex:1,backgroundColor:'black'}}>
            <View style={style.header}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Feather name="arrow-left" size={RFValue(25,580)} color="white"></Feather>
                </TouchableOpacity>
                <Text style={style.headertitle}>Near By Influencers</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('MapView')}>
                    <AntDesign name="heart" color="#F6AA11" size={wp('5%')}></AntDesign>
                </TouchableOpacity>
            </View>
            
            <MapView 
            toolbarEnabled={true}
             
            style={{flex:1,zIndex:2}}
            provider={PROVIDER_GOOGLE} 
            region={region} 
            customMapStyle={mapStyle}>
                <Overlay bounds={[[region.latitude + region.latitudeDelta/2 + 2,region.longitude -region.longitudeDelta/2 - 2],[region.latitude-region.latitudeDelta/2 - 2,region.longitude+region.longitudeDelta/2+2]]} style={{opacity:0.5,position:'absolute'}} opacity={0.5} image={require('../assets/images/darkmode/background.png')}/>
                <Marker coordinate={{latitude:region.latitude,longitude:region.longitude}}>
                    <Image source={require('../assets/images/pin.png')} style={{width:wp('13.04'),height:wp('13.04')}} resizeMode="contain"></Image>    
                </Marker>
                {
                    markers.map((item,key)=>(
                        <Marker key={key} coordinate={item.lat} onPress={()=>navigation.navigate('InfluenceProfile')}>
                            <TouchableOpacity style={{alignItems:'center'}}>
                                <Image source={item.image} style={style.profile}></Image>
                                <Text style={style.name}>{item.name}</Text>
                            </TouchableOpacity>
                        </Marker>
                    ))
                }       
            </MapView>
        </View>
    )
}


const style = StyleSheet.create({
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:24,
        paddingRight:24,
        paddingTop:24,
        opacity:1,
        position:'absolute',
        width:wp('100'),
        zIndex:3
    },
    headertitle:{
        fontSize:RFValue(18,580),
        color:'white',
        fontFamily:'Quicksand-Medium'
    },
    profile:{
        width:wp('11.11'),
        height:wp('11.11'),
        borderRadius:wp('5.5')
    },
    name:{
        color:'white',
        fontSize:RFValue(14,580),
        fontFamily:'Quicksand-Medium'
    }
})