/*
  Auto-generated by Spline
*/

import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/HH5XNvjFf5WRiOoL/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#f5f926']} />
      <group {...props} dispose={null}>
        <mesh
          name="Rectangle 5"
          geometry={nodes['Rectangle 5'].geometry}
          material={materials['Rectangle 5 Material']}
          position={[0, 0, -2000]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <mesh
          name="Rectangle 4"
          geometry={nodes['Rectangle 4'].geometry}
          material={materials['Rectangle 4 Material']}
          position={[0, 0, 2000]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
        />
        <mesh
          name="Rectangle 6"
          geometry={nodes['Rectangle 6'].geometry}
          material={materials['Rectangle 6 Material']}
          position={[2000, 0, 0]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        />
        <mesh
          name="Rectangle 3"
          geometry={nodes['Rectangle 3'].geometry}
          material={materials['Rectangle 3 Material']}
          position={[-2000, 0, 0]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          name="Rectangle 2"
          geometry={nodes['Rectangle 2'].geometry}
          material={materials['Rectangle 2 Material']}
          position={[0, 2000, 0]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={1}
        />
        <mesh
          name="Rectangle"
          geometry={nodes.Rectangle.geometry}
          material={materials['Rectangle Material']}
          castShadow
          receiveShadow
          position={[0, -2000, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <group name="Bat 2" position={[0, 0, 100]}>
          <mesh
            name="Shape 0"
            geometry={nodes['Shape 0'].geometry}
            material={materials['Shape 0 Material']}
            castShadow
            receiveShadow
            position={[0, -15, 0]}
            scale={[10, 10, 1]}
          />
        </group>
        <group name="Bat 3" position={[0, 0, -100]}>
          <mesh
            name="Shape 01"
            geometry={nodes['Shape 01'].geometry}
            material={materials['Shape 01 Material']}
            castShadow
            receiveShadow
            position={[0, -15, 0]}
            scale={[10, 10, 1]}
          />
        </group>
        <group name="Bat" position={[1, 0, 0]} scale={[1, 1, 1.01]}>
          <mesh
            name="Shape 02"
            geometry={nodes['Shape 02'].geometry}
            material={materials['Shape 02 Material']}
            castShadow
            receiveShadow
            position={[0, -15, 0]}
            scale={[10, 10, 1]}
          />
        </group>
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-1000}
          shadow-camera-right={1000}
          shadow-camera-top={1000}
          shadow-camera-bottom={-1000}
          position={[200, 300, 300]}
        />
        <OrthographicCamera
          name="1"
          makeDefault={true}
          zoom={0.09}
          far={100000}
          near={-100000}
          position={[-4383.15, 4038.08, 3947.51]}
          rotation={[-0.78, -0.62, -0.52]}
          scale={1}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
      </group>
    </>
  )
}
