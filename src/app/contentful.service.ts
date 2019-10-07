import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  CONFIG = {
    space: '8vmrqe48tnfb',
    accessToken: 'KL4NJzj-pXlytDxsvNhNLSsJZIfJr4rV08R63fRHhC4',
    contentTypeIds: {
      angularPosts: 'angularPost'
    }
  };

  private cdaClient = createClient({
    space: this.CONFIG.space,
    accessToken: this.CONFIG.accessToken
  });
  constructor() {
    this.getPosts();
  }

  getPosts(query?: object): any {
    return this.cdaClient
      .getEntries({
        ...Object,
        content_type: this.CONFIG.contentTypeIds.angularPosts,
        query
      })
      .then(posts => {
        return of(posts.items);
      });
  }

  getPost(id: string): any {
    return this.cdaClient.getEntry(id).then(post => {
      return of(post);
    });
  }
}
