/* eslint-env browser */
import {Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh} from 'three';


// Example converted from https://threejs.org/docs/index.html#Manual/Introduction/Creating_a_scene
const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({color: 0x0000ff});
const cube = new Mesh(geometry, material);
scene.add(cube);

let controls: THREE.OrbitControls;

function render(): void {
	requestAnimationFrame(render);
	if (controls){
		controls.update();
	}
	renderer.render(scene, camera);
}
render();

import('three/examples/js/controls/OrbitControls')
.then(asyncModule => {
	controls = new asyncModule.OrbitControls(camera, renderer.domElement);
});
