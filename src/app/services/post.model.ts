export class  Post {
  public id: number;
  public location: string;
  public time: any;
  public author: string;
  public text: string;

  constructor(id: number, location: string, time: any, author: string, text: string) {
    this.id = id;
    this.location = location;
    this.time = time;
    this.author = author;
    this.text = text;
  }
}
