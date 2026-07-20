"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { site } from "@/content/site";
import { quoteSchema, type QuoteInput } from "@/lib/schemas";
import { Field, NativeSelect, fieldInput } from "@/components/form-field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

const MODES = [
  { value: "Sea", icon: "directions_boat" },
  { value: "Air", icon: "flight" },
  { value: "Land", icon: "local_shipping" },
] as const;

export function QuoteForm() {
  const [done, setDone] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { mode: "Sea" },
  });

  const mode = watch("mode");

  async function onSubmit(data: QuoteInput) {
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error();
      toast.success(json.message ?? "Quote request received.");
      setDone(json.reference ?? "AP-XXXX");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border bg-white p-10 text-center shadow-xl">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-brand/15 text-accent-brand">
          <Icon name="check_circle" size={40} />
        </span>
        <h3 className="font-heading text-2xl font-semibold text-brand">
          Request received
        </h3>
        <p className="max-w-md text-muted-foreground">
          Thank you. Your reference is{" "}
          <span className="font-semibold text-brand">{done}</span>. Our team will
          respond within one business day.
        </p>
        <Button onClick={() => setDone(null)} variant="outline">
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 rounded-3xl border bg-white p-7 shadow-xl lg:p-9"
      noValidate
    >
      {/* Mode */}
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-foreground">
          Transport mode<span className="text-accent-brand">*</span>
        </p>
        <div className="grid grid-cols-3 gap-3">
          {MODES.map((m) => (
            <button
              type="button"
              key={m.value}
              onClick={() => setValue("mode", m.value)}
              className={cn(
                "flex flex-col items-center gap-1.5 rounded-xl border p-4 transition-all",
                mode === m.value
                  ? "border-accent-brand bg-accent-brand/10 text-brand shadow-sm"
                  : "border-input text-muted-foreground hover:border-accent-brand/40",
              )}
            >
              <Icon name={m.icon} size={26} className={mode === m.value ? "text-accent-brand" : ""} />
              <span className="text-sm font-medium">{m.value}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Service" htmlFor="serviceType" required error={errors.serviceType?.message}>
          <NativeSelect id="serviceType" defaultValue="" {...register("serviceType")}>
            <option value="" disabled>
              Select a service
            </option>
            {site.quote.serviceTypes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </NativeSelect>
        </Field>
        <Field label="Cargo type" htmlFor="cargoType" required error={errors.cargoType?.message}>
          <NativeSelect id="cargoType" defaultValue="" {...register("cargoType")}>
            <option value="" disabled>
              Select cargo type
            </option>
            {site.quote.cargoTypes.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </NativeSelect>
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Origin" htmlFor="origin" required error={errors.origin?.message}>
          <Input id="origin" className={fieldInput} placeholder="City / Port of origin" {...register("origin")} />
        </Field>
        <Field label="Destination" htmlFor="destination" required error={errors.destination?.message}>
          <Input id="destination" className={fieldInput} placeholder="City / Port of destination" {...register("destination")} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Cargo ready date" htmlFor="readyDate" error={errors.readyDate?.message}>
          <Input id="readyDate" type="date" className={fieldInput} {...register("readyDate")} />
        </Field>
        <Field label="Company" htmlFor="company" error={errors.company?.message}>
          <Input id="company" className={fieldInput} placeholder="Company name" {...register("company")} />
        </Field>
      </div>

      <div className="h-px bg-border" />

      <div className="grid gap-5 sm:grid-cols-3">
        <Field label="Name" htmlFor="name" required error={errors.name?.message}>
          <Input id="name" className={fieldInput} placeholder="Your name" {...register("name")} />
        </Field>
        <Field label="Email" htmlFor="email" required error={errors.email?.message}>
          <Input id="email" type="email" className={fieldInput} placeholder="you@company.com" {...register("email")} />
        </Field>
        <Field label="Phone" htmlFor="phone" required error={errors.phone?.message}>
          <Input id="phone" className={fieldInput} placeholder="+60 ..." {...register("phone")} />
        </Field>
      </div>

      <Field label="Additional details" htmlFor="details" error={errors.details?.message}>
        <Textarea id="details" rows={4} placeholder="Dimensions, weight, special handling, Incoterms..." {...register("details")} />
      </Field>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-brand text-white hover:bg-brand/90"
      >
        {isSubmitting ? "Submitting..." : "Request quote"}
        <Icon name="arrow_forward" size={18} />
      </Button>
    </form>
  );
}
