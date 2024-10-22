export interface Challenge {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  participants: number;
}