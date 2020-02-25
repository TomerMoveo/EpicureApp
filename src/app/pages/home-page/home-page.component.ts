import { Component, OnInit, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit, AfterViewInit, OnDestroy {

  private mediaSub: Subscription;

  constructor(
    private routerOne: Router,
    private cdRef: ChangeDetectorRef,
    private mediaObserver: MediaObserver,
    ) { }

  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe (
      (change: MediaChange) => {
        console.log(change.mqAlias);
        console.log(change);
      }
    );
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy() {
    if (this.mediaSub) {
      this.mediaSub.unsubscribe();
    }
  }
}
