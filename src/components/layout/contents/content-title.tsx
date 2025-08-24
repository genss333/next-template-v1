"use client";
import Flex from "@/components/layout/flex";
import { ArrowLeft, ArrowRight, LucideProps } from "lucide-react";
import Link from "next/link";
import { ComponentType } from "react";

interface PropsType {
  title: string;
  desc: string;
  prevPath: string;
  nextPath: string;
  isShowPrevBtn?: boolean;
}

type BtnNavProps = {
  path: string;
  icon: ComponentType<LucideProps>;
};

function BtnNav({ path, icon: Icon }: BtnNavProps) {
  return (
    <div className="bg-accent px-1 py-0.5 rounded-sm">
      <Link href={path}>
        <Icon width={16} height={16} />
      </Link>
    </div>
  );
}

const ContentTitle = ({
  title,
  desc,
  prevPath,
  nextPath,
  isShowPrevBtn,
}: PropsType) => {
  return (
    <Flex direction={"col"} gap={2}>
      <Flex justify={"between"}>
        <div className="text-2xl font-semibold">{title}</div>
        <div>
          <Flex className="gap-4">
            {isShowPrevBtn == false ? null : (
              <BtnNav path={prevPath} icon={ArrowLeft} />
            )}
            <BtnNav path={nextPath} icon={ArrowRight} />
          </Flex>
        </div>
      </Flex>
      <div className="text-xs font-medium">{desc}</div>
    </Flex>
  );
};

export default ContentTitle;
