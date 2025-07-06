import Narrower from '@/components/narrower';
import { LuExternalLink } from 'react-icons/lu';

export default function AboutMeSection() {
	return (
		<section>
			<Narrower className="space-y-4">
				<h2>About Me</h2>
				<p>
					I am a Frontend Developer with four years of experience at{' '}
					<ExternalLink
						href="https://www.4zida.rs/"
						title="4zida.rs | Nekretnine u pokretu"
						label="4zida.rs"
					/>
					, part of the{' '}
					<ExternalLink
						href="https://inspiragrupa.com/"
						title="Sfera Digitalnih Biznisa - Inspira Grupa"
						label="Inspira Group"
					/>
					. Throughout my career, I have developed a strong interest in performance optimization and
					creating fast, scalable web applications. Currently, I am primarily working with Next.js,
					but I also have three years of experience working with Angular.
				</p>
				<p>
					In addition to web development, I have been actively involved in mobile development. A few
					months ago, I joined a project where we developed a React Native application using Expo.
					Across all projects, I consistently work with TypeScript and Tailwind CSS, focusing on
					writing maintainable, efficient, and modern code.
				</p>
				<p>
					In my free time, I enjoy building personal projects, often tackling more complex,
					long-term applications. One of them is the <strong>SalonSnova</strong> project, where I
					collaborated with a partner for about six months on the design and planning, followed by
					another six months of frontend and backend development. You can find more details about
					this project in the Projects section.
				</p>
				<p>
					I value <b>clean and well-structured code</b>, <b>continuous learning</b>, and{' '}
					<b>open collaboration</b>. I enjoy working in teams that strive for technical excellence
					and appreciate clear communication. My working style is focused, detail-oriented, and
					proactive—I take ownership of tasks and always look for ways to improve both the product
					and development processes.
				</p>
				<p>
					Looking ahead, I aim to further deepen my knowledge in <b>mobile development</b>,{' '}
					<b>performance architecture</b>, and <b>scalable system design</b>.
				</p>
			</Narrower>
		</section>
	);
}

function ExternalLink({ href, title, label }: { href: string; title: string; label: string }) {
	return (
		<a className="link" href={href} title={title}>
			{label} <LuExternalLink className="inline-block align-baseline text-[0.75rem]" />
		</a>
	);
}
