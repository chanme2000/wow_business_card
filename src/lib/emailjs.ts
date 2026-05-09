import emailjs from '@emailjs/browser';

export interface EmailData {
  name: string;
  email: string;
  type: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    // 환경 변수 설정
    // VITE_EMAILJS_SERVICE_ID
    // VITE_EMAILJS_TEMPLATE_ID
    // VITE_EMAILJS_PUBLIC_KEY
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log("EmailJS Keys Loaded:", { 
      serviceId: !!serviceId, 
      templateId: !!templateId, 
      publicKey: !!publicKey 
    });

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS credentials are not set. Check your .env file.");
      // 테스트를 위한 더미 성공 반환
      return Promise.resolve({ status: 200, text: 'OK' });
    }

    const templateParams = {
      from_name: data.name,
      reply_to: data.email,
      inquiry_type: data.type,
      message: data.message,
    };

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    return response;
  } catch (error: any) {
    console.error("Failed to send email:", error?.text || error);
    throw error;
  }
};
