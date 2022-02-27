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
  const geometry = new THREE.SphereGeometry(0.10, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: "0xADD8E6" });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

function addStar2() {
  const geometry = new THREE.SphereGeometry(0.10, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: "0xADD8E6" });
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

// NFTS

// FIRST

const cubematerial = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(first1) });
const cube2material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(first2) });
const cube3material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(first3) });
const cube4material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(first4) });
const cube5material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(first5) });

const cubegeometry = new THREE.BoxGeometry( 5, 5, 5 );
const cube = new THREE.Mesh( cubegeometry, cubematerial );
cube.position.z -= 100
cube.position.y += 5
scene.add(cube);

const cube2 = cube.clone();
cube2.material = cube2material
cube2.position.x -= 10;
scene.add(cube2);

const cube3 = cube.clone();
cube3.material = cube3material
cube3.position.x -= 20;
scene.add(cube3);

const cube4 = cube.clone();
cube4.material = cube4material
cube4.position.x += 10;
scene.add(cube4);

const cube5 = cube.clone();
cube5.material = cube5material
cube5.position.x += 20;
scene.add(cube5);

//LAST

const cubelastmaterial = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(last1) });
const cubelast2material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(last2) });
const cubelast3material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(last3) });
const cubelast4material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(last4) });
const cubelast5material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(last5) });

const cubelastgeometry = new THREE.BoxGeometry( 5, 5, 5 );
const cubelast = new THREE.Mesh( cubelastgeometry, cubelastmaterial );
cubelast.position.z -= 100
cubelast.position.y -= 5
scene.add(cubelast);

const cubelast2 = cubelast.clone();
cubelast2.material = cubelast2material
cubelast2.position.x -= 10;
scene.add(cubelast2);

const cubelast3 = cubelast.clone();
cubelast3.material = cubelast3material
cubelast3.position.x -= 20;
scene.add(cubelast3);

const cubelast4 = cubelast.clone();
cubelast4.material = cubelast4material
cubelast4.position.x += 10;
scene.add(cubelast4);

const cubelast5 = cubelast.clone();
cubelast5.material = cubelast5material
cubelast5.position.x += 20;
scene.add(cubelast5);

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

  cube.rotation.y += 0.01;
  cube2.rotation.y += 0.01;
  cube3.rotation.y += 0.01;
  cube4.rotation.y += 0.01;
  cube5.rotation.y += 0.01;

  cubelast.rotation.y += 0.01;
  cubelast2.rotation.y += 0.01;
  cubelast3.rotation.y += 0.01;
  cubelast4.rotation.y += 0.01;
  cubelast5.rotation.y += 0.01;



  if (camera.position.z > -80) {
    camera.position.z -= 0.3
  }

  renderer.render( scene, camera );
};

animate();
