import './style.css'
import * as THREE from 'three'
import { Group } from 'three'

// this is the root of the project, not index.html
// that means that we don't need to add this script
// to the index.html for it to work, and since this
// file is importing thee styles.css, we don't need
// to add it to the html file either.

const scene = new THREE.Scene()

const cube_group = new THREE.Group()

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), // width, height, depth
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)

const cube_two = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
cube_two.position.x = -2

const cube_three = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
)
cube_three.position.x = 2

cube_group.add(cube)
cube_group.add(cube_two)
cube_group.add(cube_three)

// cube.position.x = 0.7
// cube.position.y = -0.6
// cube.position.z = 1
// same as above
// NOW THIS AFFECTS ALL CUBES INSIDE GROUP
cube_group.position.set(0.7, 0.6, -1)
cube_group.scale.set(2, 0.5, 0.5)
cube_group.rotation.reorder('YXZ') // sets order of rotation (before setting rotation)
// rotating Y and then X is not the same as rotating X and then Y
// explanation at about minute 31 of lecture 5: https://threejs-journey.xyz/lessons/5
cube_group.rotation.x = Math.PI * 0.25 // PI is half a rotation (180 degrees)
cube_group.rotation.y = Math.PI * 0.25

const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) // degrees & aspect ratio
// camera.position.z = 3 // three times thee size of cube (which is 1x1x1 as set b4 scale)
camera.position.set(0.5, 1.5, 3)
camera.lookAt(cube.position)

console.log(cube.position.length()) // distance from 0,0,0
console.log(cube.position.distanceTo(camera.position)) // distance to camera

const axesHelper = new THREE.AxesHelper(3) // units three times cube since it's 1x1x1 (b4 scale)

scene.add(cube_group)
scene.add(camera)
scene.add(axesHelper)

const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
