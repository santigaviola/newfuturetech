import * as THREE from 'three'

// Colors
const white = new THREE.Color( 0xffffff )

// Scene
const scene = new THREE.Scene();
scene.background = white;

// Camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#home'),
});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Geometry
const geometry = new THREE.BoxGeometry();

// Materials
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

// Meshes
const cube = new THREE.Mesh( geometry, material );

// Scene.add
scene.add( cube );

// Scroll Animation
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  camera.position.z = t * 0.01 + 5;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop
function animate() {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
};

animate();

// 3D Text

const fontLoader = new THREE.FontLoader()

fontLoader.load(
  "/fonts/helvetiker_regular.typeface.json",
  (font) => {
      //Geometry
      const textGeometry = new THREE.TextBufferGeometry(
          'Devesh',  //Text that you want to display
          {
            font: font,
            size: 10,
            height: 0.2,
            curveSegments: 6,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 4
          }
      )

      textGeometry.center()  //to center the text at the axis

      //Material - make sure you use Normal material to get that gradient color
      const textMaterial = new THREE.MeshNormalMaterial()
      const text = new THREE.Mesh(textGeometry, textMaterial)
      scene.add(text)  //don't forget to add the text to scene

  }
)
