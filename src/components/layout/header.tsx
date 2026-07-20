"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const services = site.services;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="px-3 pt-3 sm:px-5 sm:pt-4">
        <nav
          className={cn(
            "mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-1 rounded-full border py-2 pl-4 pr-2 backdrop-blur-md transition-all duration-300",
            scrolled
              ? "border-black/5 bg-white/90 shadow-xl shadow-black/[0.07]"
              : "border-black/5 bg-white/75 shadow-lg shadow-black/[0.04]",
          )}
        >
          <Link href="/" className="flex items-center gap-2" aria-label={site.company.name}>
            <Image
              src={site.company.logo}
              alt={`${site.company.name} logo`}
              width={30}
              height={40}
              className="h-7 w-auto"
              priority
            />
            <span className="font-heading text-[15px] font-semibold tracking-tight text-brand">
              {site.company.name}
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {site.nav.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              if (link.href === "/what-we-do") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                        active
                          ? "bg-secondary text-brand"
                          : "text-foreground/70 hover:bg-secondary hover:text-brand",
                      )}
                    >
                      {link.label}
                      <Icon
                        name="expand_more"
                        size={16}
                        className={cn(
                          "text-muted-foreground transition-transform",
                          servicesOpen && "rotate-180",
                        )}
                      />
                    </Link>
                    <div
                      className={cn(
                        "absolute left-1/2 top-full z-50 w-[620px] -translate-x-1/2 pt-3 transition-all",
                        servicesOpen
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-1 opacity-0",
                      )}
                    >
                      <div className="grid grid-cols-2 gap-1 rounded-3xl border bg-white p-3 shadow-2xl">
                        {(["Logistics", "Group"] as const).map((grp) => (
                          <div key={grp} className="p-2">
                            <p className="mb-1 px-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                              {grp}
                            </p>
                            <div className="flex flex-col">
                              {services
                                .filter((s) => s.group === grp)
                                .slice(0, 9)
                                .map((s) => (
                                  <Link
                                    key={s.slug}
                                    href={`/services/${s.slug}`}
                                    className="flex items-center gap-2.5 rounded-xl px-2 py-1.5 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-brand"
                                  >
                                    <Icon name={s.icon} size={18} className="text-accent-brand" />
                                    {s.title}
                                  </Link>
                                ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-secondary text-brand"
                      : "text-foreground/70 hover:bg-secondary hover:text-brand",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-1.5">
            <Link
              href="/track"
              className="hidden items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-secondary hover:text-brand lg:flex"
            >
              <Icon name="local_shipping" size={18} />
              Track
            </Link>
            <Button
              render={<Link href="/get-a-quote" />}
              className="hidden h-10 rounded-full bg-brand px-5 text-white hover:bg-brand/90 sm:inline-flex"
            >
              Get a Quote
            </Button>

            {/* Mobile */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Open menu"
                    className="h-10 w-10 rounded-full hover:bg-secondary lg:hidden"
                  />
                }
              >
                <Icon name="menu" />
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm overflow-y-auto">
                <SheetHeader>
                  <SheetTitle className="text-left text-brand">
                    {site.company.name}
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1 px-4 pb-6">
                  {site.nav.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-secondary"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="my-2 h-px bg-border" />
                  <p className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Services
                  </p>
                  <div className="grid grid-cols-2 gap-1">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground/75 hover:bg-secondary"
                      >
                        <Icon name={s.icon} size={18} className="text-accent-brand" />
                        <span className="truncate">{s.title}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 flex flex-col gap-2">
                    <Button render={<Link href="/track" />} variant="outline" className="rounded-full">
                      <Icon name="local_shipping" size={18} />
                      Track Shipment
                    </Button>
                    <Button
                      render={<Link href="/get-a-quote" />}
                      className="rounded-full bg-brand text-white hover:bg-brand/90"
                    >
                      Get a Quote
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
