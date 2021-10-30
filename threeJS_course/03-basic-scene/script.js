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