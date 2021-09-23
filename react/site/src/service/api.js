import axios from 'axios'
const api = axios.create({
    baseURL: 'https://devstoreluis.herokuapp.com/'
})

export default class Api{
    async listar() {
        
        let r = await api.get('/produto')
        return r.data;
    }

    async inserir(nome, categoria, avaliacao, precode, precopor, estoque, linkimagem, descricao){

        let r = await api.post('/produto', { nome, categoria, avaliacao, precode, precopor, estoque, linkimagem, descricao })
        return r.data;
    }

    async alterar(id, nome, categoria, avaliacao, precode, precopor, estoque, linkimagem, descricao){
        let r = await api.put('/produto/' + id, {nome, categoria, avaliacao, precode, precopor, estoque, linkimagem, descricao})
        return r.data;
    }
    
    async remover(id){
        let r = await api.delete('/produto/' + id)
        return r.data;
    }

}