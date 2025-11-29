import { Component } from '@angular/core';

@Component({
  selector: 'app-secretsanta',
  templateUrl: 'secretsanta.page.html',
  styleUrls: ['secretsanta.page.scss'],
})
export class SecretSantaPage {
  // Lista delle persone partecipanti
  participants = [
    'Daniele',
    'Jacopo',
    'Silvia',
    'Francesco',
    'Giulia',
    'Gabriele',
    'Martina',
    'Alessia',
    'Alessio',
    'Matteo',
    'Jonathan',
  ];

  pairs: { giver: string; receiver: string }[] = [];
  selectedPerson = '';
  selectedReceiver = '';
  showResult = false;

  constructor() {
    this.generatePairs();
  }

  /**
   * Genera un numero pseudo-casuale basato su un seme
   */
  private seededRandom(seed: number): number {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }

  /**
   * Genera le coppie Secret Santa usando un algoritmo deterministico
   */
  private generatePairs(): void {
    // Uso la data di Natale come seme per garantire sempre gli stessi accoppiamenti
    const seed = new Date('2025-12-25').getTime();
    const shuffled = [...this.participants];

    // Algoritmo di Fisher-Yates con seme deterministico
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(this.seededRandom(seed + i) * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Crea le coppie assicurandosi che nessuno regali a se stesso
    this.pairs = [];
    for (let i = 0; i < this.participants.length; i++) {
      let receiver = shuffled[i];

      // Se una persona dovrebbe regalare a se stessa, scambia con la successiva
      if (receiver === this.participants[i]) {
        const nextIndex = (i + 1) % shuffled.length;
        [shuffled[i], shuffled[nextIndex]] = [shuffled[nextIndex], shuffled[i]];
        receiver = shuffled[i];
      }

      this.pairs.push({
        giver: this.participants[i],
        receiver: receiver,
      });
    }
  }

  /**
   * Mostra a chi deve fare il regalo la persona selezionata
   */
  revealReceiver(): void {
    if (this.selectedPerson) {
      const pair = this.pairs.find((p) => p.giver === this.selectedPerson);
      this.selectedReceiver = pair ? pair.receiver : '';
      this.showResult = true;
    }
  }

  /**
   * Reset della selezione
   */
  reset(): void {
    this.selectedPerson = '';
    this.selectedReceiver = '';
    this.showResult = false;
  }

  /**
   * Rigenera le coppie (per test, normalmente non dovrebbe essere usato)
   */
  regenerate(): void {
    this.generatePairs();
    this.reset();
  }
}
