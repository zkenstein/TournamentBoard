import { Injectable, Inject } from '@angular/core';
import { Observable, Subject } from "rxjs/Rx";
import { Player } from "./Shared/Model/player";
import { AngularFireDatabase, FirebaseListObservable, FirebaseRef } from "angularfire2";

@Injectable()
export class PlayersService {


  private ref: firebase.database.Reference;
  private playerRef: firebase.database.Reference;
  constructor(private db: AngularFireDatabase, @Inject(FirebaseRef) fb) {

    this.ref = fb.database().ref();

    this.playerRef = fb.database().ref('players')

  }

  findAllPlayers(): FirebaseListObservable<Player[]> {

    return <FirebaseListObservable<Player[]>>this.db.list(this.playerRef);
  }

  addPlayer(player: Player) {
    let newPushKey: string = this.playerRef.push().key;


    let updates = {};
    updates["/players/" + newPushKey] = player;

    this.ref.update(updates);

  }


}
