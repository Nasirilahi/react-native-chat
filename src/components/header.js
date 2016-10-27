import React, { Component } from 'react';
import { View, Text } from 'react-native';

const Header = ()=>{
    return(
        <View style={{alignItems:'center',justifyContent:'center', backgroundColor:'#90A4AE'}}>
            <Text style={{fontSize:20, color:'white'}}>Public Chat</Text>
        </View>
    );
}

export default Header;