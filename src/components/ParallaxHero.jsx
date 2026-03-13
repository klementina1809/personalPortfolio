import { useEffect, useRef } from "react";
import { tagDefs } from "./parallaxTags";

// Simple seeded LCG random — same values on every render
function makeRng(seed) {
	let s = seed >>> 0;
	return () => {
		s = Math.imul(s, 1664525) + 1013904223;
		return (s >>> 0) / 0xffffffff;
	};
}


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
	const topMax = 66;
	const colW = leftMax / cols;
	const rowH = topMax / rows;

	return defs.map((def, i) => {
		if (def.forceLeft !== undefined && def.forceTop !== undefined) {
			rng();
			rng(); // consume RNG slots to keep others stable
			return { ...def, left: def.forceLeft, top: def.forceTop };
		}
		const cell = cells[i % cells.length];
		const left = parseFloat(
			(cell.c * colW + rng() * colW * 0.85 + 1).toFixed(1),
		);
		const top = parseFloat((cell.r * rowH + rng() * rowH * 0.8 + 2).toFixed(1));
		return { ...def, left, top };
	});
}

const techTags = scatterOnGrid(tagDefs, 7, 8, 7331);

function ParallaxHero() {
	const sceneRef = useRef(null);

	useEffect(() => {
		if (!sceneRef.current || typeof window === "undefined") return;
		if (window.innerWidth <= 991) return;

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

		const spans = sceneRef.current.querySelectorAll(".tech-tag");

		spans.forEach((span) => {
			span.addEventListener("mouseenter", () => {
				span.style.filter = "blur(0px)";
				span.style.opacity = "1";
				span.style.transform = "scale(1.18)";
				span.style.background = "rgba(40,135,173,0.1)";
				span.style.borderColor = "rgba(40,135,173,0.45)";
				span.style.color = "#2887ad";
				span.style.boxShadow =
					"0 0 0 1px rgba(40,135,173,0.2), 0 12px 32px rgba(40,135,173,0.18)";
			});
			span.addEventListener("mouseleave", () => {
				span.style.filter = "blur(2.5px)";
				span.style.opacity = "0.75";
				span.style.transform = "";
				span.style.background = "";
				span.style.borderColor = "";
				span.style.color = "";
				span.style.boxShadow = "";
			});
		});

		if (gsap && sceneRef.current) {
			// entrance: spans fade in blurry, parallax owns li transforms
			gsap.fromTo(
				spans,
				{ opacity: 0, filter: "blur(10px)" },
				{
					opacity: 0.75,
					filter: "blur(2.5px)",
					duration: 0.7,
					ease: "power2.out",
					stagger: 0.07,
					delay: 0.2,
					onComplete() {
						gsap.set(spans, { clearProps: "opacity,filter" });
					},
				},
			);
		}

		return () => {
			if (parallaxInstance && typeof parallaxInstance.destroy === "function") {
				parallaxInstance.destroy();
			}
		};
	}, []);

	return (
		<>
			{/* Desktop: parallax, hidden on ≤991px */}
			<div className="header-hero-bg wf_int-hero_section">
				<ul id="header-scene" ref={sceneRef}>
					{techTags.map((tag) => (
						<li
							key={tag.label}
							className="tech-tag-layer"
							data-depth={tag.depth}
							style={{
								left: `${tag.left}%`,
								top: `${tag.top}%`,
							}}
						>
							<span className="tech-tag">{tag.label}</span>
						</li>
					))}
				</ul>
			</div>

			{/* Mobile: static flex wrap, shown only on ≤991px */}
			<div className="wf_int-hero_section-mobile">
				<div className="wf_hero-tags_mobile">
					{techTags.map((tag) => (
						<span key={tag.label} className="tech-tag">
							{tag.label}
						</span>
					))}
				</div>
			</div>
		</>
	);
}

export default ParallaxHero;
