export class EventDTO{
  private  eventId:number;
  private  gameId:number;
  private  eventType:string;
  private  isPaid:string;
  private  payment:string;
  private  eventName:string;
  private  startTime:string;
  private  endTime:string;
  private  country:string;
  private  location:string;
  private  organizer:string;
  private  description:string;
  private  eventImage:string;


  constructor(eventId: number, gameId: number, eventType: string, isPaid: string, payment: string, eventName: string, startTime: string, endTime: string, country: string, location: string, organizer: string, description: string, eventImage: string) {
    this.eventId = eventId;
    this.gameId = gameId;
    this.eventType = eventType;
    this.isPaid = isPaid;
    this.payment = payment;
    this.eventName = eventName;
    this.startTime = startTime;
    this.endTime = endTime;
    this.country = country;
    this.location = location;
    this.organizer = organizer;
    this.description = description;
    this.eventImage = eventImage;
  }
}
