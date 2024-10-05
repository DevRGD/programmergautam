"use client";
import Section from "./Section";
import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return <Section title="Contact" id={"contact"} Card={ContactForm} classes="flex justify-center item-center" />;
}
