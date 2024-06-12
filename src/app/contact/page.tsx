"use client";

import TheForm from "@/components/forms/TheForm";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
const formSchema = z.object({
  name: z.string(),
  email: z.string(),
  subject: z.string(),
  message: z.string(),
});

const formFields = [
  {
    name: "name",
    type: "text",
    placeholder: "Name",
    label: "Name",
  },
  {
    name: "email",
    type: "text",
    placeholder: "Email",
    label: "Email",
  },
  {
    name: "subject",
    type: "text",
    placeholder: "Subject",
    label: "Subject",
  },
  {
    name: "message",
    type: "textfield",
    placeholder: "Message",
    label: "Message",
  },
];

export default function ContactPage() {
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await adminMutation(values);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TheForm
      onSubmit={onSubmit}
      formTitle="Contact Us"
      formFields={formFields}
      formSchema={formSchema}
    />
  );
}
