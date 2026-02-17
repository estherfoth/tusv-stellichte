import { createClient, Entry, EntrySkeletonType } from "contentful";
import { BoardMember, ImpressumContent, NewsArticle } from "../types/contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN!,
});

export async function getBoardMembers(): Promise<BoardMember[]> {
  const entries = await client.getEntries({
    content_type: "boardMember",
    include: 2, // Fetches linked asses
  });
  return entries.items.map((entry) => ({
    sys: { id: entry.sys.id },
    fields: entry.fields as BoardMember["fields"],
  }));
}

export async function getImpressum(): Promise<ImpressumContent> {
  const entries = await client.getEntries({
    content_type: "impressum",
    include: 2, // Fetches linked asses
  });
  const entry = entries.items[0];
  return {
    sys: { id: entry.sys.id },
    fields: entry.fields as ImpressumContent["fields"],
  };
}

export async function getArticles() {
  const entries = await client.getEntries({ content_type: "article" });
  return entries.items;
}

export async function getNews(): Promise<NewsArticle[]> {
  const entries = await client.getEntries({
    content_type: "newsArticle",
    include: 2, // Fetches linked assets (images)
    order: ["-fields.date"], // Neueste zuerst
  });
  return entries.items.map((entry) => ({
    sys: { id: entry.sys.id },
    fields: entry.fields as NewsArticle["fields"],
  }));
}

export async function getNewsBySlug(slug: string): Promise<NewsArticle | null> {
  const entries = await client.getEntries({
    content_type: "newsArticle",
    "fields.slug": slug,
    include: 2,
    limit: 1,
  });

  if (entries.items.length === 0) {
    return null;
  }

  const entry = entries.items[0];
  return {
    sys: { id: entry.sys.id },
    fields: entry.fields as NewsArticle["fields"],
  };
}
