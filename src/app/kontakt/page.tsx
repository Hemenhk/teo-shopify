"use client";

import { useAdminValues } from "@/hooks/useQueryHooks";

export default function ContactPage() {
  const { data: contactData, isError } = useAdminValues();
  console.log("email", contactData);

  if (isError) {
    return <>No Email Found</>;
  }
  return (
    <div className="container flex flex-col items-center justify-center my-24">
      <h2 className="text-2xl uppercase tracking-wider pb-16">Contact Us</h2>
      <div className="space-y-5 text-sm tracking-wide">
        <p >
          If you have any questions, comments, or concerns, feel free to reach
          out to us. We would love to hear from you! Please expect all emails
          below to respond within 24-48 hours during business hours. Please
          expect a delayed response on weekends.
        </p>
        <p>General Inquiries: {contactData?.email}</p>
        <div>
          <h3>Address:</h3>
          <p>{contactData?.address}</p>
        </div>
      </div>
    </div>
  );
}
