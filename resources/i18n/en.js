module.exports = {
  greet: 'Polling API',
  http_status: {
    200: 'Ok',
    201: 'Created',
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    409: 'Conflict',
    422: 'Unprocessable Entity',
    500: 'Internal Server Error',
  },
  validation: {
    exists: 'The %{attribute} must exists',
    'not-exists': 'The %{attribute} is not exists',
    unique: 'The %{attribute} already exists',
    'not-empty': 'The %{attribute} cannot empty',
    email: 'The %{attribute} must be email',
    string: 'The %{attribute} must be string',
    integer: 'The %{attribute} must be integer',
    boolean: 'The %{attribute} must be boolean',
    jwt: 'The %{attribute} must be jwt',
    mongoid: 'The %{attribute} must be mongoid',
    url: 'The %{attribute} must be url',
    length: 'The %{attribute} length is invalid',
    invalid: 'The %{attribute} is invalid',
  },
  auth: {
    'credential-incorrect': 'Email or Password is incorrect',
    'credential-exists': 'Email already exists',
    'login-success': 'Login Successful',
    'register-success': 'Register Successful',
    'logout-success': 'Logout Successful',
    'refresh-token-success': 'Refresh Token Successful',
  },
};
