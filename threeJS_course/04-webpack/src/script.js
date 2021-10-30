// 导入自定义 CSS 文件
import './style.css'
// 从 module 中导入 three
import * as THREE from 'three'

// console.log(THREE.PerspectiveCamera)



/*  ---------------------------------------
    o 创建第一个场景
    - 一个场景包含对象
    - 摄像机
    - 渲染器
    ---------------------------------------
    o 场景（幕）
    - 像一个舞台的一幕
    - 在其中放 对象（演员）,灯光，道具等等
    - 有时候我们让THREE.JS的渲染器渲染场景
*/
// console.log(THREE)   // 测试是否正确导入three.js

const scene = new THREE.Scene()

/*
    ---------------------------------------
    Mesh = geometry + Material
    融合物 = 几何结构 + 材料
    geometry -> 物体的形状
    Material -> 物体的材质(看起来是怎样的，例如金属质感,反光材料...)
*/

// 红色正方体
// 更多关于 BoxGeometry :
// <a href="https://threejs.org/docs/index.html?q=box#api/en/geometries/BoxGeometry">BoxGeometry</a>
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" })
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 尺寸
const sizes = {
    width: 800,
    height: 600
}

// 摄像机:要想看到东西，需要设置一个摄像机
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.x = 1;

// 渲染器
// 为什么要使用渲染器
// scene -> camera => (渲染) ==> 画到 canvas (被看到）
// 获取元素
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    // 在 JS 中 属性名 和  变量名一致时，可以只写一个(不建议)
    // canvas
    canvas: canvas
})

// 设置 renderer 大小
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

// 此时看不到物体因为所有的东西都在正中心，要将摄像机后移
// 移动物体，使用属性 postion rotation scale
// x y -> 上下左右, z => 前后














// import './style.css'
// import * as THREE from 'three'
// import { Group } from 'three'

// // this is the root of the project, not index.html
// // that means that we don't need to add this script
// // to the index.html for it to work, and since this
// // file is importing thee styles.css, we don't need
// // to add it to the html file either.

// const scene = new THREE.Scene()

// const cube_group = new THREE.Group()

// const cube = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1), // width, height, depth
//     new THREE.MeshBasicMaterial({ color: 0xff0000 })
// )

// const cube_two = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// )
// cube_two.position.x = -2

// const cube_three = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({ color: 0x0000ff })
// )
// cube_three.position.x = 2

// cube_group.add(cube)
// cube_group.add(cube_two)
// cube_group.add(cube_three)

// // cube.position.x = 0.7
// // cube.position.y = -0.6
// // cube.position.z = 1
// // same as above
// // NOW THIS AFFECTS ALL CUBES INSIDE GROUP
// cube_group.position.set(0.7, 0.6, -1)
// cube_group.scale.set(2, 0.5, 0.5)
// cube_group.rotation.reorder('YXZ') // sets order of rotation (before setting rotation)
// // rotating Y and then X is not the same as rotating X and then Y
// // explanation at about minute 31 of lecture 5: https://threejs-journey.xyz/lessons/5
// cube_group.rotation.x = Math.PI * 0.25 // PI is half a rotation (180 degrees)
// cube_group.rotation.y = Math.PI * 0.25

// const sizes = {
//     width: 800,
//     height: 600
// }
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) // degrees & aspect ratio
// // camera.position.z = 3 // three times thee size of cube (which is 1x1x1 as set b4 scale)
// camera.position.set(0.5, 1.5, 3)
// camera.lookAt(cube.position)

// console.log(cube.position.length()) // distance from 0,0,0
// console.log(cube.position.distanceTo(camera.position)) // distance to camera

// const axesHelper = new THREE.AxesHelper(3) // units three times cube since it's 1x1x1 (b4 scale)

// scene.add(cube_group)
// scene.add(camera)
// scene.add(axesHelper)

// const canvas = document.querySelector('.webgl')
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.render(scene, camera)