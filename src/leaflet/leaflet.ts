import * as L from 'leaflet'
import "leaflet/dist/leaflet.css";

export function useLeaflet(element: HTMLDivElement) {
    const leafletMap = L.map(element, {
        center: [51.505, -0.09],
        zoom: 13
    })
      
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(leafletMap);
}
