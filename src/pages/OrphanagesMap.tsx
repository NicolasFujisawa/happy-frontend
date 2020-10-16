import React from 'react';
import mapMarker from '../images/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarker,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [174, 2]
});

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={ mapMarker } alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>
            São Paulo
          </strong>
          <span>
            São José dos Campos
          </span>
        </footer>
      </aside>

      <Map 
        center={[-23.1935702,-45.8786849]} 
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
        />

        <Marker
          position={[-23.1935702,-45.8786849]}
          icon={mapIcon}
        >
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className='map-popup'
          >
            Lar das meninas
            <Link to="/create">
              <FiArrowRight size={20} color="#FFF"/>
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="/create" className="create-orphanage">
        <FiPlus size={ 32 } color="#FFF"/>
      </Link>
    </div>
  );
}

export default OrphanagesMap;