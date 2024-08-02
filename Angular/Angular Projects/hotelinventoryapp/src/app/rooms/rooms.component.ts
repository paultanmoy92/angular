import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hivt-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelname = 'Hilton Hotel';
  hideRooms = false;
  numberofrooms = '10';
  selectedRoom!: RoomList;
  title= 'Room List';
  rooms: Room = {

    totalRooms: 20,
    availableRooms: 5,
    bookedRooms: 5,
    

  }

  roomList: RoomList[] = [];

  ngOnInit(): void {

    this.roomList = [
      {

        roomNumber: 1,
        roomType: 'Delux A Room',
        roomPrice: 10000,
        checkoutTime: new Date(),

      },
      {
        roomNumber: 2,
        roomType: 'Delux B Room',
        roomPrice: 5000,
        checkoutTime: new Date(),
      },
      {
        roomNumber: 3,
        roomType: 'Delux C Room',
        roomPrice: 3000,
        checkoutTime: new Date(),
      }

    ]

  }



  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectRoom(room: RoomList){
   //console.log(room);
   this.selectedRoom = room;
    
  }

  addroom() {

    const room: RoomList= {
      roomNumber: 4,
      roomType: 'Delux D Room',
      roomPrice: 2500,
      checkoutTime: new Date(),

    };
    //this.roomList.push(room);
    this.roomList=[...this.roomList, room];

  }

}
