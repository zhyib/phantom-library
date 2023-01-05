declare interface ResponseBody<T> {
  code: number,
  data: {
    code: number,
    data: T,
    message: string
  },
  message: string
}
