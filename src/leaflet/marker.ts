import * as L from 'leaflet'

const ICON_SIZE: L.PointTuple = [75,75]

export const harryPotterMarker = L.icon({
    iconUrl: 'img/harry-potter.png',
    iconSize: ICON_SIZE
})

export const timeTurnerMarker = L.icon({
    iconUrl: 'img/time-turner.png',
    iconSize: ICON_SIZE
})