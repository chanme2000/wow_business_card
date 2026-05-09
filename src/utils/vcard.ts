export interface VCardData {
  firstName: string;
  lastName: string;
  organization: string;
  title: string;
  email: string;
  phone: string;
  url: string;
}

export function generateVCard(data: VCardData): string {
  return `BEGIN:VCARD
VERSION:3.0
N:${data.lastName};${data.firstName};;;
FN:${data.firstName} ${data.lastName}
ORG:${data.organization}
TITLE:${data.title}
EMAIL;type=INTERNET;type=WORK:${data.email}
TEL;type=CELL:${data.phone}
URL:${data.url}
END:VCARD`;
}

export function downloadVCard(data: VCardData, filename: string = "contact.vcf") {
  const vcard = generateVCard(data);
  const blob = new Blob([vcard], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  
  document.body.appendChild(link);
  link.click();
  
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
