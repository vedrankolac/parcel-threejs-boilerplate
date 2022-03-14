import {MeshStandardMaterial} from 'three';

const materialBlue = color => {
  const parameters = {
    color: color,
    emissive: 0x000000,
    roughness: 0.01,
    metalness: 0.01
  } 
  const material = new MeshStandardMaterial(parameters);
  return material;
}

export { materialBlue };