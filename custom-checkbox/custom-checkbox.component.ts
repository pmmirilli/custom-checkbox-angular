import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss']
})
export class CustomCheckboxComponent {
  @Input() label: string = 'Checkbox';
  @Output() checkedState: EventEmitter<boolean> = new EventEmitter<boolean>();

  private checked: boolean = true;
  private checkbox: HTMLElement | null = document.getElementById("checkbox");

  emitCheckedState() {
    this.checkedState.emit(this.checked);
  }

  setCheckedState(): void {
    if (this.checked) {
      this.checkbox?.setAttribute("checked", "checked");
      console.log('Checkbox state: checked'); /////
    } else {
      this.checkbox?.removeAttribute("checked");
      console.log('Checkbox state: unchecked'); /////
    }
    this.emitCheckedState();
  }

  onClick(): void {
    this.checked = !this.checked;
    this.setCheckedState();
  }

}
