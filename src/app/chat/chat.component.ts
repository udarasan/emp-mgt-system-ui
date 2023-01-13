import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ChatService} from "../services/chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit{
  constructor(private chatService: ChatService) {
  }
  inputmessage= new FormControl();

  public users: number = 0;
  public message: string = '';
  public messages: string[] = [];

  ngOnInit(): void {
    // @ts-ignore
    this.chatService.receiveChat().subscribe((message: string) => {
      this.messages.push(message);
    });
    // @ts-ignore
    this.chatService.getUsers().subscribe((users: number) => {
      this.users = users;
    });

  }
  addChat(){
    this.messages.push(this.message);
    this.chatService.sendChat(this.message);
    this.message = '';
  }
}
