import * as THREE from '../node_modules/three/build/three.module.js'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,innerWidth / innerHeight, 0.1, 1000);
const renderer = new THREE.WebGL1Renderer();
console.log(scene)
console.log(camera)
console.log(renderer)

// 将 renderer 的大小设为全屏，Window.innerHight, window 可省略
renderer.setSize(innerWidth,innerHeight)
renderer.setPixelRatio(devicePixelRatio)
// 将 renderer 放在 body 后面
document.body.appendChild(renderer.domElement)

// 3D 模型 需要两个东西 【节点】 【材料】
// BoxFeometry 有三个参数 长 宽 高
const boxGeometry = new THREE.BoxGeometry(1,1,1)
// MeshBasicMaterial 的参数是一个对象
const material =new THREE.MeshBasicMaterial({color:0x00FF00}) 

const mesh = new THREE.Mesh(boxGeometry,material)
// 如何将 mesh 放到 renderer 中？ 
// scene.add function, 将 mesh 添加到 scene
scene.add(mesh)
// 设置 相机的位置，使相机不在 中心的，这里使相机向后
camera.position.z= 5
// 相机后移，看到的还只是 2D 图像，想要看到 3D 图像，就要給 图像加一些动画
// 动画函数
// 动画函数调用本身，形成循环
// function animation(){
//     mesh.rotation.x +=0.01
//     mesh.rotation.y +=0.01
//     renderer.render(scene,camera)
//     window.requestAnimationFrame(animation )
// }

// animation()










// 虽然将mesh 添加到 scene 但是并没有用调用 任何 render 函数，将 mesh render 到浏览器
// 调用 renderer 的render 函数,有两个参数， scene 和 camera
// renderer.render(scene,camera)


