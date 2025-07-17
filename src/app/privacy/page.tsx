export default function PrivacyPage() {
  const GenericSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="space-y-2 text-muted-foreground">{children}</div>
    </div>
  );

  return (
    <div className="container mx-auto my-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground">Last updated: July 16, 2024</p>
        </div>

        <GenericSection title="1. Information We Collect">
          <p>
            We collect information that you provide directly to us, such as when you create an account, place an order, or contact customer support. This may include your name, email address, shipping address, and payment information.
          </p>
        </GenericSection>

        <GenericSection title="2. How We Use Your Information">
          <p>
            We use the information we collect to process your orders, communicate with you, and improve our services. We do not share your personal information with third parties, except as necessary to fulfill your order (e.g., with shipping carriers).
          </p>
        </GenericSection>

        <GenericSection title="3. Data Security">
          <p>
            We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
          </p>
        </GenericSection>

        <GenericSection title="4. Your Rights">
          <p>
            You have the right to access, correct, or delete your personal information. You can manage your account information through your account dashboard or by contacting us directly.
          </p>
        </GenericSection>

        <GenericSection title="5. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </GenericSection>
      </div>
    </div>
  );
}
