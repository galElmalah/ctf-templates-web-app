import axios from 'axios';
import * as fixtures from './fixtures';

const delayedPromise = (time, data) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('called');
      res(data);
    }, time);
  });
};

const fakeFetcher = {
  get: () => {
    return delayedPromise(1000, fixtures.templates);
  },
  post: () => {},
};

export class API {

  static async fetchUserTemplates({ user }) {
    return this.fetcher.get(`templates/${user}`);
  }

  static async fetchTemplateById({ user, id }) {
    return this.fetcher.get(`templates/${user}/${id}`);
  }
  
}
API.fetcher = process.env.NODE_ENV === 'development' ? fakeFetcher : axios;

export const methods = {
  fetchUserTemplates: 'fetchUserTemplates',
  fetchTemplateById: 'fetchTemplateById',
};
