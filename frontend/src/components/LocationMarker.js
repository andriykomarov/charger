import { Icon } from '@iconify/react'
import { Marker } from '@react-google-maps/api'

const LocationMarker = ({ lat, lng, onClick }) => {

  return (
    <Marker 
        position={{lat : 37.749997 ,lng : -122.1833322}}
        icon={{
            url: "https://www.svgrepo.com/show/223582/lightning.svg",
            scaledSize: new window.google.maps.Size(50,50),
        }}
    />
  )
}

export default LocationMarker