// AccessDeniedError
// Model /Table NotFound
// Field / Column NotFound
// FileNotFoundError
// ValidationError
// UserError
// InternalServerError
// WebClientError

// ErrorBase
class NovaError extends Error {
  message: string
  code: number

  constructor(message: string, code: number) {
    super()
    this.message = message
    this.code = code
  }
}
