import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  return (
    <div className="container mx-auto my-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Contact Us</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          We'd love to hear from you. Here's how you can reach us.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Email Us</h3>
            <p className="text-muted-foreground">support@malabro.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Call Us</h3>
            <p className="text-muted-foreground">(123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Visit Us</h3>
            <p className="text-muted-foreground">
              123 Luxury Lane<br />
              Design District, 54321
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="How can we help?" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message..." rows={6} />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
