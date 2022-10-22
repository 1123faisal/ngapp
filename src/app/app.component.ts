import { Component, ComponentRef, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertComponent } from './alert/alert.component';
import { PlaceholderDirective } from './placeholder.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  sub?: Subscription;
  @ViewChild(PlaceholderDirective) host!: PlaceholderDirective;
  title = 'ngapp1';

  constructor() {}

  showAlert() {
    this.host.vcr.clear();
    let comp = this.host.vcr.createComponent(AlertComponent);
    comp.instance.msg = 'Hello From Dynamic';
    this.sub = comp.instance.close.subscribe((rs) => {
      if (this.sub) this.sub.unsubscribe();
      this.host.vcr.clear();
    });
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}
