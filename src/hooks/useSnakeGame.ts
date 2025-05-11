import { useEffect, useState } from "react";

export type Coord = { x: number; y: number };

export type SnakeGameState = {
  snake: Coord[];
  food: Coord;
  isRunning: boolean;
  direction: Coord;
};

export function useSnakeGame(gridSize = 20) {
  const [snake, setSnake] = useState<Coord[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Coord>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<Coord>({ x: 1, y: 0 });
  const [isRunning, setIsRunning] = useState(true);

  const updateDirection = (newDir: Coord) => {
    setDirection(newDir);
  };

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setDirection({ x: 1, y: 0 });
    setFood({ x: Math.floor(Math.random() * gridSize), y: Math.floor(Math.random() * gridSize) });
    setIsRunning(true);
  };

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSnake((prevSnake) => {
        const head = prevSnake[0];
        const newHead = {
          x: (head.x + direction.x + gridSize) % gridSize,
          y: (head.y + direction.y + gridSize) % gridSize,
        };

        const newSnake = [newHead, ...prevSnake];

        if (newHead.x === food.x && newHead.y === food.y) {
          setFood({
            x: Math.floor(Math.random() * gridSize),
            y: Math.floor(Math.random() * gridSize),
          });
        } else {
          newSnake.pop();
        }

        const collision = newSnake.slice(1).some((s) => s.x === newHead.x && s.y === newHead.y);
        if (collision) {
          setIsRunning(false);
          alert("💀 Game Over");
        }

        return newSnake;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [direction, food, isRunning, gridSize]);

  return {
    snake,
    food,
    direction,
    isRunning,
    updateDirection,
    resetGame,
  };
}
