import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-board-view',
  templateUrl: './main-board-view.component.html',
  styleUrls: ['./main-board-view.component.scss']
})
export class MainBoardViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  board: Board = new Board('Test Board', [
    new Column('ideas', ["some random ideas", "This is another idea", "Build an awesome application"]),
    new Column('Research', ["some random ideas", "This is another idea", "Build an awesome application"]),
    new Column('Todo', ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep']),
    new Column('Done', ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'])
  ])


}
