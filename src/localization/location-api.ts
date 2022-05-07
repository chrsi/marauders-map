import { reactive, ref } from "vue"
import type { Location } from './location'
import type { Ref } from 'vue'

export function useCurrentLocation(): { location: Ref<Location | null>} {
    let location = ref<Location | null>(null);

    navigator.geolocation.watchPosition(success => {
        location.value = {
            lat: success.coords.latitude,
            long: success.coords.longitude
        }
    })
    
    return {
        location
    }
}
