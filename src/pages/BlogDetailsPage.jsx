import { useParams } from "react-router-dom";

export default function BlogDetailsPage() {
  const { postId } = useParams();

  return (
    <div>
      <h1>Ini adalah halaman detail blog</h1>
      <h2>Params: {postId}</h2>
    </div>
  );
}