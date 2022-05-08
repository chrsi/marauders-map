import * as L from 'leaflet'

const AREA_BOUNDING_BOX: L.LatLngBoundsLiteral = [[48.20918103903291, 16.401395386230487], [48.21146893541305, 16.40482861376955]]
// https://maps.googleapis.com/maps/api/staticmap?center=48.206243,16.410025&zoom=16&scale=2&size=1000x1000&maptype=terrain&format=png&visual_refresh=true&key=AIzaSyBVaUJhQ423xuQiWR8pxnhBJLXVGB9vf9Y
export function useWizardingPraterLayer(map: L.Map) {
  const imageUrl = '/img/map.png';
  const imageBounds = AREA_BOUNDING_BOX;
  
  L.imageOverlay(imageUrl, imageBounds).addTo(map);
}
