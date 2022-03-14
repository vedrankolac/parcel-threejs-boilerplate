import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { Loop } from './system/Loop.js';
import { createRenderer } from './system/renderer.js';
import { createScene } from './components/scene.js';
import { createCamera } from './components/camera.js';
// import hdr from './textures/studio_small_08_4k.hdr';

let camera;
let renderer;
let scene;
let loop;
let controls;

class World {
  constructor() {

    renderer = createRenderer();
    scene = createScene();
    camera = createCamera();
    loop = new Loop(camera, scene, renderer);
    controls = new OrbitControls(camera, renderer.domElement)

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    // scene.environment = pmremGenerator.fromScene( new RoomEnvironment(), 0.001 ).texture;

    // lights

    const light_ambient = new THREE.AmbientLight({ color: 0x000000, intensity: 1 })
    scene.add(light_ambient)

    const light = new THREE.DirectionalLight('white', 2);
    light.position.set(6, 6, 6);
    scene.add(light)

    // const light1 = new THREE.PointLight( 0xffffff, 200, 0 );
    // light1.position.set( 0, 200, 0 );
    // scene.add( light1 );

    // const light2 = new THREE.PointLight( 0xffffff, 200, 0 );
    // light2.position.set( 100, 200, 100 );
    // scene.add( light2 );

    // const light3 = new THREE.PointLight( 0xffffff, 200, 0 );
    // light3.position.set( - 100, - 200, - 100 );
    // scene.add( light3 );

    // geometry

    // ---

    const geometry_box = new THREE.BoxGeometry();
    const geometry_sphere = new THREE.SphereGeometry();
    const material = new THREE.MeshStandardMaterial({
      color: 0x222266,
      emissive: 0x000000,
      roughness: 0.01,
      metalness: 0.01
    });

    const resolve = (hdrmap) => {
      console.log('resolved');

      console.log('loaded');

      let envmap = envmaploader.fromCubemap(hdrmap);
      let materialEnv = new THREE.MeshPhysicalMaterial({
        color: 0x222266,
        emissive: 0x000000,
        roughness: 0.01,
        metalness: 0.01,
        envMap: envmap.texture
      });

      const sphere_0 = new THREE.Mesh(geometry_sphere, materialEnv);
      scene.add(sphere_0);

    }

    const exception = () => {
      console.log('exception');
    }

    const envmaploader = new THREE.PMREMGenerator(renderer);
    const loader = new RGBELoader();
    loader.setPath('./textures/');
    loader.load('studio_small_08_4k.hdr', resolve, undefined, exception);

    // ---

    // create meshes

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