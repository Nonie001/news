// รายละเอียดข่าว
export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  return <main>รายละเอียดข่าว: {params.slug}</main>;
}
