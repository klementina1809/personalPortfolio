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
	{ label: "Next.js", depth: 0.9 },
	{ label: "React Router DOM", depth: 1.4, forceLeft: 1, forceTop: 32 },
	{ label: "Zustand", depth: 0.7 },
	{ label: "TanStack React Query", depth: 1.3 },
	{ label: "React Hook Form", depth: 0.8 },
	{ label: "Lodash", depth: 1.0 },
	{ label: "Axios", depth: 0.9 },
];

const TAGS_DESIGN = [
	{ label: "Figma", depth: 0.8, forceLeft: 84, forceTop: 42 },
	{ label: "Canva", depth: 1.1, forceLeft: 78, forceTop: 12 },
	{ label: "WordPress", depth: 0.7 },
	{ label: "Elementor", depth: 1.2 },
	{ label: "Miro", depth: 0.9 },
];

const TAGS_CSS = [
	{ label: "Tailwind CSS", depth: 0.7 },
	{ label: "SASS", depth: 1.2, forceLeft: 16, forceTop: 37 },
	{ label: "Bootstrap", depth: 0.8 },
	{ label: "Material UI (MUI)", depth: 1.4, forceLeft: 72, forceTop: 55 },
	{ label: "Metronic", depth: 0.6 },
	{ label: "shadcn", depth: 1.3 },
	{ label: "Radix UI", depth: 0.9 },
	{ label: "clsx", depth: 1.1 },
];

const TAGS_CHARTS_API = [
	{ label: "ApexCharts.js", depth: 1.2 },
	{ label: "Swagger", depth: 0.8 },
	{ label: "OpenAPI", depth: 0.9 },
];

const TAGS_DEVTOOLS = [
	{ label: "Postman", depth: 1.0 },
	{ label: "Git", depth: 0.7 },
	{ label: "ESLint", depth: 1.4 },
	{ label: "Prettier", depth: 0.9 },
	{ label: "Cursor", depth: 1.1 },
	{ label: "Claude Code", depth: 1.3 },
];

export const tagDefs = [
	...TAGS_CORE_WEB,
	...TAGS_FRONTEND,
	...TAGS_REACT,
	...TAGS_DESIGN,
	...TAGS_CSS,
	...TAGS_CHARTS_API,
	...TAGS_DEVTOOLS,
];
