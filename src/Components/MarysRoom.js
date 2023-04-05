import React, { Component, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber'; 
import { OrbitControls, useTexture } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import Panorama from '../marys_room_3.jpeg'; //Made using skybox.blockadelabs.com 

function Room(props) {
    const texture = useLoader(TextureLoader, Panorama );
    texture.flipY = false;

	// This reference gives us direct access to the THREE.Mesh object.
	const ref = useRef()
	// Hold state for hovered and clicked events.
	const [hovered, hover] = useState(false)
	const [clicked, click] = useState(false)
	// Subscribe this component to the render-loop, rotate the mesh every frame.
    const rotationSpeed = clicked ? 0.0 : 0.03;
	useFrame((state, delta) => (ref.current.rotation.y += delta * rotationSpeed))
	// Return the view, these are regular Threejs elements expressed in JSX.

	return (
	  <mesh
		{...props}
		ref={ref}
		//onClick={(event) => click(!clicked)}
        onClick={(event) => click(true)}

		onPointerOver={(event) => hover(false)}
		onPointerOut={(event) => hover(false)}>
        position={[0, 0, 0.1]}
        rotation={[-1,1,1]}
        <sphereGeometry args={[-500, 60, 40]} />


        <perspectiveCamera args={[75, window.innerWidth / window.innerHeight, 1, 1000]} />
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
                <Canvas sRGB={true} linear flat>

                    <Room position={[0, 0, 0]} />

                    <OrbitControls enableZoom={false} rotateSpeed={-0.2} />

                </Canvas>
            </section>
		);
	}
}

export default MarysRoom;