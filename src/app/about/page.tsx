export default function AboutPage() {
  return (
    <div className="container mx-auto my-12 px-4">
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">About MALABRO</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Discover the story behind our passion for quality and design.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Founded in [Year], MALABRO started with a simple idea: to create high-quality, timeless pieces that blend modern aesthetics with traditional craftsmanship. Our journey began in a small workshop, driven by a commitment to excellence and a love for beautiful design. Over the years, we've grown, but our core values remain the same.
            </p>
          </div>
          <div>
            {/* Placeholder for an image */}
            <div className="w-full h-80 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Image Placeholder</span>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-3xl font-bold">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h3 className="font-semibold">Quality</h3>
              <p className="text-muted-foreground">We source the finest materials and partner with skilled artisans to ensure every product meets our high standards.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Design</h3>
              <p className="text-muted-foreground">Our design philosophy is rooted in simplicity, functionality, and elegance.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Sustainability</h3>
              <p className="text-muted-foreground">We are committed to responsible sourcing and ethical production practices.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
