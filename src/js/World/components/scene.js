import { Scene, Color, Fog, PMREMGenerator } from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';


function createScene(renderer) {
  const scene = new Scene();
  scene.background = new Color( 0x666666 );
  
  const fog = new Fog( 0x000000, 0, 60 );
  scene.fog = fog;
  
  const pmremGenerator = new PMREMGenerator(renderer);
  // scene.environment = pmremGenerator.fromScene( new RoomEnvironment(), 0.001 ).texture;

  return scene;
}

export { createScene };