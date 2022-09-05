import Button from '../components/button'

function Login({login}) {
  return (
    <div className="login">
      <h1 className='title'><img src="/src/assets/dogdom.png" alt="dogdom" /></h1>

      <form action="">
        <input type="email" className='email' />
        <input type="password" className='password' />
        <Button variant="contain" size="large" color="red" onClick={login}>로그인</Button>
      </form>
      <div className='find'>
        <a className='link'>비밀번호 찾기</a>
        <a className='link'>아이디 찾기</a>
        <a className='link'>회원가입</a>
      </div>
      
      <footer className='footer'>
        <small>By signing in, you agree to the User Agreement<br />and Privacy Terms.</small>
      </footer>
    </div>
  )
}

export default Login