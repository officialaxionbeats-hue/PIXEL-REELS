import React, { useEffect, useRef } from 'react';

const BackgroundSphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Sphere parameters
    const radius = Math.min(width, height) * 0.4;
    
    // We will draw latitude and longitude lines
    const latLines = 12; // Horizontal lines
    const longLines = 12; // Vertical lines around
    const points: { x: number; y: number; z: number }[] = [];

    // Generate points for lines
    // This is a simplified approach: we don't store "lines", we generate points then connect them in the draw loop
    
    let rotationX = 0.5;
    let rotationY = 0.5;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / width) * 2 - 1;
      const y = (e.clientY / height) * 2 - 1;
      targetRotationY = x * 0.3;
      targetRotationX = -y * 0.3;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Smooth rotation
      rotationX += (targetRotationX - rotationX) * 0.05;
      rotationY += (targetRotationY - rotationY) * 0.05;
      
      // Auto constant slow rotation
      const time = Date.now() * 0.0001;
      const curRotY = rotationY + time;
      const curRotX = rotationX + (time * 0.5);

      ctx.save();
      ctx.translate(width / 2, height / 2);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)'; // Subtle wireframe color
      ctx.lineWidth = 1;

      // Draw Latitudes (Horizontal circles)
      for (let i = 0; i <= latLines; i++) {
        const phi = (Math.PI * i) / latLines; // 0 to PI
        // Draw a circle at this latitude
        ctx.beginPath();
        for (let j = 0; j <= 50; j++) {
            const theta = (Math.PI * 2 * j) / 50;
            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.cos(phi); // Y is up/down
            const z = radius * Math.sin(phi) * Math.sin(theta);

            // Rotate
            let px = x; let py = y; let pz = z;
            
            // Rotate Y
            let tempX = px * Math.cos(curRotY) - pz * Math.sin(curRotY);
            let tempZ = px * Math.sin(curRotY) + pz * Math.cos(curRotY);
            px = tempX; pz = tempZ;

            // Rotate X
            let tempY = py * Math.cos(curRotX) - pz * Math.sin(curRotX);
            let tempZ2 = py * Math.sin(curRotX) + pz * Math.cos(curRotX);
            py = tempY; pz = tempZ2;

            const scale = 300 / (300 + pz + radius); // Perspective
            const x2d = px * scale;
            const y2d = py * scale;

            if (j === 0) ctx.moveTo(x2d, y2d);
            else ctx.lineTo(x2d, y2d);
        }
        ctx.stroke();
      }

      // Draw Longitudes (Vertical circles)
      for (let i = 0; i < longLines; i++) {
        const theta = (Math.PI * 2 * i) / longLines;
        ctx.beginPath();
        for (let j = 0; j <= 50; j++) {
            const phi = (Math.PI * j) / 50;
            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.cos(phi);
            const z = radius * Math.sin(phi) * Math.sin(theta);

            // Rotate
            let px = x; let py = y; let pz = z;
            
            // Rotate Y
            let tempX = px * Math.cos(curRotY) - pz * Math.sin(curRotY);
            let tempZ = px * Math.sin(curRotY) + pz * Math.cos(curRotY);
            px = tempX; pz = tempZ;

            // Rotate X
            let tempY = py * Math.cos(curRotX) - pz * Math.sin(curRotX);
            let tempZ2 = py * Math.sin(curRotX) + pz * Math.cos(curRotX);
            py = tempY; pz = tempZ2;

            const scale = 300 / (300 + pz + radius);
            const x2d = px * scale;
            const y2d = py * scale;

            if (j === 0) ctx.moveTo(x2d, y2d);
            else ctx.lineTo(x2d, y2d);
        }
        ctx.stroke();
      }

      ctx.restore();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none opacity-30 mix-blend-screen"
    />
  );
};

export default BackgroundSphere;