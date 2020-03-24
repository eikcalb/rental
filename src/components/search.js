import React from 'react'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function Search({ placeholder, onPress }) {
    return (
        <GooglePlacesAutocomplete placeholder={placeholder || "Search"}
            minlength={3}
            autofocus={false}
            returnKeyType='default'
            fetchDetails={true}
            onPress={(data, details) => onPress(data, details)}
            listViewDisplayed='auto'
            query={{
                types: 'geocode',
                key: 'AIzaSyDOJ3o3JhYmMHb5-HTBg6pWOWnd3IE7zL4'
            }}
            nearbyPlacesAPI='GoogleReverseGeocoding'
            debounce={250}
            onFail={console.warn}
            // listUnderlayColor='white'
            styles={{
                row: { backgroundColor: 'white' }
            }
            }
        />
    )
}