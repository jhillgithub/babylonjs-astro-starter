import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import type { Scene } from "@babylonjs/core/scene";

export const createLights = (scene: Scene) => {
  const hemisphereLight = new HemisphericLight(
    "light",
    new Vector3(0, 1, 0),
    scene
  );
  hemisphereLight.intensity = 0.7;
};
