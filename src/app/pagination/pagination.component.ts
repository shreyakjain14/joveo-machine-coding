import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() numberOfPages: number = 1;
  @Input() currentPage: number = 1;
  @Output() goToPage = new EventEmitter<number>();

  goToPrevPage() {
    if (this.currentPage > 1) this.goToPage.emit(this.currentPage - 1);
  }

  goToNextPage() {
    if (this.currentPage < this.numberOfPages)
      this.goToPage.emit(this.currentPage + 1);
  }
}
