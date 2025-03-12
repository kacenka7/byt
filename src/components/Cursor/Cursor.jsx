import "./cursor.css";
import { useEffect, useState } from "react";

export const Cursor = () =>{
    // usestate pro aktuální a cílové souřadnice

    const [pos, setPos] = useState ({x: 0, y: 0});
    const [targetPos, setTargetPos] = useState ({x: 0, y: 0});

    const speed = 0.1 //rychlost kurzoru

    useEffect(()=>{

        const handleMouseMove = (e)=>{
            setTargetPos({x: e.clientX, y: e.clientY })
        }

        document.addEventListener("mousemove", handleMouseMove);

        return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [])

  //animace

  useEffect(() => {
    let animationFrame;

    const animate = () => {
        setPos((prev) => ({
            x: prev.x + (targetPos.x - prev.x) * speed,
            y: prev.y + (targetPos.y - prev.y) * speed,
        }));

        animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame); // Správné ukončení animace
}, [targetPos]);

return <div className="cursor" style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }} />;
};