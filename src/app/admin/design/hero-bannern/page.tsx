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
    placeholder: "Hero Sub-Header",
    label: "Hero Sub-Header",
  },
  {
    name: "heroHeading",
    type: "text",
    placeholder: "Hero Header",
    label: "Hero Header",
  },
  {
    name: "heroButtonText",
    type: "text",
    placeholder: "Hero Knapp Text",
    label: "Hero Knapp Text",
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
      formTitle={"Hero Bannern"}
      onSubmit={onSubmit}
      values={adminData}
      formFields={formFields}
      formSchema={formSchema}
    />
  );
}
