"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  async function onSubmit(values: FormValues) {
    setStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <section id="contact" className="py-24 max-w-2xl mx-auto text-center">
      {/* Section heading */}
      <p className="font-[family-name:var(--font-sf-mono)] text-xs text-[var(--color-teal)] mb-3 tracking-wide">
        04. What&apos;s Next?
      </p>
      <h2 className="text-4xl md:text-5xl font-semibold text-[var(--color-lightest-slate)] mb-6">
        Get In Touch
      </h2>
      <p className="text-[var(--color-slate)] text-lg leading-relaxed mb-12">
        I&apos;m currently open to new opportunities. Whether you have a question, a project in mind, or just
        want to say hi — my inbox is always open.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 text-left">
          <div className="grid md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-[family-name:var(--font-sf-mono)] text-xs text-[var(--color-slate)]">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      {...field}
                      className="bg-transparent border-[var(--color-lightest-navy)] text-[var(--color-lightest-slate)] placeholder:text-[var(--color-slate)]/50 focus:border-[var(--color-teal)] focus-visible:ring-0"
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-[family-name:var(--font-sf-mono)] text-xs text-[var(--color-slate)]">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your@email.com"
                      type="email"
                      {...field}
                      className="bg-transparent border-[var(--color-lightest-navy)] text-[var(--color-lightest-slate)] placeholder:text-[var(--color-slate)]/50 focus:border-[var(--color-teal)] focus-visible:ring-0"
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-[family-name:var(--font-sf-mono)] text-xs text-[var(--color-slate)]">
                  Subject
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="What's this about?"
                    {...field}
                    className="bg-transparent border-[var(--color-lightest-navy)] text-[var(--color-lightest-slate)] placeholder:text-[var(--color-slate)]/50 focus:border-[var(--color-teal)] focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-[family-name:var(--font-sf-mono)] text-xs text-[var(--color-slate)]">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your message..."
                    rows={6}
                    {...field}
                    className="bg-transparent border-[var(--color-lightest-navy)] text-[var(--color-lightest-slate)] placeholder:text-[var(--color-slate)]/50 focus:border-[var(--color-teal)] focus-visible:ring-0 resize-none"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <div className="flex flex-col items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "font-[family-name:var(--font-sf-mono)] text-sm border-[var(--color-teal)] text-[var(--color-teal)] bg-transparent hover:bg-[var(--color-teal)]/10 px-10 py-6 disabled:opacity-50"
              )}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="font-[family-name:var(--font-sf-mono)] text-xs text-[var(--color-teal)]">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="font-[family-name:var(--font-sf-mono)] text-xs text-red-400">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </div>
        </form>
      </Form>
    </section>
  );
}
