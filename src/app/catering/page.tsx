"use client";

import { useState, type FormEvent } from "react";
import styles from "./page.module.css";
import { supabase } from "@/lib/supabase";

export default function CateringPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [eventType, setEventType] = useState("Corporate");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const { error } = await supabase.from("catering_requests").insert({
        name,
        email,
        phone,
        event_date: eventDate || null,
        guest_count: guestCount ? Number(guestCount) : null,
        event_type: eventType,
        message,
      });

      if (error) {
        throw error;
      }

      setName("");
      setEmail("");
      setPhone("");
      setEventDate("");
      setGuestCount("");
      setEventType("Corporate");
      setMessage("");
      setSuccessMessage("Thanks! We'll get back to you soon.");
    } catch (submissionError) {
      console.error(submissionError);
      setErrorMessage(
        "Something went wrong, please try again or contact us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Rokni Food Catering</h1>
          <p className={styles.intro}>
            We provide Persian-inspired catering for events, parties, and
            special gatherings. Tell us about your event and we will follow up
            with options.
          </p>
          <p className={styles.note}>
            Placeholder content for service details, package options, and
            minimum booking requirements.
          </p>
        </div>

        {successMessage ? (
          <div className={styles.form}>
            <p className={styles.note} style={{ color: "var(--color-accent)" }}>
              {successMessage}
            </p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            {errorMessage ? (
              <p className={styles.note} style={{ color: "#b42318" }}>
                {errorMessage}
              </p>
            ) : null}

            <div className={styles.formGrid}>
              <div className={styles.formRow}>
                <label className={styles.field}>
                  Name
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Your full name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </label>

                <label className={styles.field}>
                  Email
                  <input
                    type="email"
                    className={styles.input}
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </label>
              </div>

              <div className={styles.formRow}>
                <label className={styles.field}>
                  Phone
                  <input
                    type="tel"
                    className={styles.input}
                    placeholder="(000) 000-0000"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </label>

                <label className={styles.field}>
                  Event Date
                  <input
                    type="date"
                    className={styles.input}
                    value={eventDate}
                    onChange={(event) => setEventDate(event.target.value)}
                  />
                </label>
              </div>

              <div className={styles.formRow}>
                <label className={styles.field}>
                  Guest Count
                  <input
                    type="number"
                    min={1}
                    className={styles.input}
                    placeholder="Approximate number of guests"
                    value={guestCount}
                    onChange={(event) => setGuestCount(event.target.value)}
                  />
                </label>

                <label className={styles.field}>
                  Event Type
                  <select
                    className={styles.input}
                    value={eventType}
                    onChange={(event) => setEventType(event.target.value)}
                  >
                    <option>Corporate</option>
                    <option>Wedding</option>
                    <option>Birthday</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>

              <label className={styles.field}>
                Message
                <textarea
                  rows={4}
                  className={styles.input}
                  placeholder="Tell us about your event, cuisine preferences, and timing."
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </label>

              <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
}
