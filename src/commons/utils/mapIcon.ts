import Leaflet from 'leaflet';
import mapMarker from '../../images/map-marker.svg';

const happyMapIcon = Leaflet.icon({
  iconUrl: mapMarker,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
})

export default happyMapIcon;