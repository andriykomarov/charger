import { GoogleMap, useLoadScript } from '@react-google-maps/api'



const Map = ({center, zoom, disableDefaultUI}) => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    if(!isLoaded) return <div>Loading...</div>

    return (
    <GoogleMap zoom={zoom} center={center} options={disableDefaultUI={disableDefaultUI}} mapContainerClassName="map-container"></GoogleMap>
  )
}

Map.defaultProps = {
  center : {
    lat: 37.749997,
    lng: -122.2833322,
  },
  zoom : 12,
  disableDefaultUI: true,
}

export default Map