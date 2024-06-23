"use client";

import { z } from "zod";
import TheForm from "@/components/forms/TheForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePasswords } from "@/axios/adminValue-req";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";

type Props = {
  adminEmail?: string;
  oldPassword?: string;
  newPassword?: string;
};

const formSchema = z.object({
  adminEmail: z.string(),
  oldPassword: z.string(),
  newPassword: z.string(),
});

const formFields = [
  {
    name: "adminEmail",
    type: "text",
    placeholder: "Email",
    label: "Email",
  },
  {
    name: "oldPassword",
    type: "text",
    placeholder: "Gamla lösenordet",
    label: "Gamla lösenordet",
  },
  {
    name: "newPassword",
    type: "text",
    placeholder: "Nya lösenordet",
    label: "Nya lösenordet",
  },
];
export default function ChangePassword() {
  const { data: session } = useSession();
  const { toast, dismiss } = useToast();
  const queryClient = useQueryClient();

  const values = {
    adminEmail: session?.user?.email || "",
    oldPassword: "",
    newPassword: "",
  };
  const {
    mutateAsync: passwordMutation,
    isError,
    isPending,
    isSuccess,
  } = useMutation({
    mutationKey: ["password"],
    mutationFn: async (data: Props) => updatePasswords(data),
    onSuccess: (data) => {
      queryClient.setQueryData(["passwords"], data);
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await passwordMutation(values);
      toast({
        title: "Lyckades!",
        description: "Ditt lösenord ändrades",
      });
      setTimeout(() => {
        dismiss();
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TheForm
      formTitle={"Ändra lösenordet"}
      onSubmit={onSubmit}
      values={values}
      formFields={formFields}
      formSchema={formSchema}
    />
  );
}
