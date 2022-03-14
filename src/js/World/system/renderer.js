import { WebGLRenderer, sRGBEncoding } from 'three';

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });
  renderer.physicallyCorrectLights = true;
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.outputEncoding = sRGBEncoding;
  document.body.appendChild( renderer.domElement );
  return renderer;
}

export { createRenderer };