import * as L from 'leaflet'

const AREA_BOUNDING_BOX: L.LatLngBoundsLiteral = [[48.20918103903291, 16.401395386230487], [48.21146893541305, 16.40482861376955]]

export function useWizardingPraterLayer(map: L.Map) {
  const imageUrl = '/img/map.png';
  const imageBounds = AREA_BOUNDING_BOX;
  
  L.imageOverlay(imageUrl, imageBounds).addTo(map);
}
