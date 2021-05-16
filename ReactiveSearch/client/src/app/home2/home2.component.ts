import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $("#search").focus(function () {
        $(".search-box").addClass("border-searching");
        $(".search-icon").addClass("si-rotate");
      });
      $("#search").blur(function () {
        $(".search-box").removeClass("border-searching");
        $(".search-icon").removeClass("si-rotate");
      });
      $("#search").keyup(function () {

      });
      $(".go-icon").click(function () {
        $(".search-form").submit();
      });
    });

  }

}
