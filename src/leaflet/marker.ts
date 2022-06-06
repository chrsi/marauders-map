import * as L from 'leaflet'

const ICON_SIZE: L.PointTuple = [40,40]

export const harryPotterMarker = L.icon({
    iconUrl: 'img/harry-potter.png',
    iconSize: ICON_SIZE
})
