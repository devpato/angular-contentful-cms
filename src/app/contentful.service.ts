import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private CONFIG = {
    space: 'XXXX',
    accessToken: 'XXXX',
    contentTypeIds: {
      angularPost: 'angularPost'
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
        content_type: this.CONFIG.contentTypeIds.angularPost,
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
