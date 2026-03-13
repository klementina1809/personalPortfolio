import { useEffect, useRef } from "react";

const techTags = [
	// 1 row
	{ label: "HTML5", depth: 0.6, left: 4, top: 4 },
	{ label: "CSS3", depth: 0.9, left: 22, top: 4 },
	{ label: "JavaScript", depth: 0.7, left: 42, top: 4 },
	{ label: "TypeScript", depth: 1.2, left: 64, top: 4 },
	{ label: "Vite", depth: 0.8, left: 82, top: 4 },

	// 2 row
	{ label: "React", depth: 1.1, left: 8, top: 20 },
	{ label: "Next.js", depth: 0.9, left: 28, top: 20 },
	{ label: "React Router DOM", depth: 1.4, left: 50, top: 20 },
	{ label: "Zustand", depth: 0.7, left: 74, top: 20 },

	// 3 row
	{ label: "TanStack React Query", depth: 1.3, left: 6, top: 36 },
	{ label: "React Hook Form", depth: 0.8, left: 32, top: 36 },
	{ label: "Lodash", depth: 1.0, left: 56, top: 36 },
	{ label: "Axios", depth: 0.9, left: 80, top: 36 },

	// 4 row
	{ label: "Figma", depth: 0.8, left: 14, top: 50 },
	{ label: "Canva", depth: 1.1, left: 34, top: 50 },
	{ label: "WordPress", depth: 0.7, left: 58, top: 50 },
	{ label: "Elementor", depth: 1.2, left: 80, top: 50 },

	// 5 row
	{ label: "Tailwind CSS", depth: 0.7, left: 4, top: 64 },
	{ label: "SASS", depth: 1.2, left: 24, top: 64 },
	{ label: "Bootstrap", depth: 0.8, left: 44, top: 64 },
	{ label: "Material UI (MUI)", depth: 1.4, left: 66, top: 64 },
	{ label: "Metronic", depth: 0.6, left: 86, top: 64 },

	// 6 row
	{ label: "shadcn", depth: 1.3, left: 6, top: 77 },
	{ label: "Radix UI", depth: 0.9, left: 26, top: 77 },
	{ label: "clsx", depth: 1.1, left: 46, top: 77 },
	{ label: "Swagger / OpenAPI", depth: 0.8, left: 70, top: 77 },
	{ label: "ApexCharts.js", depth: 1.2, left: 90, top: 77 },

	// 7 row
	{ label: "Postman", depth: 1.0, left: 10, top: 89 },
	{ label: "Git", depth: 0.7, left: 30, top: 89 },
	{ label: "ESLint", depth: 1.4, left: 50, top: 89 },
	{ label: "Prettier", depth: 0.9, left: 70, top: 89 },
	{ label: "Cursor / Claude Code", depth: 1.3, left: 86, top: 89 },
	{ label: "Miro", depth: 0.9, left: 40, top: 77 },
];

function ParallaxHero() {
	const sceneRef = useRef(null);

	useEffect(() => {
		if (!sceneRef.current || typeof window === "undefined") return;

		const ParallaxLib = window.Parallax;
		const gsap = window.gsap;

		let parallaxInstance;

		if (ParallaxLib) {
			parallaxInstance = new ParallaxLib(sceneRef.current, {
				relativeInput: true,
				hoverOnly: true,
				scalarX: 8,
				scalarY: 8,
				frictionX: 0.08,
				frictionY: 0.08,
			});

			if (sceneRef.current) {
				const layers = Array.from(sceneRef.current.children);
				layers.forEach((layer, index) => {
					const def = techTags[index];
					if (!def) return;
					const el = layer;
					el.style.position = "absolute";
					el.style.left = `${def.left}%`;
					el.style.top = `${def.top}%`;
				});
			}
		}

		if (gsap && sceneRef.current) {
			const tags = sceneRef.current.querySelectorAll(".tech-tag");

			gsap.set(tags, {
				opacity: 0,
				scale: 0.5,
			});

			gsap.to(tags, {
				opacity: 1,
				scale: 1,
				duration: 0.6,
				ease: "back.out(1.7)",
				stagger: 0.08,
				delay: 0.3,
			});
		}

		return () => {
			if (parallaxInstance && typeof parallaxInstance.destroy === "function") {
				parallaxInstance.destroy();
			}
		};
	}, []);

	return (
		<div className="header-hero-bg">
			<ul id="header-scene" ref={sceneRef}>
				{techTags.map((tag) => (
					<li
						key={tag.label}
						className="tech-tag"
						data-depth={tag.depth}
						style={{
							left: `${tag.left}%`,
							top: `${tag.top}%`,
						}}
					>
						{tag.label}
					</li>
				))}
			</ul>
		</div>
	);
}

export default ParallaxHero;
