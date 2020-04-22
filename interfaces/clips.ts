export interface Clips {
  contentObjects: Clip[];
}

export interface Clip {
  contentId: string;
  rawFileUrl: string;
  rawFileUrlLowRes: string;
  unbrandedFileUrl: string;
  contentTitle: string;
  contentViews: number;
  contentLikes: number;
  contentThumbnail: string;
  categoryId: number;
  videoLengthSeconds: number;
  createdTimestamp: number;
  directClipUrl: string;
  embedIframeCode: string;
  credits: string;
}
export interface Categories {
  contentObjects: Category[];
}

export interface Category {
  categoryId: number
  categoryName: string,
  alternativeName: string,
}