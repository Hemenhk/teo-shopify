"use client";

import { useAdminValueMutation, useAdminValues } from "@/hooks/useQueryHooks";

import { z } from "zod";

import TheForm from "@/components/forms/TheForm";

const formSchema = z.object({
  announcementColor: z.string(),
  announcementText: z.string(),
});

const formFields = [
  {
    name: "announcementText",
    type: "text",
    placeholder: "Annonceringstexten",
    label: "Annonceringstexten",
  },
  {
    name: "announcementColor",
    type: "color",
    placeholder: "Annonceringsfärgen",
    label: "Annonceringsfärgen",
  },
];

export default function AnnouncementPage() {
  const { data: adminData } = useAdminValues();
  

  const { mutateAsync: adminMutation } = useAdminValueMutation();

  
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
     await adminMutation(values);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TheForm
      formTitle={"Annoncering"}
      onSubmit={onSubmit}
      values={adminData}
      formFields={formFields}
      formSchema={formSchema}
    />
  );
}
