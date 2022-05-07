import { useCurrentLocation } from '@/localization/location-api';
import * as L from 'leaflet'
import "leaflet/dist/leaflet.css";
import { watch, watchEffect } from 'vue';

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

    watch(location, (value) => {
        if (value != null) {
            console.warn(location.value);
            leafletMap.setView(
                [value.lat, value.long]
            )
        }
    })
}
