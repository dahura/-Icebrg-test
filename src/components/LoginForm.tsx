import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../@shadcn/components/ui/form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../@shadcn/components/ui/input";
import { Button } from "../@shadcn/components/ui/button";
import { FC } from "react";
import { useAuth } from "../auth/useAuth";

const loginFormShema = z.object({
  email: z.string().email(),
  password: z.string(),
});
type loginRequestData = z.infer<typeof loginFormShema>;

interface Props {
  onLogin: (credentials: loginRequestData) => void;
}
export const LoginForm: FC<Props> = ({ onLogin }) => {
  const { loading } = useAuth();
  const form = useForm<z.infer<typeof loginFormShema>>({
    resolver: zodResolver(loginFormShema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (credentials: loginRequestData) => {
    onLogin(credentials);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-black px-12 py-10 rounded-[24px]"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel />
              <FormControl>
                <Input placeholder="email" type="email" {...field} />
              </FormControl>
              <FormDescription>Provide your email address</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel />
              <FormControl>
                <Input
                  placeholder="password"
                  type="password"
                  {...field}
                  className="dark"
                />
              </FormControl>
              <FormDescription>Provide your password</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={loading}>
          {loading ? <div className="custom-loader" /> : "Submit"}
        </Button>
      </form>
    </Form>
  );
};
