import { useLeaflet } from "@/leaflet/leaflet";
import { usePlayerCentering } from "@/leaflet/player-centering";
import { usePlayerMarker } from "@/leaflet/player-marker";
import { useWizardingPraterLayer } from "@/leaflet/wizarding-prater-layer";

export function useWizardingWorld(element: HTMLDivElement) {
  const map = useLeaflet(element);

  useWizardingPraterLayer(map);

  usePlayerCentering(map)
  usePlayerMarker(map);
}