import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../posts.model';
import { PostsService } from '../posts.service';

@Component ({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.sass']
})
export class PostCreateComponent {
  enterTitle = "";
  enterContent = "";

  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm){
    if (form.invalid){
      return;
    }
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
    this.postsService.addPost(post);
    form.resetForm()
  }
}
