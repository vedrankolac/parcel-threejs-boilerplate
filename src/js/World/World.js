import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Loop } from './system/Loop.js';
import { createRenderer } from './system/renderer.js';
import { createScene } from './components/scene.js';
import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { colorStandardMaterial } from './components/materials/color.js';
import { cube } from './components/meshes/cube.js'
import { sphere } from './components/meshes/sphere.js'

class World {
  constructor() {
    const renderer = createRenderer();
    const scene = createScene(renderer);
    const camera = createCamera();
    this.loop = new Loop(camera, scene, renderer);
    console.log('something');

    const controls = new OrbitControls(camera, renderer.domElement)
    const lights = createLights(scene);
    const material = colorStandardMaterial(0x3333ff);

    const nItems = 4;
    for (let i = 0; i < nItems; i++) {
      for (let j = 0; j < nItems; j++) {
        let temp_cube = cube(material);
        temp_cube.position.x = (i - nItems/2) * 1.2 + 0.5;
        temp_cube.position.y = (j - nItems/2) * 1.2 + 0.5;
        temp_cube.position.z = -4;
        scene.add( temp_cube );
        this.loop.updatables.push(temp_cube);
      }
    }
  }

  start() {
    this.loop.start();
  }

  stop() {
    this.loop.stop();
  }
}

export { World };