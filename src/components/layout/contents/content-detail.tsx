import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";
import styles from "./styles.module.css";

interface PropsType {
  tabList: string[];
  tabContent: ReactNode[];
}

const ContentDetail = ({ tabList, tabContent }: PropsType) => {
  return (
    <Tabs
      defaultValue={tabList[0]}
      orientation="vertical"
      className={styles.Root}
    >
      {tabList.length > 1 && (
        <TabsList className={styles.List}>
          {tabList.map((item, index) => (
            <TabsTrigger key={index} value={item}>
              {item}
            </TabsTrigger>
          ))}
        </TabsList>
      )}
      {tabContent.map((content, index) => (
        <TabsContent
          key={index}
          value={tabList[index]}
          className={styles.Content}
        >
          {content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ContentDetail;
