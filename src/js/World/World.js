import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Loop } from './system/Loop.js';
import { createRenderer } from './system/renderer.js';
import { createScene } from './components/scene.js';
import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { blue } from './components/materials/blue.js';
import { cube } from './components/meshes/cube.js'
import { sphere } from './components/meshes/sphere.js'

let loop;

class World {
  constructor() {
    const renderer = createRenderer();
    const scene = createScene(renderer);
    const camera = createCamera();
    loop = new Loop(camera, scene, renderer);

    const controls = new OrbitControls(camera, renderer.domElement)
    const lights = createLights(scene);
    const material = blue(0x222266);

    const cube_0 = cube(material);
    scene.add( cube_0 );
    cube_0.position.x = 2;

    const sphere_0 = sphere(material);
    scene.add( sphere_0 );
    sphere_0.position.x = -2;

    loop.updatables.push(cube_0);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };