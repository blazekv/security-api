import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { CommentService } from '../services/comment.service';
import { Comment } from '../model/comment';
import { AuthGuard } from '@nestjs/passport';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  getComments(): { data: Comment[] } {
    return { data: this.commentService.getComments() };
  }

  @Post()
  createComment(@Body() comment: Comment): Comment {
    comment.created = new Date().toISOString();
    this.commentService.addComment(comment);
    return comment;
  }

  @Delete()
  deleteComments(): void {
    this.commentService.clearComments();
  }
}
