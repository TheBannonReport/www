import GhostContentAPI from '@tryghost/content-api';
import { env } from '$env/dynamic/private';

function getClient() {
	const url = env.GHOST_URL;
	const key = env.GHOST_CONTENT_API_KEY;
	if (!url || !key) return null;
	return new GhostContentAPI({ url, key, version: 'v5.0' });
}

// ── Dummy data used when Ghost is unreachable ──

const dummyPosts = [
	{
		id: '1',
		title: 'Why Every Business Needs an Incident Response Plan',
		slug: 'incident-response-plan',
		feature_image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=1200&q=80',
		excerpt:
			"In today's threat landscape, it's not a matter of if a security incident will occur — it's when. A well-documented plan can make all the difference.",
		published_at: '2026-04-10T12:00:00.000Z',
		reading_time: 4,
		tags: [{ name: 'Security', slug: 'security' }]
	},
	{
		id: '2',
		title: 'Understanding Compliance Frameworks: SOC 2, ISO 27001, and Beyond',
		slug: 'compliance-frameworks',
		feature_image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
		excerpt:
			'Navigating the world of compliance frameworks can feel overwhelming. Learn which ones matter for your business.',
		published_at: '2026-04-08T12:00:00.000Z',
		reading_time: 5,
		tags: [{ name: 'Compliance', slug: 'compliance' }]
	},
	{
		id: '3',
		title: 'Secure File Sharing: Best Practices for Sensitive Documents',
		slug: 'secure-file-sharing',
		feature_image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=1200&q=80',
		excerpt:
			'Sharing sensitive documents over email or consumer cloud storage is one of the most common security risks in business today.',
		published_at: '2026-04-05T12:00:00.000Z',
		reading_time: 4,
		tags: [{ name: 'Product', slug: 'product' }, { name: 'Security', slug: 'security' }]
	},
	{
		id: '4',
		title: 'The Rise of Insider Threats: What You Need to Know',
		slug: 'insider-threats',
		feature_image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=1200&q=80',
		excerpt:
			'Some of the most damaging breaches come from within. Learn how to identify and mitigate insider threats.',
		published_at: '2026-04-02T12:00:00.000Z',
		reading_time: 5,
		tags: [{ name: 'Security', slug: 'security' }, { name: 'Analysis', slug: 'analysis' }]
	},
	{
		id: '5',
		title: 'How to Report a Security Incident: A Step-by-Step Guide',
		slug: 'report-security-incident',
		feature_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
		excerpt:
			'Discovering a security incident can be stressful. Here is a clear step-by-step process to follow.',
		published_at: '2026-03-28T12:00:00.000Z',
		reading_time: 3,
		tags: [{ name: 'Guide', slug: 'guide' }]
	}
];

const dummyPostBodies: Record<string, string> = {
	'incident-response-plan': `<p>In today's threat landscape, it's not a matter of <em>if</em> a security incident will occur — it's <em>when</em>. Having a well-documented incident response plan can mean the difference between a contained event and a full-scale breach.</p><h2>What Is an Incident Response Plan?</h2><p>An incident response plan (IRP) is a structured approach to handling security incidents, breaches, and cyber threats. It outlines the steps your team should take from detection through recovery.</p><h2>Key Components</h2><ul><li><strong>Preparation:</strong> Define roles, responsibilities, and communication channels.</li><li><strong>Detection &amp; Analysis:</strong> Establish monitoring and alerting systems.</li><li><strong>Containment:</strong> Isolate affected systems to prevent lateral movement.</li><li><strong>Recovery:</strong> Restore systems from clean backups and verify integrity.</li><li><strong>Lessons Learned:</strong> Conduct post-incident reviews.</li></ul><p>Organizations without an incident response plan spend an average of $1.5 million more per breach. Don't wait for an incident to start planning.</p>`,
	'compliance-frameworks': `<p>Navigating the world of compliance frameworks can feel overwhelming. SOC 2, ISO 27001, HIPAA, PCI-DSS — each serves a different purpose, but they all share a common goal: protecting sensitive data.</p><h2>SOC 2</h2><p>SOC 2 is an auditing standard developed by the AICPA. It evaluates an organization's controls related to security, availability, processing integrity, confidentiality, and privacy.</p><h2>ISO 27001</h2><p>ISO 27001 is an international standard for information security management systems (ISMS). Unlike SOC 2, it results in a formal certification and is widely recognized globally.</p><h2>Which One Do You Need?</h2><p>The answer depends on your industry, customers, and geography. Many organizations pursue both to cover domestic and international requirements. Start with a gap analysis and build from there.</p>`,
	'secure-file-sharing': `<p>Sharing sensitive documents over email or consumer cloud storage is one of the most common security risks in business today.</p><h2>Common Mistakes</h2><ul><li>Sending unencrypted attachments via email</li><li>Using personal cloud storage accounts for business documents</li><li>Sharing links without expiration dates or access controls</li><li>Not tracking who has accessed shared files</li></ul><h2>What Secure Sharing Looks Like</h2><ul><li><strong>End-to-end encryption</strong> — files are encrypted in transit and at rest</li><li><strong>Access controls</strong> — restrict who can view, download, or forward</li><li><strong>Audit trails</strong> — full visibility into who accessed what and when</li><li><strong>Expiring links</strong> — automatically revoke access after a set period</li></ul>`,
	'insider-threats': `<p>When most people think of cybersecurity threats, they picture external hackers. But some of the most damaging breaches come from within.</p><h2>Types of Insider Threats</h2><ul><li><strong>Malicious insiders:</strong> Individuals who intentionally steal data or sabotage systems.</li><li><strong>Negligent insiders:</strong> Well-meaning employees who accidentally expose data.</li><li><strong>Compromised insiders:</strong> Employees whose credentials have been stolen.</li></ul><h2>Mitigation Strategies</h2><p>Implement the principle of least privilege, conduct regular access reviews, monitor user activity, and establish clear offboarding procedures. Security awareness training is critical.</p>`,
	'report-security-incident': `<p>Discovering a security incident can be stressful. Knowing how to report it quickly and effectively can significantly reduce the impact.</p><h2>Step 1: Don't Panic</h2><p>Document what you've observed — screenshots, timestamps, and affected systems.</p><h2>Step 2: Use the Right Channel</h2><p>Report through your organization's official incident reporting channel.</p><h2>Step 3: Preserve Evidence</h2><p>Don't delete suspicious emails, close browser tabs, or shut down affected machines.</p><h2>Step 4: Limit the Scope</h2><p>Disconnect the affected device from the network to prevent further spread.</p><h2>Step 5: Follow Up</h2><p>Stay available for questions from the response team and update your passwords if credential compromise is suspected.</p>`
};

export async function getPosts(page = 1, limit = 12) {
	const client = getClient();
	if (client) {
		try {
			return await client.posts.browse({
				limit,
				page,
				include: ['tags'],
				fields: [
					'id',
					'title',
					'slug',
					'feature_image',
					'excerpt',
					'published_at',
					'reading_time'
				].join(',')
			});
		} catch {
			// Ghost unreachable — fall through to dummy data
		}
	}
	return dummyPosts;
}

export async function getPost(slug: string) {
	const client = getClient();
	if (client) {
		try {
			return await client.posts.read({ slug }, { include: ['tags', 'authors'] });
		} catch {
			// Ghost unreachable — fall through to dummy data
		}
	}
	const post = dummyPosts.find((p) => p.slug === slug);
	if (!post) return null;
	return {
		...post,
		html: dummyPostBodies[slug] ?? '<p>Post content unavailable.</p>',
		authors: [{ name: 'The Bannon Report', slug: 'tbr' }]
	};
}
