import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { AdminSearchProduct } from '../search-product.model';
import { PostProductRequest } from '../post-product.model';

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.scss']
})
export class PostProductComponent {
  model: PostProductRequest = {
    flgTest: true,
    socialId: 1,
    post: {
      hashtags: [],
      image: null,
      text: '',
      url: null,
      linkSx: '',
      linkDx: ''
    }
  };

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    public dialogRef: MatDialogRef<PostProductComponent>,
    @Inject(MAT_DIALOG_DATA) public passedData: { product: AdminSearchProduct }
  ) {
    if (this.passedData.product.multimedia && this.passedData.product.multimedia.length > 1) {
      this.model.post.image = this.passedData.product.multimedia[1].uri;
    }
    this.model.post.url = this.passedData.product.url;
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.model.post.hashtags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: string): void {
    const index = this.model.post.hashtags.indexOf(fruit);

    if (index >= 0) {
      this.model.post.hashtags.splice(index, 1);
    }
  }
}
