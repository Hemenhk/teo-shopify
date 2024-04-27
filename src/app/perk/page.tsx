"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPerk } from "@/axios/perks-req";
import { useToast } from "@/components/ui/use-toast";
import { formValues } from "@/lib/formValues";
import { useState } from "react";

import {
  Plane,
  Earth,
  BadgePoundSterling,
  Sprout,
  Handshake,
} from "lucide-react";

const icons = [
  { icon: <Plane />, value: "plane" },
  { icon: <Earth />, value: "earth" },
  { icon: <BadgePoundSterling />, value: "sterling" },
  { icon: <Sprout />, value: "sprout" },
  { icon: <Handshake />, value: "handshake" },
];

const formSchema = z.object({
  perkImg: z.string(),
  perkTitle: z.string(),
  perkDescription: z.string(),
});

export default function PerkPage() {
  const [selectedIcon, setSelectedIcon] = useState("");
  const queryClient = useQueryClient();
  const { toast, dismiss } = useToast();

  const iconToString = (value: string) => {
    return icons.find((icon) => icon.value === value)?.value || "";
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      perkImg: "",
      perkTitle: "",
      perkDescription: "",
    },
  });

  const { mutateAsync: addPerkMutation } = useMutation({
    mutationKey: ["perks"],
    mutationFn: async (values: any) => await createPerk(values),
    onSuccess: (data) => {
      queryClient.setQueryData(["perks"], data);
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await addPerkMutation(values);
      console.log("perks", res);
      toast({
        title: "Successfully added perk",
        description: `${values.perkTitle} was added to list of perks`,
      });
      setTimeout(() => {
        dismiss();
      }, 1500);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oops! Something went wrong.",
        description: "Could not create this perk, try again.",
      });
      console.log(error);
    }
  };

  const mappedForm = formValues.map((item) => (
    <FormField
      control={form.control}
      name={item.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{item.label}</FormLabel>
          {item.type === "text" ? (
            <FormControl>
              <Input
                placeholder={item.placeholder}
                type={item.type}
                {...field}
              />
            </FormControl>
          ) : item.type === "select" ? (
            <Select
              onValueChange={(value) => {
                field.onChange(value); // Update form value
                setSelectedIcon(iconToString(value)); // Convert selected value to icon
              }}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select an icon" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {icons.map((icon, idx) => (
                  <SelectItem key={idx} value={icon.value}>
                    {icon.icon}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            ""
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  ));
  return (
    <div className="flex justify-center p-10 ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-1/4"
        >
          {mappedForm}
          <Button
            className="w-full uppercase font-light tracking-wider"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
