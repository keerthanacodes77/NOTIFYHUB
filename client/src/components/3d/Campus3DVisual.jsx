import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Campus3DVisual = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Geometry & Group
    const hubGroup = new THREE.Group();
    scene.add(hubGroup);

    // 1. Central Icosahedron (Core Campus Hub)
    const coreGeometry = new THREE.IcosahedronGeometry(3.5, 1);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
      roughness: 0.2,
      metalness: 0.8,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    hubGroup.add(coreMesh);

    // 2. Inner Glowing Sphere
    const innerGeo = new THREE.SphereGeometry(2.2, 16, 16);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    hubGroup.add(innerMesh);

    // 3. Floating Campus Communication Nodes
    const nodesCount = 45;
    const nodeGeometry = new THREE.SphereGeometry(0.16, 8, 8);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const nodes = [];

    for (let i = 0; i < nodesCount; i++) {
      const nodeMesh = new THREE.Mesh(nodeGeometry, nodeMaterial);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 4.2 + Math.random() * 2.8;

      nodeMesh.position.x = radius * Math.sin(phi) * Math.cos(theta);
      nodeMesh.position.y = radius * Math.sin(phi) * Math.sin(theta);
      nodeMesh.position.z = radius * Math.cos(phi);

      hubGroup.add(nodeMesh);
      nodes.push({
        mesh: nodeMesh,
        speed: 0.005 + Math.random() * 0.01,
        radius,
        theta,
        phi,
      });
    }

    // 4. Connecting Lines / Network Edges
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.2,
    });

    const linesGroup = new THREE.Group();
    hubGroup.add(linesGroup);

    for (let i = 0; i < nodes.length; i += 2) {
      if (i + 1 < nodes.length) {
        const points = [nodes[i].mesh.position, nodes[i + 1].mesh.position];
        const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(lineGeo, lineMaterial);
        linesGroup.add(line);
      }
    }

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x06b6d4, 2, 50);
    pointLight.position.set(5, 8, 10);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x6366f1, 2, 50);
    pointLight2.position.set(-8, -6, -5);
    scene.add(pointLight2);

    // Mouse interactivity
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
      mouseY = -(((event.clientY - rect.top) / container.clientHeight) * 2 - 1);
    };

    window.addEventListener('mousemove', onMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      targetX += (mouseX * 0.5 - targetX) * 0.05;
      targetY += (mouseY * 0.5 - targetY) * 0.05;

      hubGroup.rotation.y = elapsedTime * 0.15 + targetX;
      hubGroup.rotation.x = elapsedTime * 0.08 + targetY;
      coreMesh.rotation.z = elapsedTime * 0.1;
      innerMesh.rotation.y = -elapsedTime * 0.2;

      // Animate node pulsations
      nodes.forEach((n, idx) => {
        n.mesh.position.y += Math.sin(elapsedTime * 2 + idx) * 0.003;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '380px',
        position: 'relative',
        cursor: 'grab',
      }}
    />
  );
};
export default Campus3DVisual;
