import HeadingSection from '@/sections/heading-section';
import ProjectsSection from '@/sections/projects-section';
import AboutMeSection from '@/sections/about-me-section';
import ContactMeSection from '@/sections/contact-me-section';

export default function Home() {
	return (
		<main className="pb-8 space-y-12">
			<HeadingSection />
			<hr />
			<ProjectsSection />
			<hr />
			<AboutMeSection />
			<hr />
			<ContactMeSection />
		</main>
	);
}
