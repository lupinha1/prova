
import Cabecalho from '../../components/cabecalho'
import Menu from '../../components/menu'

import { Container, Conteudo } from './styled'
import Api from '../../service/api'
import { useState, useEffect } from 'react';

const api = new Api();

export default function Index() {

    const [produtos, setProdutos] = useState([]);
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [avaliacao, setAvaliacao] = useState(0);
    const [linkimagem, SetLinkimagem] = useState('');
    const [descricaoo, SetDescricaoo] = useState('');
    const [precode, SetPrecode] = useState(0.0);
    const [precopor, SetPrecopor] = useState(0);
    const [estoque, SetEstoque] = useState(0);



    async function listar(){
        let r = await api.listar();
        setProdutos(r);
    } 

    async function inserir(){
        let r = await api.inserir(nome, categoria, avaliacao, precode, precopor, estoque, linkimagem, descricaoo);
        console.log(r)
        alert('produto inserido!')

        listar();
    }


    useEffect(() => {
        listar();
    }, [])

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
                                        <div class="input"> <input type="text" value={nome} onChange={e => setNome(e.target.value)} /> </div>  
                                    </div> 
                                    <div class="agp-input">
                                        <div class="number-student"> Categoria: </div>  
                                        <div class="input"> <input type="text" value={categoria} onChange={e => setCategoria(e.target.value)} /> </div> 
                                    </div>
                                    <div class="agp-input">
                                        <div class="number-student"> Avaliação: </div>  
                                        <div class="input"> <input type="text" value={avaliacao} onChange={e => setAvaliacao(e.target.value)}/> </div> 
                                    </div>
                                </div>

                                <div class="input-right">
                                    <div class="agp-input">
                                        <div class="corse-student"> Preço DE: </div>  
                                        <div class="input"> <input type="text" value={precode} onChange={e => SetPrecode(e.target.value)}/> </div>  
                                    </div>
                                    <div class="agp-input">
                                        <div class="class-student"> Preço POR: </div>  
                                        <div class="input"> <input type="text" value={precopor} onChange={e => SetPrecopor(e.target.value)}/> </div> 
                                    </div>
                                    <div class="agp-input">
                                        <div class="class-student-estoque"> Estoque: </div>  
                                        <div class="input"> <input type="text" value={estoque} onChange={e => SetEstoque(e.target.value)}/> </div> 
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="div-link-imagem">
                                        <div className="texto-link-imagem"> Link imagem: </div>  
                                        <div > <input className="imput-imagem" type="text" value={linkimagem} onChange={e => SetLinkimagem(e.target.value)}/> </div> 
                                </div>
                                <div className="div-descricao">
                                        <div className="texto-descricao"> Descrição: </div>  
                                        <div > <input className="input-descricao" type="text" value={descricaoo} onChange={e => SetDescricaoo(e.target.value)}/> </div> 
                                </div>
                                <div class="button-create"> <button onClick={inserir}> Cadastrar </button> </div>
                            </div>

                            
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
                                    <th></th>
                                    <th> ID </th>
                                    <th> Produto </th>
                                    <th> Categoria </th>
                                    <th> Preço </th>
                                    <th> Estoque </th>
                                    <th class="coluna-acao"> </th>
                                    <th class="coluna-acao"> </th>
                                </tr>
                            </thead>
                    
                            <tbody>

                                {produtos.map(item => 

                                <tr>
                                    <td> <img src={item.img_produto} width="30px" /> </td>
                                    <td> {item.id_produto} </td>
                                    <td> {item.nm_produto} </td>
                                    <td> {item.ds_categoria} </td>
                                    <td> R${item.vl_preco_por}</td>
                                    <td> {item.qtd_estoque} </td>
                                    <td> <button> <img src="/assets/images/edit.svg" alt="" /> </button> </td>
                                    <td> <button> <img src="/assets/images/trash.svg" alt="" /> </button> </td>
                                </tr>

                                )}                           
                            
                            </tbody> 
                        </table>
                    </div>
                </div>
            </Conteudo>
        </Container>
    )
}
