"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    const data = await resend.emails.send({
      from: "İletişim Formu <onboarding@resend.dev>", // Alan adınızı doğrulayana kadar test için bu adres kullanılır
      to: ["berksysl.g@gmail.com"], // Mailin düşeceği kendi adresiniz
      replyTo: email, // Yanıtla dediğinizde formu dolduran kişiye gitmesi için
      subject: `Yeni Form Mesajı: ${name}`,
      text: `Gönderen: ${name} (${email})\n\nMesaj:\n${message}`,
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error: "Mail gönderilirken hata oluştu." };
  }
}
