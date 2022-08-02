import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import LocationMarker from './LocationMarker'
import mapStyles from './mapStyles'


const Map = ({center, zoom, disableDefaultUI}) => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    if(!isLoaded) return <div>Loading...</div>

    const options = {
      styles: mapStyles,
      disableDefaultUI: true,
      zoomControl: true, 
    }

    return (
    <div className="map">
      <GoogleMap zoom={zoom} center={center} options={options} mapContainerClassName="map-container">
        <LocationMarker lat={center.lat} lng={center.lng} />
      </GoogleMap>
    </div>
  )
}

Map.defaultProps = {
  center : {
    lat: 37.749997,
    lng: -122.1833322,
  },
  zoom : 14,
  disableDefaultUI: true,
}

export default Map