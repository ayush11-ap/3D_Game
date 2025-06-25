# React Three Fiber Quick Notes

A concise guide to building 3D scenes in React using [react-three-fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei), and [@react-three/rapier](https://github.com/pmndrs/react-three-rapier).

---

## 1. Basics: react-three-fiber

**react-three-fiber** is a React renderer for [three.js](https://threejs.org/).  
It lets you build 3D scenes using React components.

### Key Components

- **`<Canvas>`**  
  The root component that creates a 3D rendering context.

- **`<mesh>`**  
  Represents a 3D object. Needs geometry and material as children.

- **`<boxGeometry>`**  
  Defines the shape of the mesh (here, a box).

- **`<meshStandardMaterial>`**  
  Defines how the surface looks (color, metalness, etc).

### Example

```jsx
import { Canvas } from "@react-three/fiber";

function Box() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas>
      <ambientLight /> {/* Adds global light to the scene */}
      <Box />
    </Canvas>
  );
}
```

---

## 2. Helpers: @react-three/drei

**@react-three/drei** provides useful helpers for common 3D tasks.

### Key Components

- **`<OrbitControls>`**  
  Adds mouse/touch controls to orbit, pan, and zoom the camera.

- **`useGLTF`**  
  A hook to load 3D models in GLTF/GLB format.

### Example

```jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/model.glb"); // Loads a GLTF model
  return <primitive object={scene} />; // Renders the loaded model
}

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <Model />
      <OrbitControls /> {/* Enables camera controls */}
    </Canvas>
  );
}
```

---

## 3. Physics: @react-three/rapier

**@react-three/rapier** adds real-time physics to your scene.

### Key Components

- **`<Physics>`**  
  Wraps objects that should interact with physics.

- **`<RigidBody>`**  
  Makes a mesh respond to physics (gravity, collisions, etc).

### Example

```jsx
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";

function Ball() {
  return (
    <RigidBody>
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </RigidBody>
  );
}

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <Physics>
        <Ball />
      </Physics>
    </Canvas>
  );
}
```

---

## 4. Combining Everything

You can combine all these tools for interactive, physically-based 3D scenes.

```jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";

function Scene() {
  return (
    <>
      <ambientLight />
      <RigidBody>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="skyblue" />
        </mesh>
      </RigidBody>
      <OrbitControls />
    </>
  );
}

export default function App() {
  return (
    <Canvas>
      <Physics>
        <Scene />
      </Physics>
    </Canvas>
  );
}
```

---

## References

- [react-three-fiber Documentation](https://docs.pmnd.rs/react-three-fiber)
- [@react-three/drei Documentation](https://github.com/pmndrs/drei)
- [@react-three/rapier Documentation](https://github.com/pmndrs/react-three-rapier)
