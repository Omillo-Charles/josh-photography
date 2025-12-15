export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-primary py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Policy</span>
                    </h1>
                    <p className="text-xl text-neutral-300 leading-relaxed">
                        Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                    </p>
                    <p className="text-sm text-neutral-400 mt-4">Last updated: December 15, 2025</p>
                </div>

                {/* Content */}
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
                    <div className="prose prose-invert max-w-none">

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                            <div className="text-neutral-300 space-y-4">
                                <p>
                                    We collect information you provide directly to us, such as when you:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Contact us through our website forms</li>
                                    <li>Request our photography or creative services</li>
                                    <li>Subscribe to our newsletter or updates</li>
                                    <li>Participate in our events or sessions</li>
                                </ul>
                                <p>
                                    This information may include your name, email address, phone number, project details,
                                    and any other information you choose to provide.
                                </p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                            <div className="text-neutral-300 space-y-4">
                                <p>We use the information we collect to:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Provide and improve our photography and creative services</li>
                                    <li>Communicate with you about your projects and requests</li>
                                    <li>Send you updates about our services (with your consent)</li>
                                    <li>Respond to your inquiries and provide customer support</li>
                                    <li>Process payments and manage our business operations</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Photography and Image Rights</h2>
                            <div className="text-neutral-300 space-y-4">
                                <p>
                                    As a photography business, we handle images and visual content. Here's how we manage your photos:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>We retain usage rights for portfolio and marketing purposes unless otherwise agreed</li>
                                    <li>Client photos are stored securely and shared only with explicit permission</li>
                                    <li>We may use photos for social media and website promotion with proper credit</li>
                                    <li>Clients can request removal of their images from our marketing materials</li>
                                    <li>Raw files and edited images are backed up securely for agreed periods</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
                            <div className="text-neutral-300 space-y-4">
                                <p>
                                    We do not sell, trade, or otherwise transfer your personal information to third parties, except:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>With your explicit consent</li>
                                    <li>To trusted service providers who assist in our operations (e.g., payment processors)</li>
                                    <li>When required by law or to protect our rights</li>
                                    <li>In connection with a business transfer or merger</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                            <div className="text-neutral-300 space-y-4">
                                <p>
                                    We implement appropriate security measures to protect your personal information:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Secure storage of digital files and client information</li>
                                    <li>Regular backups of important data</li>
                                    <li>Limited access to personal information on a need-to-know basis</li>
                                    <li>Secure communication channels for sensitive information</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                            <div className="text-neutral-300 space-y-4">
                                <p>You have the right to:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Access the personal information we hold about you</li>
                                    <li>Request correction of inaccurate information</li>
                                    <li>Request deletion of your personal information</li>
                                    <li>Opt out of marketing communications</li>
                                    <li>Request removal of your images from our portfolio</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Cookies and Website Analytics</h2>
                            <div className="text-neutral-300 space-y-4">
                                <p>
                                    Our website may use cookies and similar technologies to improve your experience.
                                    These help us understand how visitors use our site and improve our services.
                                </p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                            <div className="text-neutral-300 space-y-4">
                                <p>
                                    If you have questions about this Privacy Policy or how we handle your information, please contact us:
                                </p>
                                <div className="bg-white/5 rounded-xl p-4 mt-4">
                                    <p><strong className="text-white">Email:</strong> namwangajoshua@gmail.com</p>
                                    <p><strong className="text-white">Phone:</strong> +254797322205</p>
                                    <p><strong className="text-white">Location:</strong> Ongata Rongai, Kenya</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
                            <div className="text-neutral-300 space-y-4">
                                <p>
                                    We may update this Privacy Policy from time to time. We will notify you of any changes
                                    by posting the new policy on this page and updating the "Last updated" date.
                                </p>
                            </div>
                        </section>

                    </div>
                </div>

                {/* Back to Home */}
                <div className="text-center mt-12">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-full font-medium hover:bg-secondary/90 transition-all duration-300"
                    >
                        Back to Home
                    </a>
                </div>
            </div>
        </main>
    );
}