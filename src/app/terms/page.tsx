export default function TermsPage() {
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
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-muted-foreground">Last updated: July 16, 2024</p>
        </div>

        <GenericSection title="1. Introduction">
          <p>
            Welcome to MALABRO. These Terms of Service govern your use of our website and services. By accessing or using our service, you agree to be bound by these terms.
          </p>
        </GenericSection>

        <GenericSection title="2. Use of Our Service">
          <p>
            You may use our service only for lawful purposes and in accordance with these Terms. You agree not to use the service in any way that violates any applicable federal, state, local, or international law or regulation.
          </p>
        </GenericSection>

        <GenericSection title="3. Accounts">
          <p>
            When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our service.
          </p>
        </GenericSection>

        <GenericSection title="4. Intellectual Property">
          <p>
            The service and its original content, features, and functionality are and will remain the exclusive property of MALABRO and its licensors. The service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
          </p>
        </GenericSection>

        <GenericSection title="5. Limitation of Liability">
          <p>
            In no event shall MALABRO, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
          </p>
        </GenericSection>
      </div>
    </div>
  );
}
