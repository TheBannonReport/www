import GhostAdminAPI from '@tryghost/admin-api';

const api = new GhostAdminAPI({
	url: 'http://localhost:2368',
	key: '69e14fc38b3e9e00013ad2b4:9490dda17925939112887f3b310324f4d36c4eab7d72ba434e85da0fbd99d291',
	version: 'v5.0'
});

const posts = [
	{
		title: 'Why Every Business Needs an Incident Response Plan',
		tags: [{ name: 'Security' }],
		feature_image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=1200&q=80',
		status: 'published',
		html: `
			<p>In today's threat landscape, it's not a matter of <em>if</em> a security incident will occur — it's <em>when</em>. Having a well-documented incident response plan can mean the difference between a contained event and a full-scale breach.</p>
			<h2>What Is an Incident Response Plan?</h2>
			<p>An incident response plan (IRP) is a structured approach to handling security incidents, breaches, and cyber threats. It outlines the steps your team should take from detection through recovery.</p>
			<h2>Key Components</h2>
			<ul>
				<li><strong>Preparation:</strong> Define roles, responsibilities, and communication channels before an incident occurs.</li>
				<li><strong>Detection & Analysis:</strong> Establish monitoring and alerting systems to identify threats early.</li>
				<li><strong>Containment:</strong> Isolate affected systems to prevent lateral movement.</li>
				<li><strong>Recovery:</strong> Restore systems from clean backups and verify integrity.</li>
				<li><strong>Lessons Learned:</strong> Conduct post-incident reviews to improve future response.</li>
			</ul>
			<h2>The Cost of Being Unprepared</h2>
			<p>According to IBM's 2025 Cost of a Data Breach Report, organizations without an incident response plan spend an average of $1.5 million more per breach. The time to identify and contain a breach also increases by 74 days.</p>
			<p>Don't wait for an incident to start planning. Build your IRP today.</p>
		`
	},
	{
		title: 'Understanding Compliance Frameworks: SOC 2, ISO 27001, and Beyond',
		tags: [{ name: 'Compliance' }],
		feature_image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
		status: 'published',
		html: `
			<p>Navigating the world of compliance frameworks can feel overwhelming. SOC 2, ISO 27001, HIPAA, PCI-DSS — each serves a different purpose, but they all share a common goal: protecting sensitive data.</p>
			<h2>SOC 2</h2>
			<p>SOC 2 is an auditing standard developed by the AICPA. It evaluates an organization's controls related to security, availability, processing integrity, confidentiality, and privacy. It's particularly relevant for SaaS companies and service providers.</p>
			<h2>ISO 27001</h2>
			<p>ISO 27001 is an international standard for information security management systems (ISMS). Unlike SOC 2, which is an attestation, ISO 27001 results in a formal certification. It's widely recognized globally.</p>
			<h2>Which One Do You Need?</h2>
			<p>The answer depends on your industry, customers, and geography. Many organizations pursue both SOC 2 and ISO 27001 to cover domestic and international requirements. The key is to start with a gap analysis and build from there.</p>
			<p>At The Bannon Report, we help organizations understand their compliance posture and build a roadmap to certification.</p>
		`
	},
	{
		title: 'Secure File Sharing: Best Practices for Sensitive Documents',
		tags: [{ name: 'Product' }, { name: 'Security' }],
		feature_image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=1200&q=80',
		status: 'published',
		html: `
			<p>Sharing sensitive documents over email or consumer cloud storage is one of the most common security risks in business today. From financial records to legal contracts, improper file sharing can lead to data leaks, compliance violations, and reputational damage.</p>
			<h2>Common Mistakes</h2>
			<ul>
				<li>Sending unencrypted attachments via email</li>
				<li>Using personal cloud storage accounts for business documents</li>
				<li>Sharing links without expiration dates or access controls</li>
				<li>Not tracking who has accessed shared files</li>
			</ul>
			<h2>What Secure Sharing Looks Like</h2>
			<p>A proper secure file sharing solution should offer:</p>
			<ul>
				<li><strong>End-to-end encryption</strong> — files are encrypted in transit and at rest</li>
				<li><strong>Access controls</strong> — restrict who can view, download, or forward</li>
				<li><strong>Audit trails</strong> — full visibility into who accessed what and when</li>
				<li><strong>Expiring links</strong> — automatically revoke access after a set period</li>
			</ul>
			<p>That's exactly why we built <strong>SecureSend</strong> — a simple, encrypted file sharing tool designed for businesses that handle sensitive data. No accounts required for recipients, full audit logging, and automatic expiration.</p>
		`
	},
	{
		title: 'The Rise of Insider Threats: What You Need to Know',
		tags: [{ name: 'Security' }, { name: 'Analysis' }],
		feature_image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=1200&q=80',
		status: 'published',
		html: `
			<p>When most people think of cybersecurity threats, they picture external hackers. But some of the most damaging breaches come from within — employees, contractors, or partners with legitimate access to your systems.</p>
			<h2>Types of Insider Threats</h2>
			<ul>
				<li><strong>Malicious insiders:</strong> Individuals who intentionally steal data or sabotage systems.</li>
				<li><strong>Negligent insiders:</strong> Well-meaning employees who accidentally expose data through careless behavior.</li>
				<li><strong>Compromised insiders:</strong> Employees whose credentials have been stolen and are being used by external attackers.</li>
			</ul>
			<h2>Warning Signs</h2>
			<p>Look for unusual patterns such as accessing files outside normal working hours, downloading large volumes of data, or attempting to access systems beyond their role. Behavioral analytics tools can help detect these anomalies automatically.</p>
			<h2>Mitigation Strategies</h2>
			<p>Implement the principle of least privilege, conduct regular access reviews, monitor user activity, and establish clear offboarding procedures. Security awareness training is also critical — most negligent incidents stem from a lack of understanding.</p>
		`
	},
	{
		title: 'How to Report a Security Incident: A Step-by-Step Guide',
		tags: [{ name: 'Guide' }],
		feature_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
		status: 'published',
		html: `
			<p>Discovering a security incident can be stressful. Whether it's a phishing email, unauthorized access, or a data leak, knowing how to report it quickly and effectively can significantly reduce the impact.</p>
			<h2>Step 1: Don't Panic</h2>
			<p>Take a breath. Document what you've observed — screenshots, timestamps, and affected systems. The more information you can provide upfront, the faster the response team can act.</p>
			<h2>Step 2: Use the Right Channel</h2>
			<p>Report through your organization's official incident reporting channel. If you're a Bannon Report customer, use our <a href="/report">Report page</a> for immediate, secure submission.</p>
			<h2>Step 3: Preserve Evidence</h2>
			<p>Don't delete suspicious emails, close browser tabs, or shut down affected machines. Forensic analysis requires the original state of the system.</p>
			<h2>Step 4: Limit the Scope</h2>
			<p>If possible, disconnect the affected device from the network to prevent further spread. Do not attempt to "fix" the issue yourself — this can destroy evidence.</p>
			<h2>Step 5: Follow Up</h2>
			<p>After reporting, stay available for questions from the response team. Follow any instructions provided and update your passwords if credential compromise is suspected.</p>
		`
	}
];

async function seed() {
	for (const post of posts) {
		try {
			const created = await api.posts.add(post, { source: 'html' });
			console.log(`✓ Created: "${created.title}"`);
		} catch (err) {
			console.error(`✗ Failed: "${post.title}"`, err.message || err);
		}
	}
	console.log('\nDone! Visit http://localhost:2368/ghost to see your posts.');
}

seed();
