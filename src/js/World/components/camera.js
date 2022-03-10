import { PerspectiveCamera } from 'three';

function createCamera() {
  camera = new PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 100 );
  camera.position.z = 20;
  return camera;
}

export { createCamera };