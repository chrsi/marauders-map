import type { Location } from '@/localization/location';
import { useCurrentLocation } from '@/localization/location-api';
import * as L from 'leaflet'
import "leaflet/dist/leaflet.css";
import { watch } from 'vue';
import { harryPotterMarker } from './marker';

const PRATER_LOCATION: L.LatLngExpression = [48.2059151, 16.4078496]

export function useLeaflet(element: HTMLDivElement) {
    const { location } = useCurrentLocation();

    const leafletMap = L.map(element, {
        center: PRATER_LOCATION,
        zoom: 30
    })
      
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(leafletMap);

    watch(location, recenterMap)
    watch(location, setMarker)

    function recenterMap(location: Location | null) {
        if (location != null) {
            leafletMap.setView(
                [location.lat, location.long]
            )
        }
    }

    let marker: L.Marker | null = null;
    function setMarker(location: Location | null) {
        if (marker != null) {
            leafletMap.removeLayer(marker);
        }
        if (location == null) return;
        marker = L.marker([location.lat, location.long], { icon: harryPotterMarker })
        marker.addTo(leafletMap);
    }
}
