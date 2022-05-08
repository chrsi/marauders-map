import * as L from 'leaflet'
import "leaflet/dist/leaflet.css";

const PRATER_LOCATION: L.LatLngExpression = [48.211128, 16.402549]
const ZOOM_LEVEL = 21; // since this is supposed to be an exploration game - zooming is not allowed.

export function useLeaflet(element: HTMLDivElement): L.Map {
    const mapOptions = {
        center: PRATER_LOCATION,
        zoom: ZOOM_LEVEL,
        minZoom: ZOOM_LEVEL,
        maxZoom: ZOOM_LEVEL,
        zoomControl: false,
        bounceAtZoomLimits: false,
        attributionControl: false
    }

    const leafletMap = L.map(element, mapOptions);
    L.tileLayer('/img/tile.png', { maxZoom: ZOOM_LEVEL }).addTo(leafletMap);
    return leafletMap;
}

