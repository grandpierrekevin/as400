export type Coord = {
  x: number;
  y: number;
};

export type Direction = Coord;

export type SnakeState = {
  snake: Coord[];
  food: Coord;
  direction: Direction;
  isRunning: boolean;
};
