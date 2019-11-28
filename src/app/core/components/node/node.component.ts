import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';
import Node from '../../interfaces/node';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'gv-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NodeComponent implements OnInit, OnChanges {
  @Input('node') node: Node;
  @Input('isClicked') isClicked: boolean;
  @Output('dropped') dropped: EventEmitter<any> = new EventEmitter<any>();

  isStartNode = false;
  isEndNode = false;

  @ViewChild('nodeel', { static: true }) nodeEl;

  constructor(
    private messageService: MessageService,
    private ref: ChangeDetectorRef,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.messageService.messages$.subscribe(
      (message: Node) => {
        console.log('M', message);
        // if (message.row == this.node.row && message.col == this.node.col) {

        // }
      },
      err => {
        console.log(err);
      }
    );
  }

  ngAfterViewInit() {}

  ngOnChanges(changes) {
    console.log('changes ', changes);
  }

  runChangeDetector() {
    this.ref.markForCheck();
  }

  MouseUp(event: Event) {
    console.log(event);
    try {
      var data = (event as any).dataTransfer.getData('text');
      console.log(data, (event as any).data);
      this.dropped.emit({
        previousNode: JSON.parse(data),
        newNode: this.node,
      });
    } catch (err) {
      console.error(err);
    }
  }

  MouseDown(event: Event) {
    if (this.node.isStartNode || this.node.isEndNode) {
      this.messageService.MouseRelease();
      // event.preventDefault();
      event.stopPropagation();

      return;
    }
    this.node.isWall = !this.node.isWall;
  }

  CreateWall(event) {
    console.log('inside', this.isClicked);
    if (
      this.messageService.GetMouseClicked() == true &&
      !this.node.isEndNode &&
      !this.node.isStartNode
    ) {
      this.node.isWall = !this.node.isWall;
    }
  }

  DragCancel(event: Event) {
    event.preventDefault();
  }

  DragStart(event) {
    event.dataTransfer.setData('text/plain', JSON.stringify(this.node));
    event.data = this.node;
  }
}
