import {Alert, Button, Col, Form, Row, Stack} from "react-bootstrap";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext.jsx";

const Login = () => {
  const {
    loginUser,
    loginError,
    loginInfo,
    upadteLoginInfo,
    isLoginLoading } = useContext(AuthContext)
  return (
    <>
    <Form onSubmit={loginUser}>
      <Row style={{height:"100vh", justifyContent:"center", paddingTop:"10%"}}>
        <Col xs={6}>
          <Stack gap={3}>
            <h2>Login</h2>
            <Form.Control type="email" placeholder="Email" onChange={(e)=>upadteLoginInfo({...loginInfo, email:e.target.value})}/>
            <Form.Control type="Password" placeholder="Password" onChange={(e)=>upadteLoginInfo({...loginInfo, password:e.target.value})}/>
            <Button type="submit" variant="primary">{isLoginLoading ? 'Getting in Chat...' : 'Login'}</Button>
            {
              loginError?.error && <Alert variant="danger"><p>{loginError?.message}</p></Alert>
            }
          </Stack>
        </Col>

      </Row>
    </Form></>
  )
}

export default Login