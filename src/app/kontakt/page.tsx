"use client";

import { useAdminValues } from "@/hooks/useQueryHooks";

export default function ContactPage() {
  const { data: contactData, isError } = useAdminValues();
  console.log("email", contactData);

  if (isError) {
    return <>Ingen Email Hittades</>;
  }
  return (
    <div className="container flex flex-col items-center justify-center my-24">
      <h2 className="text-2xl uppercase tracking-wider pb-16">Contact Us</h2>
      <div className="space-y-5 text-sm tracking-wide">
        <p>
          Om du har några frågor, kommentarer eller funderingar är du välkommen
          att höra av dig ut till oss. Vi vill gärna höra från dig! Vänligen
          förvänta dig att alla svar sker inom 24-48
          timmar under kontorstid. Ett senare svar kan förekomma på helger.
        </p>
        <p>Generella Frågor: {contactData?.email}</p>
        <div>
          <h3>Adress:</h3>
          <p>{contactData?.address}</p>
        </div>
      </div>
    </div>
  );
}
