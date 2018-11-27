import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).on('scroll', function() {
      if ($(window).scrollTop()) {
        $('navbar').addClass('black');
      } else {
        $('nav').removeClass('black');
      }
    });
  }

}
