import type { Location } from '@/localization/location';
import * as L from 'leaflet'
import { timeTurnerMarker } from './marker';

export function useTargetMarker(map: L.Map, location: Location) {
  let marker: L.Marker | null = null;

  marker = L.marker([location.lat, location.long], { icon: timeTurnerMarker })
  marker.addTo(map);
}