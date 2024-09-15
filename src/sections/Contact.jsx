import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_xd7pctx",
        "template_1noni8n",
        {
          from_name: formData.name,
          to_name: "Swapnil",
          from_email: formData.email,
          to_email: "swapnil.sachan2003@gmail.com",
          message: formData.message,
        },
        "Lg2uSzEdgBd6EQpos"
      );

      toast("Message sent successfully!", {
        icon: "✅",
        style: {
          paddingLeft: "15px",
          fontSize: "16px",
          fontWeight: "500",
          borderRadius: "10px",
          background: "#222",
          color: "white",
        },
      });
    } catch (error) {
      toast("Something went wrong", {
        icon: "❌",
        style: {
          paddingLeft: "15px",
          fontSize: "16px",
          fontWeight: "500",
          borderRadius: "10px",
          background: "#222",
          color: "white",
        },
      });
    }

    setLoading(false);
  };

  return (
    <section className="c-space py-20" id="contact">
      <div className="min-h-screen relative flex items-center justify-center flex-col">
        <img
          src="assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen object-contain"
        />

        <div className="contact-container">
          <h3 className="head-text">Let's Talk</h3>

          <p className="mt-4 text-lg font-medium text-white-600">
            Whether you're looking to hire me, collaborate on a project, or just
            say hi, I'd love to hear from you.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label htmlFor="name" className="space-y-3">
              <span className="field-label">Full name</span>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>

            <label htmlFor="name" className="space-y-3">
              <span className="field-label">Email</span>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@email.com"
              />
            </label>

            <label htmlFor="name" className="space-y-3">
              <span className="field-label">Your message</span>

              <textarea
                type="text"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi! I'd like to discuss..."
                style={{ resize: "none" }}
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send message"}
              <img
                src="/assets/arrow-up.png"
                alt="send button"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;
