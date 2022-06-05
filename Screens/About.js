import React from 'react';
import {View, Text, StyleSheet} from "react-native"

function About(props) {
    return (
        <View className={styles.container}>
            <Text>About Page</Text> 
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:24,
        flex: 1
    }
})

export default About;