export default class Result {
  private code: number;

  private data: object;

  private msg: string;

  public constructor(code: number, data: object, msg: string) {
    this.code = code;
    this.data = data;
    this.msg = msg;
  }

  public getObject() {
    return {
      code: this.code,
      data: this.data,
      msg: this.msg,
    };
  }
};
