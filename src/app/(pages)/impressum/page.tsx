import { ImpressumContent } from "../../../types/contentful";
import { getImpressum } from "@/lib/contentful";
import ImpressumComponent from "../../components/ui/ImpressumComponent";

export default async function Impressum() {
  const impressum: ImpressumContent = await getImpressum();

  return <ImpressumComponent />;
}
