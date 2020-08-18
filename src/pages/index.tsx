import { NextPage, GetServerSideProps } from 'next'
import Link from 'next/link'
import { List } from 'src/types'

interface HomeProps {
  lists: List[]
}

const Home: NextPage<HomeProps> = ({ lists }) => {
  return (
    <>
      <h1>All Lists</h1>
      {lists.map((list) => (
        <div key={list.id}>
          <Link href={`/list/${list.id}`}>
            <a>{list.name}</a>
          </Link>
        </div>
      ))}
    </>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (_ctx) => {
  const data = await fetch('http://localhost:3000/api/lists')
  const lists: List[] = await data.json()
  return { props: { lists } }
}

export default Home
