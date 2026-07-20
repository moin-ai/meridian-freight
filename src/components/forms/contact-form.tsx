"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { contactSchema, type ContactInput } from "@/lib/schemas";
import { Field, fieldInput } from "@/components/form-field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactInput) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error();
      toast.success(json.message ?? "Message sent.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" required error={errors.name?.message}>
          <Input id="name" className={fieldInput} placeholder="Your name" {...register("name")} />
        </Field>
        <Field label="Email" htmlFor="email" required error={errors.email?.message}>
          <Input id="email" type="email" className={fieldInput} placeholder="you@company.com" {...register("email")} />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" htmlFor="phone" error={errors.phone?.message}>
          <Input id="phone" className={fieldInput} placeholder="+60 ..." {...register("phone")} />
        </Field>
        <Field label="Subject" htmlFor="subject" required error={errors.subject?.message}>
          <Input id="subject" className={fieldInput} placeholder="How can we help?" {...register("subject")} />
        </Field>
      </div>
      <Field label="Message" htmlFor="message" required error={errors.message?.message}>
        <Textarea id="message" rows={5} placeholder="Tell us about your requirements..." {...register("message")} />
      </Field>
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-brand text-white hover:bg-brand/90 sm:w-fit"
      >
        {isSubmitting ? "Sending..." : "Send message"}
        <Icon name="send" size={18} />
      </Button>
    </form>
  );
}
