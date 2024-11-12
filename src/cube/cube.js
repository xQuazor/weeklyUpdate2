// Three.js front page spinning cube with minor changes:

import { useCallback } from 'react';
import styles from './cube.module.scss';
import * as Three from "three";

let camera, scene, renderer;
let geometry, material, mesh;
let light1, light2, light3, light4;

init();

function init() {

    scene = new Three.Scene();

    geometry = new Three.SphereGeometry( 0.2, 32, 32 );
    material = new Three.MeshStandardMaterial({color: "#00ff83", wireframe: true})

    mesh = new Three.Mesh( geometry, material );
    scene.add( mesh );

    // const light = new Three.PointLight(0xfffff, 50, 100)
    // light.position.set(0,1,10)
    // scene.add(light)

    const sphere = new Three.SphereGeometry( 0.15, 16, 8 );
    light1 = new Three.PointLight( 0xff0040, 400 );
    light1.add( new Three.Mesh( sphere, new Three.MeshBasicMaterial( { color: 0xff0040 } ) ) );
    light1.position.set(0,1,10)
    scene.add( light1 );

    light2 = new Three.PointLight( 0x0040ff, 400 );
    light2.add( new Three.Mesh( sphere, new Three.MeshBasicMaterial( { color: 0x0040ff } ) ) );
    scene.add( light2 );

    light3 = new Three.PointLight( 0x80ff80, 400 );
    light3.add( new Three.Mesh( sphere, new Three.MeshBasicMaterial( { color: 0x80ff80 } ) ) );
    scene.add( light3 );

    light4 = new Three.PointLight( 0xffaa00, 400 );
    light4.add( new Three.Mesh( sphere, new Three.MeshBasicMaterial( { color: 0xffaa00 } ) ) );
    scene.add( light4 );

    camera = new Three.PerspectiveCamera( 30, 1, 0.01, 10 );
    camera.position.z = 1;
    scene.add(camera)



    renderer = new Three.WebGLRenderer( { antialias: true } );
    renderer.setAnimationLoop( animation );

}

function animation( time ) {

    // do not render if not in DOM:

    if( !renderer.domElement.parentNode ) return;

    mesh.rotation.x = time / 3000;
    mesh.rotation.y = time / 4000;

    light1.position.x = Math.sin( time / 2000 * 0.7 ) * 30;
    light1.position.y = Math.cos( time  / 2000 * 0.5 ) * 40;
    light1.position.z = Math.cos( time   / 2000* 0.3 ) * 30;

    light2.position.x = Math.cos( time  / 2000 * 0.3 ) * 30;
    light2.position.y = Math.sin( time  / 2000 * 0.5 ) * 40;
    light2.position.z = Math.sin( time  / 2000 * 0.7 ) * 30;

    light3.position.x = Math.sin( time   / 2000* 0.7 ) * 30;
    light3.position.y = Math.cos( time  / 2000 * 0.3 ) * 40;
    light3.position.z = Math.sin( time  / 2000 * 0.5 ) * 30;

    light4.position.x = Math.sin( time  / 2000 * 0.3 ) * 30;
    light4.position.y = Math.cos( time  / 2000 * 0.7 ) * 40;
    light4.position.z = Math.sin( time / 2000  * 0.5 ) * 30;

    renderer.render( scene, camera );

}

// respond to size changes:

function resize() {

    const container = renderer.domElement.parentNode;

    if( container ) {

        const width = container.offsetWidth;
        const height = container.offsetHeight;

        renderer.setSize( width, height );

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

    }

}

window.addEventListener( 'resize', resize );

resize();


// expose a function to interact with react.js:

export function mount( container ) {

    if( container ) {

        container.insertBefore( renderer.domElement, container.firstChild );
        resize();

    } else {

        renderer.domElement.remove();

    }

}



export default function Cube() {
    const containerRef = useCallback(mount, []);
    // const controls=  new OrbitControls(camera, containerRef);
    return <div className={styles.container__animated} ref={containerRef} id="anim"></div>
}