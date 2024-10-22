import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Challenge } from './challenge.model';
import { ChallengeService } from './challenge.service';

@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
})
export class ChallengeDetailComponent implements OnInit {
  challenge!: Challenge;

  constructor(
    private challengeService: ChallengeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.challenge = this.challengeService.getChallenge(id)!;
  }

  onParticipate(): void {
    this.challengeService.participateInChallenge(this.challenge.id);
    this.challenge = this.challengeService.getChallenge(this.challenge.id)!;
  }
}