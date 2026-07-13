import React from "react";
import { workLists } from "@/constants/work";
import Link from "next/link";

const WorkSection = () => {
  return (
    <section>
      <div className="flex items-center gap-8">
        {workLists.map((work, i) => (
          <Link
            key={i}
            href={`${work.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex"
          >
            <span className="text-xl md:text-xl xl:text-[1.6vw]">
              {work.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
