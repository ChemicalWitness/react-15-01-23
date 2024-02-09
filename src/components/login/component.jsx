import { useContext, useState } from "react";
import { Button } from "../button/component";
import { UserContext } from "../../context/user";

export const Login = () => {
  const {user, setUser} = useContext(UserContext)
  const [isLogin, setIsLogin] = useState(false)
  const checkLogin = () => {
    if (isLogin) {
      setUser()
      setIsLogin(false)
    } else {
      setUser({name: 'Adam', email: 'adGontier@gmail.com'})
      setIsLogin(true)
    }
  }


  return (
    <div>
      <Button onClick={checkLogin}>{isLogin ? 'Quit' : 'Log In'}</Button>
    </div>
  );
};