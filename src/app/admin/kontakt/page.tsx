"use client";

import { useAdminValueMutation, useAdminValues } from "@/hooks/useQueryHooks";

import { z } from "zod";

import TheForm from "@/components/forms/TheForm";

const formSchema = z.object({
  email: z.string(),
  address: z.string(),
});

const formFields = [
  {
    name: "email",
    type: "text",
    placeholder: "Kontakt Email",
    label: "Kontakt Email",
  },
  {
    name: "address",
    type: "text",
    placeholder: "Adress",
    label: "Adress",
  },
];

export default function EmailPage() {
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
      formTitle={"Kontakt"}
      onSubmit={onSubmit}
      values={adminData}
      formFields={formFields}
      formSchema={formSchema}
    />
  );
}
