import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Loop } from './system/Loop.js';
import { createRenderer } from './system/renderer.js';
import { createScene } from './components/scene.js';
import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { materialBlue} from './components/material_blue.js';

let camera;
let renderer;
let scene;
let loop;
let controls;
let lights;

class World {
  constructor() {
    renderer = createRenderer();
    scene = createScene(renderer);
    camera = createCamera();
    loop = new Loop(camera, scene, renderer);
    controls = new OrbitControls(camera, renderer.domElement)
    lights = createLights(scene);

    const geometry_box = new THREE.BoxGeometry();
    const geometry_sphere = new THREE.SphereGeometry();
    const material = materialBlue(0x222266);

    const cube_1 = new THREE.Mesh( geometry_box, material );
    cube_1.position.x = 2;
    cube_1.position.z = 3;
    scene.add( cube_1 );

    const cube_2 = new THREE.Mesh( geometry_box, material );
    cube_2.position.x = 0;
    cube_2.position.y = 2;
    cube_2.scale.x = 1.5;
    cube_2.scale.y = 1.5;
    cube_2.scale.z = 1.5;
    scene.add( cube_2 );

    const sphere_1 = new THREE.Mesh( geometry_sphere, material );
    sphere_1.position.x = -3;
    sphere_1.scale.x = 1.5;
    sphere_1.scale.y = 1.5;
    sphere_1.scale.z = 1.5;
    scene.add( sphere_1 );

    const sphere_2 = new THREE.Mesh( geometry_sphere, material );
    sphere_2.position.x = 0;
    sphere_2.position.y = -2;
    sphere_2.position.z = -6;
    scene.add( sphere_2 );

    cube_1.tick = (delta) => {
      // increase the cube's rotation each frame
      cube_1.rotation.x += delta * 0.8;
      cube_1.rotation.y += delta * 0.8;
    };

    loop.updatables.push(cube_1);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };