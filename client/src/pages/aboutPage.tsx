

export const AboutPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">About NewsHub</h1>
            <div className="prose max-w-none">
                <p className="text-lg mb-4">
                    Welcome to NewsHub, your trusted source for the latest news and updates from around the world.
                    We aggregate news from various reliable sources to bring you comprehensive coverage of the stories
                    that matter most.
                </p>
                <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
                <p className="mb-4">
                    To provide accurate, timely, and unbiased news coverage to our readers, helping them stay
                    informed about current events and make better decisions.
                </p>
                <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
                <p>
                    Have questions or feedback? We'd love to hear from you. Reach out to us at{' '}
                    <a href="mailto:contact@newshub.com" className="text-blue-600 hover:underline">
                        contact@newshub.com
                    </a>
                </p>
            </div>
        </div>
    );
};