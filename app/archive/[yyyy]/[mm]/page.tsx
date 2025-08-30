// คลังข่าวตามเดือน/ปี
export default function ArchivePage({ params }: { params: { yyyy: string, mm: string } }) {
  return <main>คลังข่าว: {params.yyyy}/{params.mm}</main>;
}
