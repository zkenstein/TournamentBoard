import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import {PlayersService} from '../players.service';
import {Player} from '../player';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
 })
export class PlayersComponent implements OnInit {
  allPlayers: FirebaseListObservable<Player[]>;
  constructor(public af: AngularFire, private router: Router, private playersService: PlayersService) {
    this.allPlayers = playersService.findAllPlayers();
    this.allPlayers.subscribe(snapshot => { console.log(snapshot);});
};
  ngOnInit(){
  }

  onSubmit(formData) {
    // this.playersService.addPlayer()
  }
}
