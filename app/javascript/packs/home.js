import * as THREE from 'three'

// Colors
const white = new THREE.Color( 0xffffff )
const black = new THREE.Color( 0x000000 )

// Scene
const scene = new THREE.Scene();
scene.background = black;

// Camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#home'),
});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Stars

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

function addStar2() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z - 100 );
  scene.add(star);
}

Array(200).fill().forEach(addStar);
Array(200).fill().forEach(addStar2);

// Torus

const geometry = new THREE.TorusGeometry(40, 3, 16, 200);
const material = new THREE.MeshStandardMaterial({ color: 0x7f00ff });
const torus = new THREE.Mesh(geometry, material);
torus.position.z -= 100
scene.add(torus);

// Cubes

const cubegeometry = new THREE.BoxGeometry( 5, 5, 5 );
const cubematerial = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
const cube = new THREE.Mesh( cubegeometry, cubematerial );
cube.position.z -= 100
scene.add(cube);

const cube2 = cube.clone();
cube2.position.x -= 10;
scene.add(cube2);

const cube3 = cube.clone();
cube3.position.x -= 20;
scene.add(cube3);

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  camera.position.z = t * 0.05 + 5;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop
function animate() {
  requestAnimationFrame( animate );

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  torus.rotation.z += 0.01;

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  cube2.rotation.x += 0.01;

  cube3.rotation.z += 0.01;

  renderer.render( scene, camera );
};

animate();
