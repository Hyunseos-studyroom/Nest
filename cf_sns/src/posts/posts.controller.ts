import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

interface PostModel {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

let posts: PostModel[] = [
  {
    id: 1,
    author: 'newjeans',
    title: '뉴진스 민지',
    content: '메이크업 고치고 있는 민지',
    likeCount: 12344124,
    commentCount: 999999,
  },
  {
    id: 2,
    author: 'newjeans',
    title: '뉴진스 헤린',
    content: '고양이 혜린',
    likeCount: 553223,
    commentCount: 124124,
  },
  {
    id: 3,
    author: 'kissoflife',
    title: '키오프 나띠',
    content: '춤추는 나띠',
    likeCount: 124455,
    commentCount: 345775,
  },
];

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // 1) GET /posts
  // 모든 posts를 다 가져온다.
  @Get()
  getPosts(): PostModel[] {
    return posts;
  }

  // 2) GET /posts/:id
  // id에 해당되는 Post를 가져온다.
  // 예를 들어 id===1일 경우 id가 1인 포스트를 가져온다.
  @Get(':id')
  getPost(@Param('id') id: string): PostModel {
    const post = posts.find((post) => post.id === +id);
    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }
}
