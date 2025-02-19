export function Footer() {
  return (
    <footer className="mt-16 pb-8 text-center text-muted">
      <div className="max-w-4xl mx-auto border-t border-muted/20 pt-8">
        <p>Built with Next.js and ❤️ by [Your Name] © {new Date().getFullYear()}</p>
        <p className="mt-2">
          <a href="https://github.com/yourusername" className="hover:text-accent transition-colors">
            GitHub
          </a>
          {' • '}
          <a href="https://twitter.com/yourhandle" className="hover:text-accent transition-colors">
            Twitter
          </a>
          {' • '}
          <a href="mailto:email@example.com" className="hover:text-accent transition-colors">
            Email
          </a>
        </p>
      </div>
    </footer>
  );
}