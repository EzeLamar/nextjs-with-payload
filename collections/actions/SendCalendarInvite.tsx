import { BasePayload } from "payload";

type Props = {
  payload: BasePayload;
  toEmail: string;
};

export const sendCalendarInvite = async ({ toEmail, payload }: Props) => {
  // Create .ICS calendar event
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Your Company//NONSGML v1.0//EN
METHOD:REQUEST
BEGIN:VEVENT
UID:${Date.now()}@yourdomain.com
DTSTAMP:${new Date().toISOString().replace(/-|:|\.\d+/g, "")}
DTSTART:20250321T183000Z
DTEND:20250321T190000Z
SUMMARY:Juan and Ezequiel Meeting
DESCRIPTION:Let's discuss our next steps.
LOCATION:Online
ORGANIZER;CN=Ezequiel Lamarque:MAILTO:ezequiel@example.com
ATTENDEE;RSVP=TRUE;CN=Juan:MAILTO:juan@example.com
END:VEVENT
END:VCALENDAR`;

  // Send Email via Payload's Email Service
  await payload.sendEmail({
    to: toEmail,
    subject: "Meeting Invitation: Juan and Ezequiel",
    text: `You're invited to a meeting on March 21, 2025. Please check your calendar.`,
    html: `<p>You're invited to a meeting:</p>
           <ul>
             <li><strong>Date:</strong> March 21, 2025</li>
             <li><strong>Time:</strong> 15:30 - 16:00 (ART)</li>
             <li><strong>Location:</strong> Online</li>
           </ul>
           <p>Click below to respond:</p>
           <ul>
             <li><a href="#">✅ Accept</a></li>
             <li><a href="#">🤔 Maybe</a></li>
             <li><a href="#">❌ Decline</a></li>
           </ul>`,
    attachments: [
      {
        filename: "invite.ics",
        content: icsContent,
        contentType: "text/calendar",
      },
    ],
  });

  console.log("Calendar invite sent! ✅");
};
