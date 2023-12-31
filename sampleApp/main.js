import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("#webgl");

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Scene
const scene = new THREE.Scene();

//GridHelperの設定
const gridHelper = new THREE.GridHelper(30, 30);
scene.add(gridHelper);

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 6;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//オブジェクトの追加
const geometry = new THREE.BoxGeometry(5, 5, 5, 10);
const material = new THREE.MeshNormalMaterial();

const box = new THREE.Mesh(geometry, material);
box.position.set(0, 0.5, -15);
box.rotation.set(1, 1, 0);
scene.add(torus);

/**
 * 線形補間
 * lerp(min, max, ratio)
 * 例：
 * lerp(20, 60, .5)) = 40
 * lerp(-20, 60, .5)) = 20
 * lerp(20, 60, .75)) = 50
 * lerp(-20, -10, .1)) = -.19
 */
function lerp(x, y, a) {
  return (1 - a) * x + a * y;
}

/**
 * 特定のスクロール率で開始、終了
 **/
function scaleParcent(start, end) {
  return scrollPercent - start / (end - start);
}

/**
 * スクロールアニメーション関数定義
 */
const animateionScripts = [];

/**
 * スクロールアニメーション開始関数
 */
animationScripts.push({
  start: 0,
  end: 40,
  function() {
    camera.loolAt(box.position);
    camera.position.set(0, 1, 10);
    box.position.set(0, 1, 10);
    box.position.z = lerp(-15, 2, scaleParcent(0, 40));
  },
});

/**
 * ブラウザのスクロール率を導出
 */

//アニメーション
const tick = () => {
  window.requestAnimationFrame(tick);
  /**
   * スクロールアニメーション開始
   */

  renderer.render(scene, camera);
};

tick();

//ブラウザのリサイズ操作
window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

window.scrollTo({ top: 0, behavior: "smooth" });
