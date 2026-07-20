"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { site } from "@/content/site";
import { careersSchema, type CareersInput } from "@/lib/schemas";
import { Field, NativeSelect, fieldInput } from "@/components/form-field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/icon";
import { Stagger } from "@/components/motion";

export function CareersClient() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareersInput>({ resolver: zodResolver(careersSchema) });

  const [highlight, setHighlight] = useState(false);

  function applyTo(title: string) {
    setValue("position", title, { shouldValidate: true });
    setHighlight(true);
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => setHighlight(false), 1600);
  }

  async function onSubmit(data: CareersInput) {
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error();
      toast.success(json.message ?? "Application received.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="flex flex-col gap-16">
      {/* Openings */}
      <div>
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-heading text-2xl font-semibold text-brand sm:text-3xl">
            Available positions
          </h2>
          <Badge variant="secondary" className="hidden sm:inline-flex">
            {site.jobs.reduce((a, j) => a + j.vacancies, 0)} open roles
          </Badge>
        </div>
        <Stagger className="grid gap-4 md:grid-cols-2">
          {site.jobs.map((job) => (
            <div
              key={job.title}
              className="flex flex-col gap-3 rounded-2xl border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-heading text-base font-semibold text-brand">
                  {job.title}
                </h3>
                <Badge className="shrink-0 bg-accent-brand/15 text-accent-brand-foreground">
                  {job.vacancies} {job.vacancies > 1 ? "openings" : "opening"}
                </Badge>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Icon name="badge" size={15} className="text-accent-brand" />
                  {job.department}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Icon name="trending_up" size={15} className="text-accent-brand" />
                  {job.level}
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="mt-1 w-fit"
                onClick={() => applyTo(job.title)}
              >
                Apply now
                <Icon name="arrow_forward" size={16} />
              </Button>
            </div>
          ))}
        </Stagger>
      </div>

      {/* Apply */}
      <div
        id="apply"
        className="scroll-mt-24 rounded-3xl border bg-secondary/30 p-7 lg:p-10"
      >
        <h2 className="mb-1 font-heading text-2xl font-semibold text-brand">
          Apply to join us
        </h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Submit your interest and our HR team will reach out if there's a fit.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" htmlFor="c-name" required error={errors.name?.message}>
              <Input id="c-name" className={fieldInput} placeholder="Your name" {...register("name")} />
            </Field>
            <Field label="Email" htmlFor="c-email" required error={errors.email?.message}>
              <Input id="c-email" type="email" className={fieldInput} placeholder="you@email.com" {...register("email")} />
            </Field>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Phone" htmlFor="c-phone" required error={errors.phone?.message}>
              <Input id="c-phone" className={fieldInput} placeholder="+60 ..." {...register("phone")} />
            </Field>
            <Field
              label="Position"
              htmlFor="c-position"
              required
              error={errors.position?.message}
              className={highlight ? "rounded-lg ring-2 ring-accent-brand ring-offset-2" : ""}
            >
              <NativeSelect id="c-position" defaultValue="" {...register("position")}>
                <option value="" disabled>
                  Select a position
                </option>
                {site.jobs.map((j) => (
                  <option key={j.title} value={j.title}>
                    {j.title}
                  </option>
                ))}
              </NativeSelect>
            </Field>
          </div>
          <Field label="Message" htmlFor="c-message" error={errors.message?.message}>
            <Textarea id="c-message" rows={4} placeholder="A short note about you (optional)..." {...register("message")} />
          </Field>
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-brand text-white hover:bg-brand/90 sm:w-fit"
          >
            {isSubmitting ? "Submitting..." : "Submit application"}
            <Icon name="send" size={18} />
          </Button>
        </form>
      </div>
    </div>
  );
}
