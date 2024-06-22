export default function PostTitle({ children }) {
    return (
      <h1
        className="text-3xl font-bold text-primary my-2 text-left md:text-center mt-5"
        dangerouslySetInnerHTML={{ __html: children }}
      />
    );
  }
  