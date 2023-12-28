"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    job: "",
  });

  const signatureHTML = `
    <div style="max-width: 470px; background-color: white; font-weight: 600; font-family: Arial, Helvetica, sans-serif;">
      <div style="display: inline-block; width: 180px; padding: 5px 0">
        <img src="https://signature-generator-hazel.vercel.app/logo.gif" alt="logo" style="width: 100%;" />
      </div>
      <div style="display: inline-block; width: 120px; vertical-align: top; padding-top: 30px;">
        <p style="font-size: 0.9rem; margin: 0;">${
          formData.name ? formData.name : "Name"
        }</p>
        <p style="font-size: 0.6rem; margin: 0;">${
          formData.job ? formData.job : "Job"
        }</p>
        <p style="font-size: 0.6rem; margin: 0;">${
          formData.phone ? formData.phone : "Phone"
        }</p>
        <p style="display: flex; column-gap: 0.3rem; margin: 0.3rem 0;">
          <a href="#">
            <img src="https://signature-generator-hazel.vercel.app/logo-1.jpg" style="width:20px" />
          </a>
          <a href="#">
            <img src="https://signature-generator-hazel.vercel.app/logo-2.jpg" style="width:20px" />
          </a>
          <a href="#">
            <img src="https://signature-generator-hazel.vercel.app/logo-3.jpg" style="width:20px" />
          </a>
        </p>
      </div>
      <div style="width: 450px">
        <img src="https://signature-generator-hazel.vercel.app/logos.png" style="width: 100%" />
      </div>
    </div>
  `;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <main className={styles.main}>
      <h2>Signature generator</h2>
      <div className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          className={styles.input}
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="job" className={styles.label}>
          Job
        </label>
        <input
          type="text"
          name="job"
          className={styles.input}
          value={formData.job}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="phone" className={styles.label}>
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          className={styles.input}
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className={styles.signatureContainer}>
        <div
          className={styles.signatureHTML}
          dangerouslySetInnerHTML={{ __html: signatureHTML }}
        ></div>
      </div>
      <p>
        * Subraya el contenido completo de la caja blanca para copiar la firma
      </p>
    </main>
  );
}
