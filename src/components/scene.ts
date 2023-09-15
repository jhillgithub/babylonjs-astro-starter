import type { Engine } from "@babylonjs/core";
import { Scene } from "@babylonjs/core/scene";
import { createLights } from "./lights";
import { createCamera } from "./camera";
import { createBox } from "./box";

export const createScene = async function (
  engine: Engine,
  canvas: HTMLCanvasElement
) {
  const scene = new Scene(engine);

  /* lights */
  createLights(scene);

  /* camera */
  const camera = createCamera(scene);
  camera.attachControl(canvas, true);
  /* meshes */
  const box = createBox(scene);

  return scene;
};
