
import { Container } from './styled'


export default function Index() {
    return (
        <Container>
            <header className="header-left-box">
                <div className="svg-cabecalho-left-box"> 
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.65 14.39L12 22.13L1.35002 14.39C1.20725 14.285 1.10134 14.1375 1.04746 13.9687C0.993572 13.7998 0.99447 13.6183 1.05002 13.45L2.27002 9.66999L4.71002 2.15999C4.73369 2.0988 4.77136 2.044 4.82002 1.99999C4.89926 1.92761 5.0027 1.88748 5.11002 1.88748C5.21734 1.88748 5.32078 1.92761 5.40002 1.99999C5.45141 2.04966 5.48927 2.11161 5.51002 2.17999L7.95002 9.66999H16.05L18.49 2.15999C18.5137 2.0988 18.5514 2.044 18.6 1.99999C18.6793 1.92761 18.7827 1.88748 18.89 1.88748C18.9973 1.88748 19.1008 1.92761 19.18 1.99999C19.2314 2.04966 19.2693 2.11161 19.29 2.17999L21.73 9.68999L23 13.45C23.0505 13.6235 23.0438 13.8086 22.9807 13.978C22.9177 14.1473 22.8017 14.2918 22.65 14.39V14.39Z" stroke="#10EAEA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="devSchool"> <span>Dev</span>Store</div>
            </header>
            <div className="black-box"></div>
            <div className="left-box-management">
                <div> Gerenciamento </div>
                <img src="/assets/images/chevron-down.svg" alt="" />
            </div>
            <div className="left-box-aluno">
                <div> Alunos </div>
            </div> 
        </Container>
    )
}

