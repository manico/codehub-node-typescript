import {
  HttpClient,
  HttpClientOptions,
  HttpException,
  HttpResponse,
} from '../Http';

export class News {
  private client: HttpClient;

  constructor(clientOptions: HttpClientOptions) {
    this.client = new HttpClient(clientOptions);
  }

  async getArticle(index: number): Promise<object> {
    try {
      const articles = await this.client.get('/articles.json');
      const article = articles.data[index];

      return new HttpResponse(article);
    } catch (error) {
      return new HttpException(
        error.response.status,
        error.response.message,
        [],
      );
    }
  }
}
