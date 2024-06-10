import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-media-dialog',
  templateUrl: './media-dialog.component.html',
  styleUrls: ['./media-dialog.component.css']
})
export class MediaDialogComponent {
  currentIndex: number = 0;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.data = data || { videoUrls: [] };
   }
  next() {

      this.currentIndex = this.currentIndex + 1;
  }
  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex = this.currentIndex - 1;
    }
  }
}
