import { Epilogue } from 'next/font/google'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Content from '@/components/Content'
import Footer from '@/components/Footer'

const epilogue = Epilogue({ weight: ["500", "700"], subsets: ['latin'] })

export default function Home() {
  return <>
    <Head>
      <title>Frontend Mentor | Intro section with dropdown navigation</title>
    </Head>

    <main className={epilogue.className}>
      <div className="bg-[#FAFAFA]">
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <Content />

        {/* footer */}
        <Footer />
      </div>
    </main>
  </>
}
