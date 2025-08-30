// หมวดหมู่
export default function CategoryPage({ params }: { params: { slug: string } }) {
  return <main>หมวดหมู่: {params.slug}</main>;
}
