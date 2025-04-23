import React from "react";
import ReactMarkdown from "react-markdown";

const blogPosts = [
  {
    title: "Initial Brainstorming",
    date: "2025-04-12",
    content: `
# First Post

I'm starting to sketch out the idea for this app. It helps people plan meals and cook healthy using Michael Pollan's food rules.

Here's an early whiteboard sketch:

![Whiteboard Sketch](https://i.imgur.com/your-image-id.jpg)

I’m thinking of starting with a recipe search feature first.
`
  },
  {
    title: "Prototype Screenshots",
    date: "2025-04-14",
    content: `
## Figma Screenshots

Here's what the onboarding flow looks like now:

![Figma Screenshot](https://i.imgur.com/your-second-image-id.jpg)

Added a simple three-step onboarding to explain the value prop.
`
  }
];

export default function BlogPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-8">Project Blog</h1>
      {blogPosts.map((post, idx) => (
        <div key={idx} className="mb-12 border-b pb-6">
          <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
          <p className="text-gray-500 text-sm mb-4">{post.date}</p>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
}
