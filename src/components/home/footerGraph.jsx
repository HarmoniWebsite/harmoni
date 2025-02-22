import daun from '../../assets/daun.svg'
import './footerGraph.css'

function footerGraphics() {
    const repeated = []

    for (let i = 0; i < 20; i++) {
        repeated.push(
            <img key={i} className='item' src={daun} style={{ left: `${i * 120}px` }} />
        );
    }

    return (
        <section className="graphCont">
            <div className='wadah'>
                <div className="wadahGambar">
                    <div className="satu">
                        {repeated}
                    </div>
                    <div className="dua">
                        {repeated}
                    </div>
                    <div className="tiga">
                        {repeated}
                    </div>
                    <div className="empat">
                        {repeated}
                    </div>
                    <div className="dua">
                        {repeated}
                    </div>
                    <div className="tiga">
                        {repeated}
                    </div>
                    <div className="satu">
                        {repeated}
                    </div>
                    <div className="dua">
                        {repeated}
                    </div>
                    <div className="tiga">
                        {repeated}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default footerGraphics;