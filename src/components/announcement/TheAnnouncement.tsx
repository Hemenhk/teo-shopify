"use client";
import { useAdminValues } from "@/hooks/useQueryHooks";
export default function TheAnnouncement() {
  const { data: announcementData } = useAdminValues();

  return (
    <div
      className="h-[6vh] w-full text-white flex justify-center items-center"
      style={{ backgroundColor: announcementData?.announcementColor }}
    >
      <span className="uppercase tracking-wider">{announcementData?.announcementText}</span>
    </div>
  );
}
