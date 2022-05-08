import type { Location } from '@/localization/location';
import { useCurrentLocation } from '@/localization/location-api';
import { watch } from 'vue';

export function usePlayerCentering(map: L.Map) {
  const { location } = useCurrentLocation();

  watch(location, recenterMap)
  
  function recenterMap(location: Location | null) {
    if (location != null) {
      map.setView([location.lat, location.long])
    }
  }
}