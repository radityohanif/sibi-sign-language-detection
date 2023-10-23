import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import MobileLayout from "../../layout/mobile-layout";
import ButtonWithModalImage from "../../components/button/button-with-modal-image";

const panduanSibi: any = [
  {
    text: "A",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/A.png",
  },
  {
    text: "B",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/B.png",
  },
  {
    text: "C",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/C.png",
  },
  {
    text: "D",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/D.png",
  },
  {
    text: "E",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/E.png",
  },
  {
    text: "F",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/F.png",
  },
  {
    text: "G",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/G.png",
  },
  {
    text: "H",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/H.png",
  },
  {
    text: "I",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/I.png",
  },
  {
    text: "J",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/J.png",
  },
  {
    text: "K",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/K.png",
  },
  {
    text: "L",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/L.png",
  },
  {
    text: "M",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/M.png",
  },
  {
    text: "N",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/N.png",
  },
  {
    text: "O",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/O.png",
  },
  {
    text: "P",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/P.png",
  },
  {
    text: "Q",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/Q.png",
  },
  {
    text: "R",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/R.png",
  },
  {
    text: "S",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/S.png",
  },
  {
    text: "T",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/T.png",
  },
  {
    text: "U",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/U.png",
  },
  {
    text: "V",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/V.png",
  },
  {
    text: "W",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/W.png",
  },
  {
    text: "X",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/X.png",
  },
  {
    text: "Y",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/Y.png",
  },
  {
    text: "Z",
    imageUrl: "https://pmpk.kemdikbud.go.id/sibi/SIBI/abjad/Z.png",
  },
]

export default function Beranda() {
  return (
    <MobileLayout>
      <Heading>
        Halo Selamat Datang Kembali
      </Heading>
      <Text fontSize={'xl'} mb={5}>
        Yuk Kenali apa itu <b>SIBI</b> (Sistem Isyarat Bahasa Indonesi). dan bagaimana contohnya.
      </Text>
      <SimpleGrid columns={2} spacing={5}>
        {
          panduanSibi.map((data: any) => <ButtonWithModalImage text={data.text} imageUrl={data.imageUrl} />)
        }
      </SimpleGrid>
    </MobileLayout>
  )
}
