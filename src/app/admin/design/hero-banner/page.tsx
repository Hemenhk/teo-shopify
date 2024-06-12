"use client";

import { useAdminValueMutation, useAdminValues } from "@/hooks/useQueryHooks";

import { z } from "zod";

import TheForm from "@/components/forms/TheForm";

const formSchema = z.object({
    heroSubHeading: z.string(),
    heroHeading: z.string(),
    heroButtonText: z.string(),
});

const formFields = [
  {
    name: "heroSubHeading",
    type: "text",
    placeholder: "Hero Sub-Heading",
    label: "Hero Sub-Heading",
  },
  {
    name: "heroHeading",
    type: "text",
    placeholder: "Hero Heading",
    label: "Hero Heading",
  },
  {
    name: "heroButtonText",
    type: "text",
    placeholder: "Hero Button Text",
    label: "Hero Button Text",
  },
];

export default function HeroPage() {
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
      formTitle={"Announcement"}
      onSubmit={onSubmit}
      values={adminData}
      formFields={formFields}
      formSchema={formSchema}
    />
  );
}
