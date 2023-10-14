class AppError extends Error {
  constructor(msg, status = 500) {
    super(msg);
    this.name = 'AppError';
    this.status = status;
  }
}

class ValidationError extends AppError {
  constructor(field, msg) {
    super(`${field}: ${msg}`, 400);
    this.name = 'ValidationError';
    this.field = field;
  }
}

try {
  throw new ValidationError('email', 'is required');
} catch (e) {
  if (e instanceof ValidationError) {
    console.error(e.status, e.field, e.message);
  } else if (e instanceof AppError) {
    console.error(e.status, e.message);
  } else {
    throw e;
  }
} finally {
  console.log('cleanup');
}
