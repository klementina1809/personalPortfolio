// forceLeft / forceTop — pin tags that otherwise land behind the center photo

const TAGS_CORE_WEB = [
	{ label: "HTML5", depth: 0.6 },
	{ label: "CSS3", depth: 0.9 },
	{ label: "JavaScript", depth: 0.7 },
	{ label: "TypeScript", depth: 1.2 },
	{ label: "Vite", depth: 0.8 },
	{ label: "npm", depth: 0.6 },
];

const TAGS_FRONTEND = [
	{ label: "Frontend Development", depth: 1.0, forceLeft: 60, forceTop: 8 },
	{ label: "Responsive Design", depth: 0.8 },
	{ label: "REST API", depth: 1.1 },
	{ label: "i18n", depth: 0.8 },
];

const TAGS_REACT = [
	{ label: "React", depth: 1.1, forceLeft: 2, forceTop: 55 },
	{ label: "React Native", depth: 0.95 },
	{ label: "Next.js", depth: 0.9, forceLeft: 24.5, forceTop: 5 },
	{ label: "React Router DOM", depth: 1.4, forceLeft: 1, forceTop: 32 },
	{ label: "Zustand", depth: 0.7 },
	{ label: "TanStack React Query", depth: 1.3, forceLeft: 82.2, forceTop: 63.5 },
	{ label: "React Hook Form", depth: 0.8 },
	{ label: "Lodash", depth: 1.0 },
	{ label: "Axios", depth: 0.9, forceLeft: 14, forceTop: 17.3 },
];

const TAGS_DESIGN = [
	{ label: "Figma", depth: 0.8, forceLeft: 88.5, forceTop: 56.5 },
	{ label: "Canva", depth: 1.1, forceLeft: 78, forceTop: 12 },
	{ label: "WordPress", depth: 0.7 },
	{ label: "Elementor", depth: 1.2 },
	{ label: "Miro", depth: 0.9 },
];

const TAGS_CSS = [
	{ label: "Tailwind CSS", depth: 0.7 },
	{ label: "SASS", depth: 1.2, forceLeft: 16, forceTop: 37 },
	{ label: "Bootstrap", depth: 0.8, forceLeft: 88, forceTop: 4.2 },
	{ label: "Material UI (MUI)", depth: 1.4, forceLeft: 72, forceTop: 55 },
	{ label: "Metronic", depth: 0.6 },
	{ label: "shadcn", depth: 1.3 },
	{ label: "Radix UI", depth: 0.9, forceLeft: 89.5, forceTop: 39.5 },
	{ label: "clsx", depth: 1.1 },
];

const TAGS_CHARTS_API = [
	{ label: "ApexCharts.js", depth: 1.2 },
	{ label: "Swagger", depth: 0.8 },
	{ label: "OpenAPI", depth: 0.9 },
];

const TAGS_DEVTOOLS = [
	{ label: "Postman", depth: 1.0, forceLeft: 2, forceTop: 4.2 },
	{ label: "Git", depth: 0.7 },
	{ label: "ESLint", depth: 1.4 },
	{ label: "Prettier", depth: 0.9 },
	{ label: "Cursor", depth: 1.1 },
	{ label: "Claude Code", depth: 1.3 },
];

const TAGS_PLATFORM_DATA = [
	{ label: "Supabase", depth: 1.0, forceLeft: 68.4, forceTop: 47.2 },
	{ label: "Vercel", depth: 0.85, forceLeft: 80.5, forceTop: 20 },
	{ label: "Expo", depth: 1.15, forceLeft: 33.7, forceTop: 21.8 },
	{ label: "PostgreSQL", depth: 0.95, forceLeft: 14.9, forceTop: 49 },
	{ label: "Codex", depth: 1.25, forceLeft: 23.4, forceTop: 23.6 },
];

export const tagDefs = [
	...TAGS_CORE_WEB,
	...TAGS_FRONTEND,
	...TAGS_REACT,
	...TAGS_DESIGN,
	...TAGS_CSS,
	...TAGS_CHARTS_API,
	...TAGS_DEVTOOLS,
	...TAGS_PLATFORM_DATA,
];
