import { useEffect, useRef } from "react";
import { Coord } from "@/hooks/useSnakeGame";

type SnakeCanvasProps = {
  snake: Coord[];
  food: Coord;
  gridSize?: number;
  cellSize?: number;
};

export default function SnakeCanvas({ snake, food, gridSize = 20, cellSize = 20 }: SnakeCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, gridSize * cellSize, gridSize * cellSize);

    ctx.fillStyle = "#00FF00";
    ctx.fillRect(food.x * cellSize, food.y * cellSize, cellSize, cellSize);

    for (const segment of snake) {
      ctx.fillRect(segment.x * cellSize, segment.y * cellSize, cellSize, cellSize);
    }
  }, [snake, food, gridSize, cellSize]);

  return (
    <canvas
      ref={canvasRef}
      width={gridSize * cellSize}
      height={gridSize * cellSize}
      className="border border-green-500"
    />
  );
}
