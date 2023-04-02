import React, { Component, useRef, useState } from 'react';
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from '@react-three/fiber'; 
import { OrbitControls, useTexture } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import Panorama from '../marys_room.jpeg';




function Room(props) {
    
    const texture = useLoader(TextureLoader, Panorama );
    //const colorMap = useTexture('/pictures/pana.jpg');

	// This reference gives us direct access to the THREE.Mesh object
	const ref = useRef()
	// Hold state for hovered and clicked events
	const [hovered, hover] = useState(false)
	const [clicked, click] = useState(false)
	// Subscribe this component to the render-loop, rotate the mesh every frame
    const rotationSpeed = 0.02;
	useFrame((state, delta) => (ref.current.rotation.y += delta * rotationSpeed))
	// Return the view, these are regular Threejs elements expressed in JSX

	return (
	  <mesh
		{...props}
		ref={ref}
        /*scale={clicked ? 1.5 : 1}*/
		onClick={(event) => click(!clicked)}
		onPointerOver={(event) => hover(false)}
		onPointerOut={(event) => hover(false)}>
		{/*<boxGeometry args={[1, 1, 1]} />*/}
        <sphereGeometry args={[-500, 60, 40]} />
        scale={[1, 1, 1]}
        position={[0, 0, 0.1]}
        noZoom={[true]}

        <perspectiveCamera args={[75, window.innerWidth / window.innerHeight, 0.1, 1000]} />
		{/*<meshStandardMaterial color={hovered ? 'hotpink' : 'gray'} />*/}
        <meshBasicMaterial map={texture} />
	  </mesh>
	)
}



export class MarysRoom extends Component {
	constructor(props) {
		super(props);

		this.state = {
        }
	}
    
	render() {

        return (
			<section className="marys-room"> 
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    {/*<Box position={[-1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Box position={[0, 2.4, 0]} />*/}
                    <Room position={[0, 0, 0]} />

                    <OrbitControls />

                </Canvas>
            </section>
		);
	}
}

export default MarysRoom;