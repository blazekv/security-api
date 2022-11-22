import { Injectable } from '@nestjs/common';
import { Comment } from '../model/comment';

@Injectable()
export class CommentService {
  private comments: Comment[] = [];

  addComment(comment: Comment) {
    this.comments.push(comment);
  }

  getComments(): Comment[] {
    return this.comments;
  }

  clearComments() {
    this.comments = [];
  }
}
