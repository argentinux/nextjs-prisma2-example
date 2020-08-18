export type List = {
  id: number
  name: string
  todos?: Todo[]
}

export type Todo = {
  id: number
  title: string
  done: boolean
}
