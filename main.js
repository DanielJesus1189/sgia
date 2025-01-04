import * as THREE from 'three';
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';
import {
    GLTFLoader
} from 'three/addons/loaders/GLTFLoader.js';


// Criar um cubo 1x1x1
let geometria = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshNormalMaterial();
let cubo = new THREE.Mesh(geometria, material);
// Criar a cena e colocar nela o cubo
let cena = new THREE.Scene()
cena.add( cubo )
// Criar e configurar o renderer
let meuCanvas = document.getElementById('meuCanvas')
let renderer = new THREE.WebGLRenderer({ canvas: meuCanvas })


renderer.setSize( 953, 709 )


// Criar e posicionar a camara
let camara = new THREE.PerspectiveCamera( 70, 800 / 600, 0.01, 1000 )
camara.position.z = 5
// Renderizar e animar
let delta = 0; // tempo desde a última atualização
let relogio = new THREE.Clock(); // componente que obtém o delta
let latencia_minima = 1 / 60; // tempo mínimo entre cada atualização
function animar() {
requestAnimationFrame(animar);// agendar animar para o próximo animation frame
delta += relogio.getDelta(); // acumula tempo entre chamadas de getDelta
if (delta < latencia_minima) return; // não exceder a taxa de atualização
// atualizar rotação do cubo
cubo.rotateX(0.01)
cubo.rotateY(0.02)
// mostrar...
renderer.render( cena, camara )
delta = delta % latencia_minima; // atualizar delta com o excedente
}
// iniciar animar
animar()