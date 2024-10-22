import { Injectable } from '@angular/core';
import { Challenge } from './challenge.model';

@Injectable({
  providedIn: 'root',
})
export class ChallengeService {
  private challenges: Challenge[] = [
    {
      id: 1,
      title: 'Plant a Tree',
      description: 'Plant a tree in your local community to help combat climate change.',
      category: 'Environment',
      difficulty: 'Easy',
      participants: 0,
    },
    {
      id: 2,
      title: 'Volunteer at a Food Bank',
      description: 'Spend a day volunteering at your local food bank to help those in need.',
      category: 'Community',
      difficulty: 'Medium',
      participants: 0,
    },
    {
      id: 3,
      title: 'Organize a Beach Cleanup',
      description: 'Gather a group of friends and organize a beach cleanup in your area.',
      category: 'Environment',
      difficulty: 'Hard',
      participants: 0,
    },
  ];

  getChallenges(): Challenge[] {
    return this.challenges;
  }

  getChallenge(id: number): Challenge | undefined {
    return this.challenges.find(challenge => challenge.id === id);
  }

  participateInChallenge(id: number): void {
    const challenge = this.getChallenge(id);
    if (challenge) {
      challenge.participants++;
    }
  }
}