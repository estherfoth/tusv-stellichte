import { createClient, Entry, EntrySkeletonType } from "contentful";
import { BoardMember } from "../types/contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
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

export async function getArticles() {
  const entries = await client.getEntries({ content_type: "article" });
  return entries.items;
}
