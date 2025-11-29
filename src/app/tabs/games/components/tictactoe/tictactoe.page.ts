import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.page.html',
  styleUrls: ['./tictactoe.page.scss'],
})
export class TicTacToePage implements OnInit, OnDestroy {
  xs: number[] = [];
  os: number[] = [];
  xTurn = true;
  winner: string;

  constructor(
    private navCtrl: NavController,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.commonService.timerVPosition = 'bottom';
  }

  ngOnDestroy() {
    this.commonService.timerVPosition = 'center';
  }

  onCellSelected(cell: number) {
    if (!this.xs.includes(cell) && !this.os.includes(cell) && !this.winner) {
      if (this.xTurn) {
        this.xs.push(cell);
        this.xTurn = false;
        this.checkWinner();
      } else {
        this.os.push(cell);
        this.xTurn = true;
        this.checkWinner();
      }
    }
  }

  checkWinner() {
    const winningCombinations = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];
    if (this.xTurn) {
      winningCombinations.forEach((combination) => {
        if (combination.every((cell) => this.os.includes(cell))) {
          this.winner = 'o';
        }
      });
    } else {
      winningCombinations.forEach((combination) => {
        if (combination.every((cell) => this.xs.includes(cell))) {
          this.winner = 'x';
        }
      });
    }

    if (!this.winner && this.xs.length + this.os.length === 9) {
      this.winner = 'd';
    }
  }

  onNewGame() {
    this.xs = [];
    this.os = [];
    this.xTurn = true;
    this.winner = undefined;
  }
}
