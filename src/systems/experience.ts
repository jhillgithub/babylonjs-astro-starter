import { Engine } from "@babylonjs/core/Engines/engine";
import { Inspector } from "@babylonjs/inspector";
import { createScene } from "../components/scene";

const canvas: HTMLCanvasElement = document.getElementById(
  "renderCanvas"
) as HTMLCanvasElement;

const engine = new Engine(canvas);

const scene = await createScene(engine);

engine.runRenderLoop(function () {
  scene.render();
});

window.addEventListener("resize", function () {
  engine.resize();
});

Inspector.Show(scene, {});
