
import Cabecalho from '../../components/cabecalho'
import Menu from '../../components/menu'

import { Container, Conteudo } from './styled'


export default function Index() {
    return (
        <Container>
            <Menu />
            <Conteudo>
                <Cabecalho />
                <div class="body-right-box">
                    <div class="new-student-box">
                        
                        <div class="text-new-student">
                            <div class="bar-new-student"></div>
                            <div class="text-new-student">Novo Produto</div>
                        </div>

                        <div class="input-new-student"> 
                            <div className="inputs-cima">
                                <div class="input-left">
                                    <div class="agp-input"> 
                                        <div class="name-student"> Nome: </div>  
                                        <div class="input"> <input /> </div>  
                                    </div> 
                                    <div class="agp-input">
                                        <div class="number-student"> Categoria: </div>  
                                        <div class="input"> <input /> </div> 
                                    </div>
                                    <div class="agp-input">
                                        <div class="number-student"> Avaliação: </div>  
                                        <div class="input"> <input /> </div> 
                                    </div>
                                </div>

                                <div class="input-right">
                                    <div class="agp-input">
                                        <div class="corse-student"> Preço DE: </div>  
                                        <div class="input"> <input /> </div>  
                                    </div>
                                    <div class="agp-input">
                                        <div class="class-student"> Preço POR: </div>  
                                        <div class="input"> <input /> </div> 
                                    </div>
                                    <div class="agp-input">
                                        <div class="class-student-estoque"> Estoque: </div>  
                                        <div class="input"> <input /> </div> 
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="div-link-imagem">
                                        <div className="texto-link-imagem"> Link imagem: </div>  
                                        <div > <input className="imput-imagem"/> </div> 
                                </div>
                                <div className="div-descricao">
                                        <div className="texto-descricao"> Descrição: </div>  
                                        <div > <input className="input-descricao" /> </div> 
                                </div>
                            </div>

                            <div class="button-create"> <button> Cadastrar </button> </div>
                        </div>
                    </div>

                    <div class="student-registered-box">
                        <div class="row-bar"> 
                            <div class="bar-new-student"> </div>
                            <div class="text-registered-student"> Produtos Cadastrados </div>
                        </div>
                    
                        <table class ="table-user">
                            <thead>
                                <tr>
                                    <th> ID </th>
                                    <th> Nome </th>
                                    <th> Chamada </th>
                                    <th> Turma </th>
                                    <th> Curso </th>
                                    <th class="coluna-acao"> </th>
                                    <th class="coluna-acao"> </th>
                                </tr>
                            </thead>
                    
                            <tbody>
                                <tr>
                                    <td> 1 </td>
                                    <td> Fulao da Silva Sauro</td>
                                    <td> 15 </td>
                                    <td> InfoX </td>
                                    <td> Informática </td>
                                    <td> <button> <img src="/assets/images/edit.svg" alt="" /> </button> </td>
                                    <td> <button> <img src="/assets/images/trash.svg" alt="" /> </button> </td>
                                </tr>
                            
                                <tr class="linha-alternada">
                                    <td> 1 </td>
                                    <td> Fulao da Silva Sauro</td>
                                    <td> 16 </td>
                                    <td> InfoX </td>
                                    <td> Informática </td>
                                    <td> </td>
                                    <td> </td>
                                </tr>

                                <tr>
                                    <td> 1 </td>
                                    <td> Fulao da Silva Sauro</td>
                                    <td> 17 </td>
                                    <td> InfoX </td>
                                    <td> Informática </td>
                                    <td> </td>
                                    <td> </td>
                                </tr>

                                <tr class="linha-alternada">
                                    <td> 1 </td>
                                    <td> Fulao da Silva Sauro</td>
                                    <td> 18 </td>
                                    <td> InfoX </td>
                                    <td> Informática </td>
                                    <td> </td>
                                    <td> </td>
                                </tr>
                                
                            </tbody> 
                        </table>
                    </div>
                </div>
            </Conteudo>
        </Container>
    )
}
