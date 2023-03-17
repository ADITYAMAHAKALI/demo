import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';


class Book{
  title: string;
  author: string;
  date: Date;
  genre:string;
  price:number;
  constructor(title: string, author: string,date:Date,genre:string,price:number) {
    this.title = title;
    this.author = author;
    this.date = date;
    this.genre = genre;
    this.price = price;
  }
}
@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent{
  imageUrl = "assets/images/banner.png";
  bookList: Array<Book> = [
    {title: 'The Hobbit', author: 'J.R.R. Tolkien',date: new Date("2021-01-01"), genre: 'Fantasy', price: 10},
    {title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', date: new Date("2010-01-01"), genre: 'Fantasy', price: 25},
    {title: 'The Silmarillion', author: 'J.R.R. Tolkien', date:new Date("2005-04-03"), genre:'Fiction', price: 5},
  ];
}
