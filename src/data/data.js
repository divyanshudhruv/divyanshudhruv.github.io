export const navigationItemJSON = [
  {
    // --- Navigation & Metadata ---
    id: "editorial-system-european-brand", // Useful for routing
    title: "Full Editorial System For A European Appliance Brand",
    abbreviation: "EEB",
    lastUpdated: "4/23/25",
    isPrivate: true, // NDA flag
    imageSrc: "https://framerusercontent.com/images/WJ5i1R1nlykh9L4pTXBmKkrPs.svg?width=21&height=21", // Icon
    description: "I built a complete editorial system for a mid-size European home appliance brand — starting from scattered Notion docs and disconnected decks, all the way to a functioning blog and an in-house team that could actually use it.",

    // --- Dynamic Rich Content Blocks ---
    content: [
      {
        id: "block-1",
        type: "section",
        heading: "What I did",
        layout: "list", // Controls rendering style (e.g., stacked grid, bullets)
        items: [
          { type: "text", value: "Defined the brand’s editorial voice across product, support, and marketing" },
          { type: "text", value: "Set up a content calendar and an ops dashboard to manage workload" },
          { type: "text", value: "Structured a modular blog using Framer CMS" },
          { type: "text", value: "Wrote internal guidelines for writing and localization" }
        ]
      },
      {
        id: "block-2",
        type: "section",
        heading: "Why it matters",
        layout: "prose",
        items: [
          {
            type: "text",
            value: "Now, their team doesn’t just publish when someone has time — they follow a rhythm, with clarity and consistency."
          },
          {
            type: "text", // Great for styling key statements like "The blog works like a newsroom."
            value: "The blog works like a newsroom. That’s the difference."
          }
        ]
      },
      {
        id: "block-3",
        type: "media", // For images, video primitives, or links
        heading: "Medias",

        items: [
          {
            type: "image",
            src: "https://private-user-images.githubusercontent.com/71079602/571034163-2fbc6226-abb1-42b7-bf82-bd0868e39581.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkxNzk1NDksIm5iZiI6MTc3OTE3OTI0OSwicGF0aCI6Ii83MTA3OTYwMi81NzEwMzQxNjMtMmZiYzYyMjYtYWJiMS00MmI3LWJmODItYmQwODY4ZTM5NTgxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTE5VDA4MjcyOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA1OTc5NWM1MzI3ZDY0NGRmZDJhZDM5NDZjZWZmOWE3YTViMDVmNjNiYWMxMDA5NGU2YTE1M2E5MWRjODU2YWYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.6Dm7POqGqsJCIANlyLnUqVigJ42OzW5NZEuFd_u-icA",
            alt: "Editorial Operations Dashboard Interface",
            caption: "In-house operations dashboard built for tracking workload."
          },
          {
            type: "video",
            src: "https://www.youtube.com/watch?v=RDuVmE95IWQ",
            caption: "In-house operations dashboard built for tracking workload.",
            alt: "In-house operations dashboard built for tracking workload."
          },
          {
            type: "gif",
            src: "",
            alt: "In-house operations dashboard built for tracking workload.",
            caption: "In-house operations dashboard built for tracking workload."
          }
        ]
      }
    ]
  }
];