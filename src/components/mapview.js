import React from 'react'
import MV from "react-native-maps";
import { View, StyleSheet } from "react-native";
import Search from './search';
import { Button } from 'react-native-elements';

export function MapView({ region, onRegionChange }) {
    return (
        <MV style={{ flex: 1 }}
            provider='google'
            loadingEnabled
            region={region}
            showsUserLocation={false}
            zoomEnabled={true}
            zoomControlEnabled={true}
            onRegionChange={r => onRegionChange(r)} />
    )
}

export class Map extends React.Component {
    state = {
        region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>


                <View style={{ flex: 4 }}>
                    <MapView onRegionChange={(region) => this.setState({ region })} region={this.state.region} />
                </View>

                <View style={style.input}>
                    <Search onPress={(data, details) => {
                        const region = { ...this.state.region }
                        const { geometry: { location } } = details
                        region.latitude = location.lat
                        region.longitude = location.lng

                        this.setState({ region })
                        console.info(details.formatted_address, details.geometry.location)
                    }}
                    />
                </View>

                <View style={style.button}>
                    <Button raised title="POST YOUR AD" buttonStyle={style.button} onPress={() => this.props.navigation.navigate('Post')} />
                </View>

            </View>
        )
    }
}

const style = StyleSheet.create({
    input: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        zIndex: 10,
        flex: 0.4
    },
    button: {
        position: 'absolute',
        left: 25,
        right: 25,
        bottom: 10,
        zIndex: 20,
        backgroundColor: 'red',
    }
})