// View classes of three.js library
//console.log(THREE) // write THREE in uppercase


// Scene
const scene = new THREE.Scene()

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'red'}) // color can be set with hexadecimal format
const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)

// Sizes of scene
const sizes =
{
    with: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.with / sizes.height) // 75 degrees angle
camera.position.z = 3 // move the camera backward or forward
//camera.position.x = 2 // move the camera to upward or downward
//camera.position.y = 2 // move the camera to the left or to the right
scene.add(camera)

// Rederer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.with, sizes.height)

renderer.render(scene, camera)