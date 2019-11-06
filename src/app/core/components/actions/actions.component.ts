import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Action } from '../../interfaces/actions';

@Component({
  selector: 'gv-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsComponent implements OnInit {
  @Input('actions') actions: Array<any> = [];
  @Output('taken') taken: EventEmitter<Action> = new EventEmitter<Action>();
  constructor() {}

  ngOnInit() {}

  ActionClick(action) {
    this.taken.emit(action);
  }

  drop(event: Event) {
    console.log('Dropeed');
    event.preventDefault();
    // event.stopPropagation();
  }
}
