import AreaPage, { areaMetadata } from "@/components/AreaPage";
import { getAreaPage } from "@/data/areaPages";

const page = getAreaPage("bathroom-remodeling-greenwich-ct");

export const metadata = areaMetadata(page);

export default function Page() {
  return <AreaPage page={page} />;
}
