
import Cabecalho from '../../components/cabecalho'
import Menu from '../../components/menu'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Conteudo } from './styled'
import Api from '../../service/api'
import { useState, useEffect, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar'

const api = new Api();

export default function Index() {

    const [produtos, setProdutos] = useState([]);
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [avaliacao, setAvaliacao] = useState();
    const [linkimagem, SetLinkimagem] = useState('');
    const [descricaoo, SetDescricaoo] = useState('');
    const [precode, SetPrecode] = useState();
    const [precopor, SetPrecopor] = useState();
    const [estoque, SetEstoque] = useState();
    const [idalterando, SetIdalterando] = useState(0);
    const loading = useRef(null);

    async function editar(item){
        setNome(item.nm_produto);
        setCategoria(item.ds_categoria);
        setAvaliacao(item.vl_avaliacao);
        SetLinkimagem(item.img_produto);
        SetDescricaoo(item.ds_produto);
        SetPrecode(item.vl_preco_de);
        SetPrecopor(item.vl_preco_por);
        SetEstoque(item.qtd_estoque);
        SetIdalterando(item.id_produto)
    }


    async function listar(){
       
        let r = await api.listar();
        setProdutos(r);
       
    } 

    async function inserir(){
        loading.current.continuousStart();
        if(idalterando === 0){
            let r = await api.inserir(nome, categoria, avaliacao, precode, precopor, estoque, linkimagem, descricaoo);
            
            if(r.erro){
                toast(r.erro);
            }
            else{
                toast('Aluno inserido')
            }

        } else {
            let r = await api.alterar(idalterando, nome, categoria, avaliacao, precode, precopor, estoque, linkimagem, descricaoo);
            
            if(r.erro){
                toast(r.erro)
            }
            else
            toast('produto alterado!')
        }  
        loading.current.complete();
        limpar();
        listar();
    }

    function limpar(){
        setNome('');
        setCategoria('');
        setAvaliacao();
        SetLinkimagem('');
        SetDescricaoo('');
        SetPrecode();
        SetPrecopor();
        SetEstoque();
        SetIdalterando(0)
    }

    async function remover(id){
        loading.current.continuousStart();
        let r = await api.remover(id)
        toast("aluno removido!")
        listar()
        loading.current.complete();  
    }


    useEffect(() => {
        listar();
    }, [])

    return (
        <Container>
            <ToastContainer/>
            <LoadingBar color='#986CDF' ref={loading}/>
            <Menu />
            <Conteudo>
                <Cabecalho />
                <div class="body-right-box">
                    <div class="new-student-box">
                        
                        <div class="text-new-student">
                            <div class="bar-new-student"></div>
                            <div class="text-new-student">{idalterando === 0 ? "Novo Produto" : `Alterando Produto ${idalterando}`}</div>
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
                                <div class="button-create"> <button onClick={inserir}> {idalterando == 0 ? "Cadastrar" : "Alterar" } </button> </div>
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

                                {produtos.map((item, i) => 

                                <tr className={i % 2 === 0 ? "linha-alternada" : ""}>
                                    <td> <img src={item.img_produto} width="30px" /> </td>
                                    <td> {item.id_produto} </td>
                                    <td title={item.nm_produto}> {item.nm_produto != null && item.nm_produto.length >= 25 ? item.nm_produto.substr(0,25) + "..." : item.nm_produto} </td>
                                    <td> {item.ds_categoria} </td>
                                    <td> R${item.vl_preco_por}</td>
                                    <td> {item.qtd_estoque} </td>
                                    <td className="coluna-acao"> <button onClick={()=> editar(item)}> <img src="/assets/images/edit.svg" alt="" /> </button> </td>
                                    <td className="coluna-acao"> <button onClick={()=> remover(item.id_produto)}> <img src="/assets/images/trash.svg" alt="" /> </button> </td>
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
