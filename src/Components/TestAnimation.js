import useSpline from '@splinetool/r3f-spline'

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/wv6g-RgQlzWNngC9/scene.splinecode');

  return (
    <group {...props} dispose={null}>
      <mesh
        name="Rectangle"
        geometry={nodes.Rectangle.geometry}
        material={materials['Rectangle Material']}
      />
    </group>
  )
}