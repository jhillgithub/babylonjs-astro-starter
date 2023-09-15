import { MeshBuilder, Scene, StandardMaterial, Color3 } from "@babylonjs/core";

export const createBox = (scene: Scene) => {
  const box = MeshBuilder.CreateBox("box", {}, scene);

  const boxMat = new StandardMaterial("boxMat");
  boxMat.diffuseColor = new Color3(0, 1, 1);
  box.material = boxMat;

  scene.registerBeforeRender(() => {
    box.rotation.y += 0.001 * scene.deltaTime;
  });

  return box;
};
