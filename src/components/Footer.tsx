const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold gradient-text">Akhil Edits</span>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Akhil Edits. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="https://instagram.com/prodacmedia" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Instagram
          </a>
          <a href="https://youtube.com/@prodacmedia" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            YouTube
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
