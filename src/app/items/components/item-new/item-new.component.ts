import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item, Status } from '../../enums/item.model';
import { Store } from '@ngrx/store';
import {
  createItem,
  updateItem,
  updateItemSuccess,
} from '../../state/item.actions';

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.scss'],
})
export class ItemNewComponent {
  @Input() item?: Item;
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<Item>();

  form!: FormGroup;
  statuses = Object.values(Status);
  isEditMode = false;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item']) {
      this.isEditMode = !!this.item;
      this.initForm();
    }
  }

  private initForm(): void {
    this.form = this.fb.group({
      title: [this.item?.title || '', Validators.required],
      description: [this.item?.description || '', Validators.required],
      status: [this.item?.status || '', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const updatedItem: Item = {
        ...this.form.value,
        id: this.item?.id || Date.now().toString(),
        creation_date: this.item?.creation_date || new Date(),
        update_date: this.isEditMode ? new Date() : undefined,
      };

      if (this.isEditMode) {
        this.store.dispatch(
          updateItemSuccess({
            update: { id: updatedItem.id, changes: updatedItem },
          })
        );
      } else {
        this.store.dispatch(createItem({ item: updatedItem }));
      }

      this.form.reset();
      this.onClose();
    }
  }

  onClose() {
    this.close.emit();
  }
}
