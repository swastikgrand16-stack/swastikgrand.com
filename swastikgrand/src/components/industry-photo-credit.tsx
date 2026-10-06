import { handTapIndustries } from "@/data/hand-tap";

export function IndustryPhotoCredit({ title }: { title: string }) {
  const industry = handTapIndustries.find(([industryTitle]) => industryTitle === title);
  if (!industry?.[3] || !industry[4] || !industry[5] || !industry[6]) return null;

  return <small className="industry-photo-credit"><a href={industry[4]} target="_blank" rel="noreferrer">{industry[3]}</a> / <a href={industry[5]} target="_blank" rel="noreferrer">{industry[6]}</a></small>;
}