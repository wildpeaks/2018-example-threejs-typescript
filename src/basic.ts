/* eslint-env browser */
import {Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh} from 'three';
import {OrbitControls} from 'three/examples/js/controls/OrbitControls';


// Example converted from https://threejs.org/docs/index.html#Manual/Introduction/Creating_a_scene
const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({color: 0x00ff00});
const cube = new Mesh(geometry, material);
scene.add(cube);

// let controls: THREE.OrbitControls;
const controls = new OrbitControls(camera, renderer.domElement);

function render(): void {
	requestAnimationFrame(render);
	// cube.rotation.x += 0.1;
	// cube.rotation.y += 0.1;
	if (controls){
		controls.update();
	}
	renderer.render(scene, camera);
}
render();


/* eslint-disable no-multiple-empty-lines */
//---------------------------------------------------------------------------//
// EXAMPLE: Code splitting
//---------------------------------------------------------------------------//
// import('three/examples/js/controls/OrbitControls')
// .then(asyncModule => {
// 	const OrbitControls = asyncModule.OrbitControls;
// 	controls = new OrbitControls(camera, renderer.domElement);
// });
