import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css'

function App() {
  const position = [51.505, -0.09]

  return (
      <MapContainer id='map' center={position} zoom={2.5} scrollWheelZoom={true}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    )
}

export default App
