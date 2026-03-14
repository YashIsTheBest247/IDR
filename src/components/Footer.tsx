const Footer = () => (
  <footer className="bg-foreground text-background py-12">
    <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
      <p>© 2026 Institute of Digital Risk. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="text-background/80 hover:text-background transition-colors">Privacy Policy</a>
        <a href="#" className="text-background/80 hover:text-background transition-colors">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default Footer;
