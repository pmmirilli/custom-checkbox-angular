import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss']
})
export class CustomCheckboxComponent {
  @Input() checked: boolean = false;
  @Input() label: string = 'Checkbox';

  private checkbox: HTMLElement | null = document.getElementById("checkbox");

  setCheckedState(): void {
    if (this.checked) {
      this.checkbox?.setAttribute("checked", "checked");
      console.log('Checkbox state: checked'); /////
    } else {
      this.checkbox?.removeAttribute("checked");
      console.log('Checkbox state: unchecked'); /////
    }
  }

  onClick(): void {
    this.checked = !this.checked;
    this.setCheckedState();
  }

}
