import { useContext } from "react";
import { Form, Row, Col, Stack, Button, Alert } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { registerInfo, upadteRegisterInfo } = useContext(AuthContext);
  return (
    <>
      <Form>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "10%",
          }}
        >
          <Col xs={6}>
            <Stack gap={3}>
              <h2>Register</h2>
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) => upadteRegisterInfo({
                  ...registerInfo, name:e.target.value
                })}
              />
              <Form.Control type="email" placeholder="Email" onChange={(e) => upadteRegisterInfo({
                  ...registerInfo, email:e.target.value
                })}/>
              <Form.Control type="password" placeholder="Password" onChange={(e) => upadteRegisterInfo({
                  ...registerInfo, password:e.target.value
                })}/>
              <Button variant="primary" type="submit">
                Register
              </Button>
              <Alert variant="danger">
                <p>An Error Occured !</p>
              </Alert>
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Register;
