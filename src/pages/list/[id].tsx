import { NextPage, GetServerSideProps } from 'next'
import { List } from 'src/types'

interface ListPageProps {
  list: List
}

const ListPage: NextPage<ListPageProps> = ({ list }) => {
  return (
    <>
      <h1>{list.name}</h1>
      <ul>
        {list.todos?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<ListPageProps> = async (_ctx) => {
  const id = _ctx.params?.id
  const data = await fetch(`http://localhost:3000/api/lists/${id}`)
  const list = await data.json()
  return { props: { list } }
}

export default ListPage
