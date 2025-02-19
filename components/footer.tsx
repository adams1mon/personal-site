export function Footer() {
  return (
    <footer className="text-center text-muted">
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
    </footer>
  );
}