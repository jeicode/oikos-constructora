import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment.prod';
import { Project } from 'src/app/core/models/project.model';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-wpp-modal-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wpp-modal-project.component.html',
  styleUrls: ['./wpp-modal-project.component.css']
})
export class WppModalProjectComponent implements OnInit, OnDestroy {

  BASE_URL:String = environment.base_url;
  @Input() project:Project = new Project()
  @Input() modalEvent!: Observable<boolean>;
  @Input() showFloatingButton: boolean = false;

  modalIsOpen: boolean = false;

  private eventsSubscription!: Subscription;
  constructor() { }


  ngOnDestroy(): void {
    this.eventsSubscription.unsubscribe()
  }



  ngOnInit(): void {
    this.eventsSubscription = this.modalEvent.subscribe((event) => this.openModal());
  }

  openModal(){
    this.modalIsOpen = true

  }
  
  closeModal(){
    this.modalIsOpen = false
  }

}
