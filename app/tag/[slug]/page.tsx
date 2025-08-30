// ป้ายกำกับ (Tag)
export default function TagPage({ params }: { params: { slug: string } }) {
  return <main>ป้ายกำกับ: {params.slug}</main>;
}
