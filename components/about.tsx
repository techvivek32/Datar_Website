export default function About() {
  return (
  
  
  
  
  
  <section className="px-6 py-12 md:py-16 bg-secondary">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <div className="w-[350px] h-[300px] rounded-lg overflow-hidden ring-1 ring-border mx-auto">
            <img alt="Image 1" src="/image%201.jpeg" className="w-full h-full object-cover object-top" />
          </div>
          <div className="w-[350px] h-[300px] rounded-lg overflow-hidden ring-1 ring-border mx-auto">
            <img alt="Image 2" src="/image%202.jpeg" className="w-full h-full object-cover object-top" />
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="heading-font text-3xl md:text-4xl font-semibold">Meet Our Expert Coaches</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-primary">Dr. Mahesh Vasoya</h3>
              <p className="text-sm text-muted-foreground mb-2"> Dr. McV  (Dr. Mahesh Vasoya)       B.tech, MBA,  Phd. In Corporate Training and Quality Assurance</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary">Mr. Sudesh Aggrawal</h3>
              <p className="text-sm text-muted-foreground mb-2">Senior Training Specialist</p>
            </div>
          </div>
          <p className="leading-relaxed">
            Our seasoned professional coaches bring 10+ years of combined experience in enabling working professionals, fresh graduates,
            and corporate teams to grow skills and confidence through DATAR Training's proven methodologies.
          </p>
          <ul className="grid gap-2">
            <li>• Certified Coaches, trained 2000+ professionals</li>
            <li>• Worked with leading companies across India</li>
            <li>• Recognized for practical, outcome-driven workshops</li>
            <li>• Specialized in corporate training and professional development</li>
          </ul>
          <blockquote className="p-4 rounded-md bg-card ring-1 ring-border">
            "DATAR Training's coaches transformed our team's collaboration and presentation skills within weeks."
            <span className="block mt-1 text-sm opacity-80">— Corporate Client</span>
          </blockquote>
        </div>
      </div>
    </section>
  )
}