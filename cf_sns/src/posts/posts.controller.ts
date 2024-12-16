import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

interface Post {
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Get()
  getHello(): Post {
    return {
      author: 'newjeans',
      title: '뉴진스 민지',
      content: '민지 개이쁘다',
      likeCount: 12344124,
      commentCount: 999999,
    };
  }
}
