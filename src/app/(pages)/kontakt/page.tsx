import Kontaktformular from "@/app/components/forms/Kontaktformular";

type KontaktPageProps = {
  searchParams?: Promise<{
    topic?: string;
  }>;
};

const allowedTopics = new Set([
  "allgemein",
  "mitgliedschaft",
  "training",
  "hallenmiete",
]);

export default async function Kontakt({ searchParams }: KontaktPageProps) {
  const params = searchParams ? await searchParams : undefined;
  const topic =
    params?.topic && allowedTopics.has(params.topic) ? params.topic : "";

  return (
    <>
      <Kontaktformular initialTopic={topic} />
    </>
  );
}
