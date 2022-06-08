import * as L from 'leaflet'

const ICON_SIZE: L.PointTuple = [100,100]

export const harryPotterMarker = L.icon({
    iconUrl: 'img/harry-potter.png',
    iconSize: ICON_SIZE
})
