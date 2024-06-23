"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { BsFillArrowLeftCircleFill } from "react-icons/bs";

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

import { useQuery } from "@tanstack/react-query";
import { getShopLinks } from "@/graphql/queries/shop-links";
import { useAdminValueMutation } from "@/hooks/useQueryHooks";

const FormSchema = z.object({
  featuredCollection: z.string({
    required_error: "Välj en kollektion.",
  }),
});

export default function FeaturedCollectionPage() {
  const router = useRouter();

  const goBackHandler = () => {
    router.push("/admin");
  };
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { data: collectionData } = useQuery({
    queryKey: ["shop-link"],
    queryFn: getShopLinks,
  });

  const { mutateAsync: adminMutation } = useAdminValueMutation();

  const availableCollections: any[] = collectionData?.data?.collections?.nodes;

  console.log("AC", availableCollections);

  const mappedAvailableCollections =
    availableCollections &&
    availableCollections.map((collection: any) => (
      <SelectItem key={collection.id} value={collection.id}>
        {collection.title}
      </SelectItem>
    ));

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      await adminMutation(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <div className="flex flex-col">
        <div className="flex items-center justify-between pr-5 border-b">
          <h1 className="uppercase text-xl tracking-wider pl-5 py-5">
            utvald kollektion
          </h1>
          <BsFillArrowLeftCircleFill
            size={30}
            cursor={"pointer"}
            onClick={goBackHandler}
          />
        </div>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 p-10 mx-10 md:p-10 lg:w-3/4"
        >
          <FormField
            control={form.control}
            name="featuredCollection"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Utvald Kollektion</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Välj en kollektion" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>{mappedAvailableCollections}</SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Välj</Button>
        </form>
      </div>
    </Form>
  );
}
