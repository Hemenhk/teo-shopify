"use client";

import { useAdminValueMutation, useAdminValues } from "@/hooks/useQueryHooks";

import { z } from "zod";

import TheForm from "@/components/forms/TheForm";

const formSchema = z.object({
  footerBackgroundColor: z.string(),
});

const formFields = [
  {
    name: "footerBackgroundColor",
    type: "color",
    placeholder: "Footer Background Color",
    label: "Footer Background Color",
  },
];

export default function FooterPage() {
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
