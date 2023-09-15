import { Vector3 } from "@babylonjs/core/Maths/math";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import type { Scene } from "@babylonjs/core";
import { Tools } from "@babylonjs/core";

export const createCamera = (scene: Scene) => {
  const camera = new ArcRotateCamera(
    "camera",
    Tools.ToRadians(45),
    Tools.ToRadians(45),
    3,
    Vector3.Zero(),
    scene
  );
  camera.setTarget(Vector3.Zero());
  return camera;
};
