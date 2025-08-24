import { getDictionary } from "@/components/lang/dictionaries";

const page = async ({ params }: { params: Promise<{ lang: "th" | "en" }> }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <div>{dict.greetings.hello}</div>;
};

export default page;
