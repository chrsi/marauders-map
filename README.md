# Marauder's Map

# Instructions
## Creating a scenery
The area is displayed via an image layer on top of the tile layer. To properly position this image layer i extracted an image via Googles Static Api and calculated it's bounding box coordinates.
These are the steps to create the image layer:
1. Search for a fitting image via the Google Static API: 
`https://maps.googleapis.com/maps/api/staticmap?center=<lat>,<lon>&zoom=<zoom>&scale=2&size=640x640&maptype=satellite&format=png&visual_refresh=true&key=<api-key>`.

    Replace the `<lat>`, `<lon>` parameter with whatever coordinate is the center of your scene.

    Replace the `<zoom>` parameter so your entire scene is visible on the image.
    
    Use your own api key in `<api-key>` 😉
1. Call `npm run calc-bounds <lat> <lon> <zoom>` with the previously selected parameters.
1. Use the result in the `wizarding-prater-layer.ts` file as a bounding box.