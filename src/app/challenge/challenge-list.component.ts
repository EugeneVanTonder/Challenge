import { Component, OnInit } from '@angular/core';
import { Challenge } from './challenge.model';
import { ChallengeService } from './challenge.service';

@Component({
  selector: 'ns-challenge-list',
  templateUrl: './challenge-list.component.html',
})
export class ChallengeListComponent implements OnInit {
  challenges: Challenge[];

  constructor(private challengeService: ChallengeService) {}

  ngOnInit(): void {
    this.challenges = this.challengeService.getChallenges();
  }
}