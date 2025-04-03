import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle,IonThumbnail, IonToolbar, IonTabs, IonTabButton, IonLabel, IonTabBar, IonSegment, IonSegmentButton, IonList, IonItem, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonText, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonText, IonButton, IonCardContent, IonCardTitle, IonCardSubtitle,
     IonCardHeader, IonCard, IonItem, IonList, IonSegmentButton, IonSegment,
      IonTabBar, IonLabel, IonTabButton, IonTabs, IonContent, IonHeader,
      IonThumbnail, 
      IonTitle, IonToolbar, CommonModule, FormsModule,RouterLink]
})
export class BookingPage implements OnInit {

  selectedSegment: string = 'Pending';
  allData: any[] = [];
  filteredData: any[] = [];
   bookings: any[] = [];
  constructor() {}

  ngOnInit() {
    this.allData = [
      { name: 'Booking 1', status: 'Pending' },
      { name: 'Booking 2', status: 'Confirmed' },
      { name: 'Booking 3', status: 'Completed' },
      { name: 'Booking 4', status: 'Cancelled' },
      { name: 'Booking 5', status: 'Pending' },
      { name: 'Booking 6', status: 'Completed' },
    ];
    this.bookings = [
      {
        bookingId: 'BKG12345',
        customerName: 'Amit Sharma',
        serviceName: 'Haircut',
        date: new Date(2025, 2, 28),
        time: '10:30 AM',
        status: 'Confirmed',
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKwu24bi0nBtgdzIKRC-Xl-TOoaE3ML5sSAQ&s'
      },
      {
        bookingId: 'BKG12315',
        customerName: 'Amit Sharma',
        serviceName: 'Haircut',
        date: new Date(2025, 2, 28),
        time: '10:30 AM',
        status: 'Confirmed',
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKwu24bi0nBtgdzIKRC-Xl-TOoaE3ML5sSAQ&s'
      },
      {
        bookingId: 'BKG12325',
        customerName: 'Amit Sharma',
        serviceName: 'Haircut',
        date: new Date(2025, 2, 28),
        time: '10:30 AM',
        status: 'Confirmed',
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKwu24bi0nBtgdzIKRC-Xl-TOoaE3ML5sSAQ&s'
      },
      {
        bookingId: 'BKG12545',
        customerName: 'Amit Sharma',
        serviceName: 'Haircut',
        date: new Date(2025, 2, 28),
        time: '10:30 AM',
        status: 'Confirmed',
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKwu24bi0nBtgdzIKRC-Xl-TOoaE3ML5sSAQ&s'
      },
      {
        bookingId: 'BKG12346',
        customerName: 'Priya Desai',
        serviceName: 'Facial',
        date: new Date(2025, 2, 29),
        time: '2:00 PM',
        status: 'Pending',
        imagePath: 'data:image/jpeg;base64,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'
      },
      {
        bookingId: 'BKG12347',
        customerName: 'Rahul Verma',
        serviceName: 'Massage',
        date: new Date(2025, 2, 30),
        time: '4:45 PM',
        status: 'Completed',
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNjkaQHLXfokbl1GiKnXl6v7GNgnG8rb3JA&s'
      },
      {
        bookingId: 'BKG12348',
        customerName: 'Sneha Patil',
        serviceName: 'Manicure',
        date: new Date(2025, 3, 1),
        time: '11:15 AM',
        status: 'Cancelled',
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcG7bjaEFwSdVs4KvkIleUaasOjgFKrf7z6g&s'
      },
      {
        bookingId: 'BKG12349',
        customerName: 'Vikram Singh',
        serviceName: 'Pedicure',
        date: new Date(2025, 3, 2),
        time: '5:30 PM',
        status: 'Confirmed',
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-WDVXiZSuSUUeURxbBZl4SvMnwmDNdO65LA&s'
      }, {
        bookingId: 'BKG12345',
        customerName: 'Amit Sharma',
        serviceName: 'Haircut',
        date: new Date(2025, 2, 28),
        time: '10:30 AM',
        status: 'Confirmed',
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKwu24bi0nBtgdzIKRC-Xl-TOoaE3ML5sSAQ&s'
      },
   
     
      {
        bookingId: 'BKG12348',
        customerName: 'Priya Singh',
        serviceName: 'Hair Spa',
        date: new Date(2025, 2, 28),
        time: '12:00 PM',
        status: 'Confirmed',
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKwu24bi0nBtgdzIKRC-Xl-TOoaE3ML5sSAQ&s'
      },
      {
        bookingId: 'BKG12349',
        customerName: 'Vikas Malhotra',
        serviceName: 'Hair Color',
        date: new Date(2025, 2, 28),
        time: '12:30 PM',
        status: 'Cancelled',
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNjkaQHLXfokbl1GiKnXl6v7GNgnG8rb3JA&s'
      },
      
      {
        bookingId: 'BKG12351',
        customerName: 'Arjun Kapoor',
        serviceName: 'Manicure',
        date: new Date(2025, 2, 28),
        time: '1:30 PM',
        status: 'Confirmed',
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKwu24bi0nBtgdzIKRC-Xl-TOoaE3ML5sSAQ&s'
      },
      {
        bookingId: 'BKG12352',
        customerName: 'Sonal Tiwari',
        serviceName: 'Haircut',
        date: new Date(2025, 2, 28),
        time: '2:00 PM',
        status: 'Completed',
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNjkaQHLXfokbl1GiKnXl6v7GNgnG8rb3JA&s'
      },
      {
        bookingId: 'BKG12353',
        customerName: 'Ravi Kumar',
        serviceName: 'Shaving',
        date: new Date(2025, 2, 28),
        time: '2:30 PM',
        status: 'Cancelled',
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNjkaQHLXfokbl1GiKnXl6v7GNgnG8rb3JA&s'
      },
     
      
      {
        bookingId: 'BKG12356',
        customerName: 'Sita Raman',
        serviceName: 'Haircut',
        date: new Date(2025, 2, 28),
        time: '4:00 PM',
        status: 'Completed',
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcG7bjaEFwSdVs4KvkIleUaasOjgFKrf7z6g&s'
      },
      {
        bookingId: 'BKG12357',
        customerName: 'Deepak Jain',
        serviceName: 'Hair Color',
        date: new Date(2025, 2, 28),
        time: '4:30 PM',
        status: 'Confirmed',
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmI57giWxjA-WXBTE7HIzLV0Y9YcEnxIyrCQ&s'
      },
      {
        bookingId: 'BKG12358',
        customerName: 'Kiran Bhatt',
        serviceName: 'Pedicure',
        date: new Date(2025, 2, 28),
        time: '5:00 PM',
        status: 'Cancelled',
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMh3TSq7RzA1ioI7Sj-43Sen_tDnhnftN7Lg&s'
      },
     
      {
        bookingId: 'BKG12360',
        customerName: 'Simran Kaur',
        serviceName: 'Manicure',
        date: new Date(2025, 2, 28),
        time: '6:00 PM',
        status: 'Pending',
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4tGmnf1UWcc32hFN73S6zYxJ4TjrdVmjeZg&s'
      }
    ];
    
    
    this.filterData();
  }

  segmentChanged(event: any) {

    this.selectedSegment = event.detail.value; 
    console.log(event.detail.value);
    this.filterData();
  }

  filterData() {
    
    this.filteredData = this.bookings.filter(
      (item) => item.status === this.selectedSegment
    );
    console.log(this.filteredData);

  }
  cancelBooking(bookingId: string) {
    console.log(`Cancelling booking with ID: ${bookingId}`);
  }
  
  rescheduleBooking(bookingId: string) {
    console.log(`Rescheduling booking with ID: ${bookingId}`);
  }
  viewReceipt(bookingId: string){
    console.log(`Viewing receipt for booking with ID: ${bookingId}`);
  }
  
}
