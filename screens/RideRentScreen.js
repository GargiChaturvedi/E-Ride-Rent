import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class RideRentScreen extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.heading}>Rent A Ride</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'pink'
    },
    heading: {
        fontFamily: 'cursive',
        color: 'navy',
        marginTop: 50,
        fontSize: 50
    }
});