import { ApolloServer, gql } from "apollo-server-micro";
import "isomorphic-fetch";
import { Posts, Post } from "../../interfaces/blog";
const dev = process.env.NODE_ENV !== "production";
export const host = dev ? "http://localhost:3001" : "https://blog snipey.dev";

const token = process.env.GHOST_KEY;
const typeDefs = gql`
  type Query {
	post(id: String): Post
    posts: [Post]
    lastUpdated: Date
  }
  scalar Date
  type Post {
      slug: String,
      id: String,
      uuid: String,
      title: String,
      html: String,
      comment_id: String,
      feature_image: String,
      featured: Boolean,
      visibility: String,
      created_at: String,
      updated_at: String,
      published_at: String,
      custom_excerpt: String,
      codeinjection_head: String,
      codeinjection_foot: String,
      custom_template: String,
      canonical_url: String,
      url: String,
      excerpt: String,
      reading_time: Int,
      og_image: String,
      og_title: String,
      og_description: String,
      twitter_image: String,
      twitter_title: String,
      twitter_description: String,
      meta_title: String,
      meta_description: String
  }
`;

let posts: Post[] = [];
let lastUpdated = null;

const updateData = async (): Promise<void> => {
  // Check if last updated is greater than 10 minutes
  if (lastUpdated !== null && (new Date().getTime() - lastUpdated.getTime()) / 1000 < 600) return;

	// TODO Get Posts

	const postData: Array<Post> = await fetch(
		`${host}/ghost/api/v3/content/posts/?key=${token}`
	).then((data) => data.json());
	// console.log(postData.posts);
	posts = postData.posts.map((post: Post) => ({
		...post,
	}));
  // Set last updated
  lastUpdated = new Date();
}
updateData();
// 	setInterval(async () => {
// 	await updateData();
// }, 1000 * 600);

const resolvers = {
  Query: {
    async posts(): Promise<Post[]> {
      await updateData();
      return posts;
    },
	async post(_: any, { id }: { id: string }): Promise<Post> {
      await updateData();
      return posts.filter((post) => post.id === id)[0];
    },
    async lastUpdated(): Promise<string | null> {
      return lastUpdated || new Date();
    },
  },
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default new ApolloServer({
  typeDefs,
  resolvers,
  playground: false,
}).createHandler({ path: "/api/gql" });