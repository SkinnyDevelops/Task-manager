import CreateUser from '../domain/useCases/createUser.js';

async function registerUser(req, res) {
  const { idQuery, body } = req;

  const service = new CreateUser({
    idQuery,
    body,
  });

  const response = service.execute();

  res.status(
    response.status,
  ).send(response);
}

export default registerUser;
