export default class Connection {
  private static instace: Connection;

  private constructor(connectQuery: string) {
    console.log(`The query ${connectQuery} has been success`);
  }

  public static getInstance(connectQuery: string): Connection {
    if (!Connection.instace) Connection.instace = new Connection(connectQuery);

    return Connection.instace;
  }

  public connect(): void {
    console.log('connection success');
  }

  public disconnect(): void {
    console.log('disconnect');
  }
}
