import type { Location } from '@/localization/location';
import { useCurrentLocation } from '@/localization/location-api';
import * as L from 'leaflet'
import { watch } from "vue";
import { harryPotterMarker } from './marker';

export function usePlayerMarker(map: L.Map) {
  let marker: L.Marker | null = null;

  const {location } = useCurrentLocation()
  watch(location, updateMarker)

  function updateMarker(location: Location | null) {
      if (marker != null) {
        map.removeLayer(marker);
      }

      if (location == null) return;

      marker = L.marker([location.lat, location.long], { icon: harryPotterMarker })
      marker.addTo(map);
  }
}