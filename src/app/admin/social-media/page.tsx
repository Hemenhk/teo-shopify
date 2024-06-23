"use client";
import { useAdminValueMutation, useAdminValues } from "@/hooks/useQueryHooks";

import { z } from "zod";

import TheForm from "@/components/forms/TheForm";

const formSchema = z.object({
  instagram: z.string().optional(),
  facebook: z.string().optional(),
  tiktok: z.string().optional(),
});

const formFields = [
  {
    name: "instagram",
    type: "text",
    placeholder: "Instagram Länk",
    label: "Länk till Instagram",
  },
  {
    name: "facebook",
    type: "text",
    placeholder: "Facebook Länk",
    label: "Länk till Facebook",
  },
  {
    name: "tiktok",
    type: "text",
    placeholder: "Tiktok Länk",
    label: "Länk till Tiktok",
  },
];

export default function SocialMediaPage() {
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
      formTitle={"Social Media"}
      onSubmit={onSubmit}
      values={adminData}
      formFields={formFields}
      formSchema={formSchema}
    />
  );
}
