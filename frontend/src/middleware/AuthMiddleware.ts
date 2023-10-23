import { useAuth } from '../util/useAuth'

class AuthMiddleware {
  constructor() {
    this.isLogin = useAuth.isLogin()
    if(this.isLogin == false) {
      window.location.href = '/'
    }
  }
}

export {
  AuthMiddleware
}