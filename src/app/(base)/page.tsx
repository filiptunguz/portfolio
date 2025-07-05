import HeadingSection from '@/sections/heading-section';
import ProjectsSection from '@/sections/projects-section';

export default function Home() {
	return (
		<main className="pb-8 space-y-8">
			<HeadingSection />
			<ProjectsSection />
		</main>
	);
}
