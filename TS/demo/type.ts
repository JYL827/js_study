// Boolean 类型 
let isDone: boolean = false
// isDone = 123 报错

let count: number = 10

let nickname: string = 'jinlong'

let people: symbol = Symbol('pp')

// let list: number[] = [1, 2, 3]
let list: Array<number> = [1, 2, 3]

// Enum
// 数字枚举

enum Direction {
  EAST,
  SOUTH,
  WEST,
  NORSH
}
let dir: Direction = Direction.EAST