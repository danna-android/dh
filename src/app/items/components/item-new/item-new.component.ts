import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item, Status } from '../../enums/item.model';

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.scss']
})
export class ItemNewComponent {
  @Input() item?: Item;
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<Item>();

  form!: FormGroup;
  statuses = Object.values(Status);
  isEditMode = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.isEditMode = !!this.item;
    this.form = this.fb.group({
      title: [this.item?.title || '', Validators.required],
      description: [this.item?.description || '', Validators.required],
      status: [this.item?.status || '', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const now = new Date().toISOString();
      const result: Item = {
        ...this.item,
        ...this.form.value,
        creation_date: this.item?.creation_date || now,
        update_date: this.item ? now : undefined,
      };
      this.submit.emit(result);
    }
  }
}
