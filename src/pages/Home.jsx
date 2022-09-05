import Button from '../components/button'

function Home({logout}) {
  return (
    <div className="home">
      <Button onClick={logout}>로그아웃</Button>
    </div>
  )
}

export default Home