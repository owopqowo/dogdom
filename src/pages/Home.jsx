import Button from '../components/button'

function Home({logout}) {
  return (
    <div className="home">
      <Button onClick={logout}>๋ก๊ทธ์์</Button>
    </div>
  )
}

export default Home