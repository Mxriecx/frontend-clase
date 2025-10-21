import { Component } from '@angular/core';
import { Card } from '../../components/card/card';
import { Navbar } from "../../components/navbar/navbar";

@Component({
  selector: 'app-home',
  imports: [Card, Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
