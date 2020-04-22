import { ApolloServer, gql } from "apollo-server-micro";
import "isomorphic-fetch";
import { Category, Categories, Clips, Clip } from "../../interfaces/clips";
const token = process.env.MEDAL_TV_KEY;
const typeDefs = gql`
  type Query {
    clip(contentId: String): Clip
    clips: [Clip]
    category(categoryId: String): Category
    categories: [Category]
    lastUpdated: Date
  }

  scalar Date

  type Clip {
    contentId: String
    rawFileUrl: String
    rawFileUrlLowRes: String
    unbrandedFileUrl: String
    contentTitle: String
    contentViews: Int
    contentLikes: Int
    contentThumbnail: String
    categoryId: Int
    videoLengthSeconds: Int
    createdTimestamp: Int
    directClipUrl: String
    embedIframeCode: String
    credits: String
  }

  type Category   {
    categoryId: Int
    categoryName: String,
    alternativeName: String,
    categoryThumbnail: String,
    categoryFollowers: Int,
    categoryPublishers: Int,
    categoryBackground: String,
    defaultRisk: Int,
    subreddit: String,
    hashtag: String
  },
`;

let clips: Clip[] = [];
let categories: Category[] = [];
let lastUpdated = null;

const updateCategories = async (): Promise<void> => {
  if (
    lastUpdated !== null &&
    (new Date().getTime() - lastUpdated.getTime()) / 1000 < 600
  )
    return;

  const data: Categories = await fetch(
    `https://developers.medal.tv/v1/categories`,
    {
      headers: {
        Authorization: token,
      },
    }
  ).then((data) => data.json());

  categories = data.contentObjects.map((category: Category) => ({
    ...category,
  }));
  console.log(categories);
  lastUpdated = new Date();
};
updateCategories();

const updateClips = async (): Promise<void> => {
  if (
    lastUpdated !== null &&
    (new Date().getTime() - lastUpdated.getTime()) / 1000 < 600
  )
    return;

  const data: Clips = await fetch(
    `https://developers.medal.tv/v1/latest?userId=102296&limit=1000&offset=0`,
    {
      headers: {
        Authorization: token,
      },
    }
  ).then((data) => data.json());

  clips = data.contentObjects.map((clip: Clip) => ({
    ...clip,
    createdTimestamp: clip.createdTimestamp / 1000,
  }));
  lastUpdated = new Date();
};

updateClips();

const resolvers = {
  Query: {
    async categories(): Promise<Category[]> {
      await updateCategories();
      return categories;
    },
    async category(_: any, { categoryId }: { categoryId: string }): Promise<Category> {
      await updateCategories();
      return categories.filter((cat) => cat.categoryId.toString() === categoryId)[0];
    },
    async clips(): Promise<Clip[]> {
      await updateClips();
      return clips;
    },
    async clip(_: any, { contentId }: { contentId: string }): Promise<Clip> {
      await updateClips();
      return clips.filter((clip) => clip.contentId === contentId)[0];
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
