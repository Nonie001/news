// ผู้เขียน
export default function AuthorPage({ params }: { params: { username: string } }) {
  return <main>ผู้เขียน: {params.username}</main>;
}
