import { useLeaflet } from "@/leaflet/leaflet";
import { usePlayerCentering } from "@/leaflet/player-centering";
import { usePlayerMarker } from "@/leaflet/player-marker";
import { useTargetMarker } from "@/leaflet/target-marker";
import { useWizardingPraterLayer } from "@/leaflet/wizarding-prater-layer";
import type { Location } from "@/localization/location";

const TARGET_LOCATION: Location = { lat: 48.210651569429906, long: 16.40287623807812 }

export function useWizardingWorld(element: HTMLDivElement) {
  const map = useLeaflet(element);

  useWizardingPraterLayer(map);

  usePlayerCentering(map);
  usePlayerMarker(map);
  useTargetMarker(map, TARGET_LOCATION);
}