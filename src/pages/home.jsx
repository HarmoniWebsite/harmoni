import './home.css'

import Nav from '../components/home/nav.jsx'
import TitleHeader from '../components/home/titleHeader.jsx'
import Banner from '../components/home/banner.jsx'
import SectionDua from '../components/home/sectionDua.jsx'
import OurHistory from '../components/home/ourHistory.jsx'
import LettersMean from '../components/home/lettersMean.jsx'
import Why from '../components/home/why.jsx'
import Quotes from '../components/home/quotes.jsx'
import Graphic from '../components/home/footerGraph.jsx'
import Footer from '../components/home/footer.jsx'
import Services from '../components/home/services.jsx'

function Home() {
    return (
        <>
            <Nav></Nav>
            <main className='homeCont'>
                <article className='art1'>
                    <TitleHeader></TitleHeader>
                    <Banner></Banner>
                </article>
                <article className='art2'>
                    <SectionDua></SectionDua>
                    <OurHistory></OurHistory>
                    <LettersMean></LettersMean>
                    <Services></Services>
                    <Why></Why>
                    <Quotes></Quotes>
                    <Graphic></Graphic>
                </article>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Home