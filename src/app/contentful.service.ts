import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

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
    return from(
      this.cdaClient.getEntries({
        ...Object,
        content_type: this.CONFIG.contentTypeIds.angularPost,
        query
      })
    ).pipe(map(posts => posts.items));
  }

  getPost(id: string): any {
    return from(this.cdaClient.getEntry(id));
  }
}
