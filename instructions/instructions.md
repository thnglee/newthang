# Product Requirements Document (PRD)  
### Interactive CV Website for Content Creator Role

---

## 1. Project Overview

You are building a single-page **interactive CV website** to apply for a **Content Creator** position. The goal is to highlight your **experience**, **skills**, and **contact information** through engaging multimedia and clear, modern design. The website must be responsive, easy to navigate, and professional.

---

## 2. Tech Stack

- **Next.js 14** – For app structure and routing  
- **Tailwind CSS** – For utility-first styling  
- **shadcn/ui** – For consistent, modern UI components  
- **Lucide Icons** – For simple, clean iconography  
- **TypeScript** – For type-safe development

---

## 3. Target Audience

- Recruiters and hiring managers looking for a creative, professional content creator  
- Potential collaborators or clients  
- Visitors interested in your portfolio and media work

---

## 4. File Structure

```
/my-cv-website
│
├── app/
│   └── page.tsx                 # Main single-page app
│
├── components/
│   ├── Profile.tsx              # Profile image + intro
│   ├── Experience.tsx           # Past jobs with media embeds
│   ├── AdditionalSkills.tsx     # List of key skills
│   ├── Contact.tsx              # Contact buttons & info
│   └── Section.tsx              # Reusable section layout wrapper (optional)
│
├── public/
│   └── profile.jpg              # Your profile image
│
├── styles/
│   └── globals.css              # Tailwind base styles
│
├── tailwind.config.ts
├── shadcn.json
├── tsconfig.json
├── package.json
└── next.config.js
```

---

## 5. Features & Section Breakdown

### 5.1 Profile Section (Profile.tsx)

**Purpose**: Introduce yourself in a visually appealing, personal way.

- Display your **profile image** (`/public/profile.jpg`)
- A short **intro text** (3–5 lines) that summarizes your professional background and interests in content creation
- Layout: side-by-side on desktop, stacked on mobile

---

### 5.2 Experience Section (Experience.tsx)

**Purpose**: Showcase your professional journey with rich, media-enhanced content.

#### 1. **Content Planner – Bảo tàng dân tộc học Việt Nam**
- Short role description
- **Embedded Facebook post** showcasing work at the museum

#### 2. **Event Coordinator – Vietnam Tech Impact Summit 2024**
- Brief overview of event coordination responsibilities
- **2 images** (placeholder until added)
- **Button** linking to the event website

#### 3. **Content Creator – Giấy trắng & Mực đen**
- Description of your creative process, themes, or output
- **Embedded TikTok videos**
- **Embedded Instagram content or profiles**

#### 4. **Social Media – Vietmentor**
- Description of your role managing Vietmentor's social presence
- **4 images** (to be added)
- **Buttons** linking to Vietmentor's social media platforms (Facebook, Instagram, etc.)

---

### 5.3 Additional Skills Section (AdditionalSkills.tsx)

**Purpose**: Highlight relevant abilities outside of formal job roles.

**Skills to Display**:
- Design and video editing (e.g., basic use of Adobe Premiere, Canva, etc.)
- Social media platform administration
- Content creation and campaign planning

Present this list using styled text, badges, or icon-labeled cards using shadcn/ui and Tailwind CSS. Ensure it's visually clean and easy to scan.

---

### 5.4 Contact Section (Contact.tsx)

**Purpose**: Let potential employers or collaborators reach out quickly.

Includes:
- **Facebook button** – Opens your profile or page  
- **Instagram button** – Links to your account  
- **Phone number** – Click-to-call enabled  
- **Email** – `mailto:` link for quick email access  

Use Lucide icons and shadcn buttons for a cohesive, professional look.

---

## 6. Layout & UI Requirements

- **Single-page layout**, with smooth scroll to sections
- Use a consistent **Section** wrapper component if needed, to ensure uniform spacing and padding
- Clean, minimalist design with good whitespace
- Color palette and typography should feel personal but professional
- All components must be responsive (mobile, tablet, desktop)

---

## 7. Performance & Accessibility

- Optimize all images (consider WebP format)
- Use **lazy loading** for media embeds
- Ensure **accessible color contrasts**, keyboard navigation, and semantic HTML
- **SEO-friendly** structure using Next.js head metadata (title, description, og:image, etc.)

---

## 8. Development Milestones

| Phase | Deliverables |
|-------|--------------|
| 1. Setup | Project scaffold, global styles, base layout |
| 2. Profile | Image + intro text layout |
| 3. Experience | Add each job with media embeds and links |
| 4. Additional Skills | Skill listing section |
| 5. Contact | Social/contact buttons, phone/email |
| 6. Final QA | Responsiveness, performance, accessibility, polish |

---

## 9. Acceptance Criteria

- All 4 sections (Profile, Experience, Additional Skills, Contact) are complete
- All images, embeds, and links render correctly
- The design is mobile-responsive and visually consistent
- No broken links, loading delays, or unstyled components
- Metadata is present for SEO and social sharing