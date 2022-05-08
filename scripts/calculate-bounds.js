// const _C = { x: 128, y: 128 };
// const _J = 256 / 360;
// const _L = 256 / (2 * Math.PI);

// function tb(a) {
// 	return 180 * a / Math.PI
// }

// function sb(a) {
// 	return a * Math.PI / 180
// }
	
// function bounds(a, b, c) {
// 	null != b && (a = Math.max(a, b));
// 	null != c && (a = Math.min(a, c));
// 	return a
// }

// function latlonToPt(ll) {
//   a = bounds(Math.sin(sb(ll[0])), -(1 - 1E-15), 1 - 1E-15);
//   return {
//   	x: _C.x + ll[1] * _J,
//     y: _C.y + 0.5 * Math.log((1 + a) / (1 - a)) * - _L
//   }
// }

// function ptToLatlon(pt) {
// 	return [tb(2 * Math.atan(Math.exp((pt.y - _C.y) / -_L)) - Math.PI / 2),(pt.x - _C.x) / _J]
// }


// function calculateBbox(ll, zoom, sizeX, sizeY, scale) {
// 	const cp = latlonToPt(ll);
//   const pixelSize = Math.pow(2, -(zoom + 1));
//   const pwX = sizeX*pixelSize;
// 	const pwY = sizeY*pixelSize;
  
// 	return {
//   	ne: ptToLatlon({x: cp.x + pwX, y: cp.y - pwY}),
//     sw: ptToLatlon({x: cp.x - pwX, y: cp.y + pwY})
// 	}
// }

// const [node, file, lat, lon, zoom] = process.argv
// const center = [48.206243,16.410025]
// const size = 640
// const scale = 2

// process.stdout.write(`Calculating bounding box for lat: ${lat}, lon: ${lon} on zoom level: ${zoom}...\n\n`)

// const { ne, sw } = calculateBbox(center, zoom, size, size, scale);
// console.warn(ne, sw)
// process.stdout.write(`[[${sw[0]}, ${sw[1]}], [${ne[0]}, ${ne[1]}]]\n`);

// function calculateBbox(ll, zoom, sizeX, sizeY, scale) {
// 	const cp = latlonToPt(ll);
//   const pixelSize = Math.pow(2, -(zoom + 1));
//   const pwX = sizeX*pixelSize;
// 	const pwY = sizeY*pixelSize;
  
// 	return {
//   	ne: ptToLatlon({x: cp.x + pwX, y: cp.y - pwY}),
//     sw: ptToLatlon({x: cp.x - pwX, y: cp.y + pwY})
// 	}
// }

const _C = { x: 128, y: 128 };
const _J = 256 / 360;
const _L = 256 / (2 * Math.PI);

function tb(a) {
	return 180 * a / Math.PI
}

function sb(a) {
	return a * Math.PI / 180
}
	
function bounds(a, b, c) {
	null != b && (a = Math.max(a, b));
	null != c && (a = Math.min(a, c));
	return a
}

function latlonToPt(ll) {
  a = bounds(Math.sin(sb(ll[0])), -(1 - 1E-15), 1 - 1E-15);
  return {
  	x: _C.x + ll[1] * _J,
    y: _C.y + 0.5 * Math.log((1 + a) / (1 - a)) * - _L
  }
}

function ptToLatlon(pt) {
	return [tb(2 * Math.atan(Math.exp((pt.y - _C.y) / -_L)) - Math.PI / 2),(pt.x - _C.x) / _J]
}


function calculateBbox(ll, zoom, sizeX, sizeY, scale) {
	const cp = latlonToPt(ll);
  const pixelSize = Math.pow(2, -(zoom + 1));
  const pwX = sizeX*pixelSize;
	const pwY = sizeY*pixelSize;
  
	return {
  	ne: ptToLatlon({x: cp.x + pwX, y: cp.y - pwY}),
    sw: ptToLatlon({x: cp.x - pwX, y: cp.y + pwY})
	}
}

const [node, file, lat, lon, zoom] = process.argv
const center = [+lat, +lon]
const size = 640
const scale = 2

const { ne, sw } = calculateBbox(center, +zoom, size, size, scale);
process.stdout.write(`[[${sw[0]}, ${sw[1]}], [${ne[0]}, ${ne[1]}]]\n`);
