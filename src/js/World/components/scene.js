import { Scene, Color, Fog } from 'three';

function createScene() {
  const scene = new Scene();
  scene.background = new Color( 0x666666 );
  const fog = new Fog( 0x000000, 0, 60 );
  scene.fog = fog;
  return scene;
}

export { createScene };