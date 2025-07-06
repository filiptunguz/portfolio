import HeadingSection from '@/sections/heading-section';
import ProjectsSection from '@/sections/projects-section';
import AboutMeSection from '@/sections/about-me-section';

export default function Home() {
	return (
		<main className="pb-8 space-y-12">
			<HeadingSection />
			<ProjectsSection />
			<AboutMeSection />
		</main>
	);
}
