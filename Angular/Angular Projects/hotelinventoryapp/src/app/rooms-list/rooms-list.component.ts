import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms/rooms';

@Component({
  selector: 'hivt-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit, OnChanges {
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    // if(changes['title']){
    //   this.title = changes['title'].currentValue.toggle;
    // }
  }

  @Input() rooms: RoomList[] = [];

  @Input() title: string = '';

  @Output() selectedRoom = new EventEmitter<RoomList>();

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }

 

}
