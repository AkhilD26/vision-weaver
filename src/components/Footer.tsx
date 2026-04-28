const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="font-display text-2xl text-foreground">
          Akhil<span className="text-primary">.</span>
        </a>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Akhil Edits — Freelance video editor.
        </p>
        <div className="flex gap-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Instagram
          </a>
          <a href="https://wa.me/919032855330" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
