using System;

namespace ObjectOriented {
   public class Room {
      public int Seats {get; set;}
      private int SeatsInUse = 0;
      public Room (int seats) {
         Seats = seats;
      }
      public void ReserveSeat (){
         SeatsInUse++;
         if (SeatsInUse > Seats) {
            OnRoomSoldOut(EventArgs.Empty);
         }
         else 
            Console.WriteLine("Seat was reserved");
      }

      public event EventHandler RoomSoldOutEvent;

      protected virtual void OnRoomSoldOut(EventArgs e) {
         EventHandler handler = RoomSoldOutEvent;
         handler?.Invoke(this, e);
      } 
   }
}