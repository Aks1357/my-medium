export interface BlogFeed {
  url: String;
  title: String;
  link: String;
  author: String;
  description: String;
  image: String;
}

export interface BlogItem {
  title: String;
  pubDate: Date;
  link: String;
  guid: String;
  author: String;
  thumbnail: String;
  description: String;
  enclosure: Object;
  categories: Array<String>;
}

export interface UserBlog {
  status: String;
  feed: BlogFeed;
  items: BlogItem[];
}
