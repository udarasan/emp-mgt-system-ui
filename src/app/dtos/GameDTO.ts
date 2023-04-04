export class GameDTO {

  gameID:number;
  gameName:string;
  imageUrl:string;
  description:string;


  constructor(gameID: number, gameName: string, imageUrl: string, description: string) {
    this.gameID = gameID;
    this.gameName = gameName;
    this.imageUrl = imageUrl;
    this.description = description;
  }
}
