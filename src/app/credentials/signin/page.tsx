"use client";
import TheForm from "@/components/forms/TheForm";
import { useToast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { z } from "zod";

const formFields = [
  { name: "email", type: "email", placeholder: "Email", label: "Email" },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    label: "Password",
  },
];

const formSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(3, {
      message: "Email must be at least 3 chars",
    })
    .max(255, { message: "Email must not be more than 255 chars long" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(3, {
      message: "Password must be at least 6 chars",
    })
    .max(255, { message: "Password must not be more than 1024 chars long" }),
});

export default function SigninPage() {
  const router = useRouter();
  const { dismiss, toast } = useToast();
  const values = {
    email: "",
    password: "",
  };
  const onSumbit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      console.log("USER", res);
      if (res?.status === 200) {
        setTimeout(() => {
          router.push("/admin");
        }, 2000);
        toast({
          title: "Success",
          description: `Successfully signed in with email: ${values.email}`,
        });
      } else if (
        res?.error === "No admin was found" ||
        res?.error === "Password was incorrect!"
      ) {
        toast({
          variant: "destructive",
          title: `${res.error}`,
        });
      }

      setTimeout(() => {
        dismiss();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TheForm
      formSchema={formSchema}
      formFields={formFields}
      formTitle="Sign in"
      onSubmit={onSumbit}
      values={values}
    />
  );
}
