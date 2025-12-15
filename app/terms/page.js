export default function TermsPage() {
    return (
        <main className="min-h-screen bg-primary py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Service</span>
                    </h1>
                    <p className="text-xl text-neutral-300 leading-relaxed">
                        Please read these terms carefully before using our photography and creative services.
                    </p>
                    <p className="text-sm text-neutral-400 mt-4">Last updated: December 15, 2025</p>
                </div>

                {/* Content */}
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
                    <div className="prose prose-invert max-w-none">

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
                            <div className="text-neutral-300 space-y-4">
                                <p>
                                    By engaging Joshh Photography for services or using our website, you agree to be bound by these Terms of Service.
                                    If you do not agree to these terms, please do not use our services.
                                </p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Services Offered</h2>
                            <div className="text-neutral-300 space-y-4">
                                <p>Joshh Photography provides the following services:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Photography & Creative Work (portraits, events, commercial)</li>
                                    <li>Media, Communication & Content Management</li>
                                    <li>Campaigns, Strategy & PR</li>
                                    <li>Events and Volunteering coordination</li>
                                    <li>Branding & Graphics Design Concepts</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Booking and Payment Terms</h2>
                            <div className="text-neutral-300 space-y-4">
                                <h3 className="text-lg font-semibold text-white">Booking Process</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>All bookings require a signed contract and deposit</li>
                                    <li>Dates are reserved only upon receipt of deposit</li>
                                    <li>We reserve the right to decline any booking request</li>
                                </ul>

                                <h3 className="text-lg font-semibold text-white mt-6">Payment Schedule</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>50% deposit required to secure booking</li>
                                    <li>Remaining balance due before or on the day of service</li>
                                    <li>Late payments may incur additional fees</li>
                                    <li>Payment methods: Bank transfer, mobile money, cash</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Cancellation and Rescheduling</h2>
                            <div className="text-neutral-300 space-y-4">
                                <h3 className="text-lg font-semibold text-white">Client Cancellations</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>30+ days notice: Full refund minus processing fees</li>
                                    <li>14-29 days notice: 50% refund</li>
                                    <li>Less than 14 days: No refund</li>
                                    <li>Weather-related cancellations may be rescheduled without penalty</li>
                                </ul>

                                <h3 className="text-lg font-semibold text-white mt-6">Our Cancellations</h3>
                                <p>
                                    In rare cases where we must cancel (illness, emergency), we will provide full refund
                                    and assist in finding alternative photographers when possible.
                                </p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Image Rights and Usage</h2>
                            <div className="text-neutral-300 space-y-4">
                                <h3 className="text-lg font-semibold text-white">Copyright</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Joshh Photography retains copyright to all images</li>
                                    <li>Clients receive usage rights for personal/business use as agreed</li>
                                    <li>Commercial usage may require additional licensing</li>
                                </ul>

                                <h3 className="text-lg font-semibold text-white mt-6">Portfolio Usage</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>We reserve the right to use images for portfolio and marketing</li>
                                    <li>Images may be shared on social media and website</li>
                                    <li>Clients can request privacy for sensitive events</li>
                                    <li>Credit will be given when images are shared publicly</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Delivery and Timeline</h2>
                            <div className="text-neutral-300 space-y-4">
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Preview images: 48-72 hours after event</li>
                                    <li>Full gallery delivery: 2-4 weeks depending on project scope</li>
                                    <li>Rush delivery available for additional fee</li>
                                    <li>Images delivered via secure online gallery</li>
                                    <li>Galleries remain active for 90 days after delivery</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Client Responsibilities</h2>
                            <div className="text-neutral-300 space-y-4">
                                <p>Clients are responsible for:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Providing accurate event details and timeline</li>
                                    <li>Ensuring access to shooting locations</li>
                                    <li>Obtaining necessary permissions for photography</li>
                                    <li>Communicating special requests in advance</li>
                                    <li>Providing safe working conditions</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                            <div className="text-neutral-300 space-y-4">
                                <p>
                                    Our liability is limited to the amount paid for services. We are not responsible for:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Equipment failure beyond our control</li>
                                    <li>Venue restrictions that limit photography</li>
                                    <li>Acts of nature or circumstances beyond our control</li>
                                    <li>Loss of images due to client device/storage issues</li>
                                </ul>
                                <p>
                                    We maintain backup equipment and procedures to minimize risks, but cannot guarantee
                                    against all possible technical failures.
                                </p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Conduct and Behavior</h2>
                            <div className="text-neutral-300 space-y-4">
                                <p>
                                    We reserve the right to terminate services if:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Clients or guests behave inappropriately toward our team</li>
                                    <li>Unsafe working conditions are present</li>
                                    <li>Illegal activities are taking place</li>
                                    <li>Contract terms are violated</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Dispute Resolution</h2>
                            <div className="text-neutral-300 space-y-4">
                                <p>
                                    Any disputes will be resolved through:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Direct communication and negotiation first</li>
                                    <li>Mediation if necessary</li>
                                    <li>Kenyan law governs these terms</li>
                                    <li>Jurisdiction in Kenyan courts</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                            <div className="text-neutral-300 space-y-4">
                                <p>
                                    For questions about these terms or our services:
                                </p>
                                <div className="bg-white/5 rounded-xl p-4 mt-4">
                                    <p><strong className="text-white">Email:</strong> namwangajoshua@gmail.com</p>
                                    <p><strong className="text-white">Phone:</strong> +254797322205</p>
                                    <p><strong className="text-white">Location:</strong> Ongata Rongai, Kenya</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
                            <div className="text-neutral-300 space-y-4">
                                <p>
                                    We may update these terms from time to time. Continued use of our services
                                    after changes constitutes acceptance of new terms. Major changes will be
                                    communicated to existing clients.
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