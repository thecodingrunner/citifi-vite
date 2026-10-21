import React, { useEffect, useRef, useState } from "react";
import { IoMdMail } from "react-icons/io";
import { ImCross } from "react-icons/im";
import "./contact.css";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

let emailjsPromise;
const loadEmailJs = () => {
  emailjsPromise ??= import("@emailjs/browser").then((m) => m.default);
  return emailjsPromise;
};

const Contact = () => {
  const dialogRef = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const open = () => {
    loadEmailJs();
    setStatus("idle");
    dialogRef.current?.showModal();
  };

  const close = () => dialogRef.current?.close();

  const onDialogClick = (e) => {
    if (e.target === dialogRef.current) close();
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const formEl = formRef.current;

    // Honeypot: bots fill hidden fields, people don't
    if (formEl.company.value) return;

    setStatus("sending");
    try {
      const emailjs = await loadEmailJs();
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formEl, { publicKey: PUBLIC_KEY });
      formEl.reset();
      setStatus("sent");
    } catch (err) {
      console.error("EmailJS failed:", err);
      setStatus("error");
    }
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    const onClose = () => setStatus("idle");
    dialog?.addEventListener("close", onClose);
    return () => dialog?.removeEventListener("close", onClose);
  }, []);

  return (
    <>
      <button type="button" className="contact-float" onClick={open}>
        <span>Contact us</span>
        <IoMdMail size={24} aria-hidden="true" />
      </button>

      <dialog
        ref={dialogRef}
        className="contact-dialog"
        aria-labelledby="contact-title"
        onClick={onDialogClick}
      >
        <div className="contact-panel">
          <button type="button" className="contact-close" onClick={close} aria-label="Close">
            <ImCross size={24} aria-hidden="true" />
          </button>

          <h2 id="contact-title">
            Contact <span className="highlight">us</span>
          </h2>

          {status === "sent" ? (
            <div className="contact-done" role="status">
              <p>Thanks — your message has been sent. We’ll be in touch soon.</p>
              <button type="button" className="contact-submit" onClick={close}>
                Close
              </button>
            </div>
          ) : (
            <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
              <label>
                Email
                <input type="email" name="email" required autoComplete="email" placeholder="you@company.com" />
              </label>

              <label>
                Name
                <input type="text" name="name" required autoComplete="name" placeholder="Your name" />
              </label>

              <label>
                Message
                <textarea name="message" required rows="3" placeholder="Write your message here" />
              </label>

              <input type="text" name="company" tabIndex="-1" autoComplete="off" className="contact-honeypot" aria-hidden="true" />

              {status === "error" && (
                <p className="contact-error" role="alert">
                  Sorry, that didn’t send. Please try again, or email us directly.
                </p>
              )}

              <button type="submit" className="contact-submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Submit"}
              </button>
            </form>
          )}
        </div>
      </dialog>
    </>
  )
}

export default Contact;