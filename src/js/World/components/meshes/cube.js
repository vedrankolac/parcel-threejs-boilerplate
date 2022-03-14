import { BoxGeometry, Mesh } from 'three';

const cube = material => {
  const geometry = new BoxGeometry();
  const mesh = new Mesh( geometry, material );

  mesh.tick = (delta) => {
    mesh.rotation.x += delta * 0.8;
    mesh.rotation.y += delta * 0.8;
  };

  return mesh;
}

export { cube };