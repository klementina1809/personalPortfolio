import { useEffect, useRef } from "react";

// Simple seeded LCG random — same values on every render
function makeRng(seed) {
	let s = seed >>> 0;
	return () => {
		s = Math.imul(s, 1664525) + 1013904223;
		return (s >>> 0) / 0xffffffff;
	};
}

const tagDefs = [
	{ label: "HTML5", depth: 0.6 },
	{ label: "CSS3", depth: 0.9 },
	{ label: "JavaScript", depth: 0.7 },
	{ label: "TypeScript", depth: 1.2 },
	{ label: "Vite", depth: 0.7 },
	{ label: "React", depth: 1.1 },
	{ label: "Next.js", depth: 0.9 },
	{ label: "React Router DOM", depth: 1.4 },
	{ label: "Zustand", depth: 0.7 },
	{ label: "TanStack React Query", depth: 1.3 },
	{ label: "React Hook Form", depth: 0.8 },
	{ label: "Lodash", depth: 1.0 },
	{ label: "Axios", depth: 0.9 },
	{ label: "Figma", depth: 0.8 },
	{ label: "Canva", depth: 1.1 },
	{ label: "WordPress", depth: 0.7 },
	{ label: "Elementor", depth: 1.2 },
	{ label: "Miro", depth: 0.9 },
	{ label: "Tailwind CSS", depth: 0.7 },
	{ label: "SASS", depth: 1.2 },
	{ label: "Bootstrap", depth: 0.8 },
	{ label: "Material UI (MUI)", depth: 1.4 },
	{ label: "Metronic", depth: 0.6 },
	{ label: "shadcn", depth: 1.3 },
	{ label: "Radix UI", depth: 0.9 },
	{ label: "clsx", depth: 1.1 },
	{ label: "Swagger / OpenAPI", depth: 0.8 },
	{ label: "ApexCharts.js", depth: 1.2 },
	{ label: "Postman", depth: 1.0 },
	{ label: "Git", depth: 0.7 },
	{ label: "ESLint", depth: 1.4 },
	{ label: "Prettier", depth: 0.9 },
	{ label: "Cursor / Claude Code", depth: 1.3 },
];

// Grid-scatter: divide space into cols×rows cells, place one tag per cell
// with random jitter inside. Guarantees full coverage, no clustering.
function scatterOnGrid(defs, cols, rows, seed) {
	const rng = makeRng(seed);
	const cells = [];
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			cells.push({ c, r });
		}
	}
	// Fisher-Yates shuffle
	for (let i = cells.length - 1; i > 0; i--) {
		const j = Math.floor(rng() * (i + 1));
		[cells[i], cells[j]] = [cells[j], cells[i]];
	}

	const leftMax = 96;
	const topMax = 67;
	const colW = leftMax / cols;
	const rowH = topMax / rows;

	return defs.map((def, i) => {
		const cell = cells[i % cells.length];
		const left = parseFloat(
			(cell.c * colW + rng() * colW * 0.85 + 1).toFixed(1),
		);
		const top = parseFloat((cell.r * rowH + rng() * rowH * 0.8 + 2).toFixed(1));
		return { ...def, left, top };
	});
}

const techTags = scatterOnGrid(tagDefs, 6, 6, 7331);

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
					layer.style.position = "absolute";
					layer.style.left = `${def.left}%`;
					layer.style.top = `${def.top}%`;
				});
			}
		}

		if (gsap && sceneRef.current) {
			const tags = sceneRef.current.querySelectorAll(".tech-tag");

			gsap.set(tags, { opacity: 0, scale: 0.5 });

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
