import { Body, Controller, Post } from '@nestjs/common';

@Controller('search')
export class SearchController {
  @Post()
  search(@Body() request: { search: string }): {
    search: string;
    results: string[];
  } {
    return {
      ...request,
      results: ['John', 'Doe', 'Jane'],
    };
  }
}
