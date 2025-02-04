import { useState } from "react"
import axios from 'axios'
import {useMask} from '@react-input/mask'
import styles from '../../assets/scss/objects/Form.module.css'
const FormContato = () =>{

    const [info, setInfo] = useState({
        porte : "Não informado",
        nome : "Não informado",
        email : "Não informado",
        volume : "Não informado",
        cidade: "Não informado",
        estado: "Não informado",
        rua: "Não informado",
        bairro: "Não informado",
        regiao : "Não informado",
        cep : "Não informado",
        numero : "Não informado",
        frequencia: "Não informado",
        comentario: "Não informado",
    })
    const cepMask = useMask({
        mask:'_____-___',
        replacement: {_: /\d/}
    })

    // const [link, setLink] = useState('')

    async function handleBlur(cep)
    {
        var _cep = cep.replace('-','')
        const inputs = [
                document.getElementById('rua'),
                document.getElementById('bairro'),
                document.getElementById('cidade'),
                document.getElementById('estado'),
                document.getElementById('regiao')
            ]
        try{
            await axios.get(`https://viacep.com.br/ws/${_cep}/json/`)
            .then(response=>{
                const data = response.data
                console.log(data)

                if(!data.erro)
                {
                    inputs[0].value = data.logradouro
                    inputs[1].value = data.bairro
                    inputs[2].value = data.localidade
                    inputs[3].value = data.estado
                    inputs[4].value = data.regiao

                    setInfo(
                        {...info,
                        rua : data.logradouro,
                        bairro : data.bairro,
                        cidade: data.localidade,
                        estado : data.estado,
                        regiao : data.regiao
                    }
                    )

                    inputs.forEach((input)=>{
                        input.classList.remove('text-danger')
                        input.classList.remove('border-danger')
                        input.classList.add('border-success')
                        input.classList.add('text-success')
                    })
                }else{
                    inputs.forEach((input)=>{
                        input.value="--- CEP inválido ---";
                        input.classList.add('text-danger')
                        input.classList.add('border-danger')
                    })
                }
                
            })
            .catch(err=>{
                console.log("### CEP NAO ENCONTRADO")
                console.log(err)

                inputs.forEach((input)=>{
                    input.value="--- CEP inválido ---";
                    input.classList.add('text-danger')
                    input.classList.add('border-danger')
                })
            })
        }
        catch(err){
            console.log("esse aqui ?????????")
            console.log(err)
            inputs.forEach((input)=>{
                input.value="--- CEP inválido ---";
                input.classList.add('text-danger')
                input.classList.add('border-danger')
            })
        }
    }

    function setTipo(e){
        const {value} = e.target

        // console.log(value)
        setInfo({
            ...info,
            porte : value
        })

    }

    function setVolume(e){
        const {value} = e.target 

        setInfo({
            ...info,
            volume : value
        })
    }

    function setFrequencia(e){
        const {value} = e.target

        setInfo({
            ...info,
            frequencia : value
        })
    }

    function handleChange(e){
        const {name, value} = e.target

        console.log(info)
        setInfo({
            ...info,
            [name] : value
        })

    }


    function handleSubmit(e){
        e.preventDefault()
        console.log(info)
        // const porte = encodeURIComponent(info.porte);
        const porte = info.porte !== null ? encodeURIComponent(info.porte) : "Não informado"
        const nome = info.nome !== null ? encodeURIComponent(info.nome) : "Não informado"
        const email = info.email !== null ? encodeURIComponent(info.email) : "Não informado"
        const volume = info.volume !== null ? encodeURIComponent(`${info.volume} Litros`) : "Não informado"
        // const endereco = info.endereco !== null ? encodeURIComponent(info.endereco) : "Não informado"
        const frequencia = info.frequencia !== null ? encodeURIComponent(info.frequencia) : "Não informado"
        const comentario = info.comentario !== null ? encodeURIComponent(info.comentario) : "Não informado"
        const endereco = info.rua !== null ? encodeURIComponent(`${info.rua}, N° ${info.numero} - ${info.cidade} - ${info.estado} - ${info.cep}`) : "Não informado"
        const telefone = encodeURIComponent("551111946289761")

        
      
  
        // console.log(info)
    
        window.location.href = (`https://wa.me/${telefone}?text=*Porte*%20:%20${porte}%0A*Nome*%20:%20${nome}%0A*Email*%20:%20${email}%0A*Volume*%20:%20${volume}%0A*Endereço*%20:%20${endereco}%0A*Frequencia*%20:%20${frequencia}%0A*Comentario/Duvida*%20:%20${comentario}`)
        // window.location.href=(`https://wa.me/${telefone}?text=${encodeURIComponent(endereco)}`)

    }



    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="btnradio" className={`${styles.label}`}>Porte</label>
                    {/* <p className="fs-4">
                        Para saber se você é uma casa, um pequeno negócio ou um grande estabelecimento, assim podemos entender melhor como ajudar de acordo com as suas necessidades.
                    </p> */}
                    <br/>
                    <div className={`btn-group  border-success btn-group-sm ${styles.group}`} role="group" aria-label="Basic radio toggle button group">
                      
                        
                        <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio2"
                             onChange={setTipo}
                            value="Consumidor Médio (Casa, Pequenos Estabelecimentos)"
                            />
                        <label className={`${styles.radius} btn btn-outline-success py-3 px-3`} htmlFor="btnradio2">Consumidor Médio (Casa, Pequenos Estabelecimentos)</label>

                        <input
                            type="radio"
                            className="btn-check "
                            name="btnradio"
                            id="btnradio1"
                            onChange={setTipo}
                            value="Estabelecimento de Grande Porte (Restaurantes, Feiras, Refeitórios)"
                        />
                        <label className={`${styles.radius} btn btn-outline-success py-3 px-3`} htmlFor="btnradio1">Estabelecimento de Grande Porte (Restaurantes, Feiras, Refeitórios)</label>
                       
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label" >Nome Completo ou Nome da Empresa <span className="text-danger">*</span></label>
                    <input 
                        type="text" 
                        className="form-control" 
                        onChange={handleChange} 
                        id="nome"
                        name="nome"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email para Contato </label>
                    <input type="text" className="form-control" id="email" name="email" onChange={handleChange}/>
                </div>

                {/* <div className="mb-3">
                    <label htmlFor="endereco" className="form-label">Endereço <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="endereco" name="endereco" onChange={handleChange} required/>
                </div> */}

                <div className="mb-3">
                    <label htmlFor="cep" className="form-label">CEP</label>
                    <input type="text" className="form-control" id="cep" name="cep"  ref={cepMask} onChange={handleChange} onBlur={(e)=>handleBlur(e.target.value)}/>
                </div>

                <div className="row">
                    <div className="col col-6">
                        <div className="mb-3">
                            <label htmlFor="rua" className="form-label">Rua</label>
                            <input readOnly type="text" className="form-control" id="rua" name="rua" onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="col col-6">
                        <div className="mb-3">
                            <label htmlFor="bairro" className="form-label">Bairro</label>
                            <input readOnly type="text" className="form-control" id="bairro" name="bairro" onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="col col-6">
                        <div className="mb-3">
                            <label htmlFor="cidade" className="form-label">Cidade</label>
                            <input readOnly type="text" className="form-control" id="cidade" name="cidade" onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="col col-6">
                        <div className="mb-3">
                            <label htmlFor="estado" className="form-label">Estado</label>
                            <input readOnly type="text" className="form-control" id="estado" name="estado" onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="col col-12">
                        <div className="mb-3">
                            <label htmlFor="regiao" className="form-label">Região</label>
                            <input readOnly type="text" className="form-control" id="regiao" name="regiao" onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="mb-3">
                            <label htmlFor="numero" className="form-label">Número</label>
                            <input type="text" className="form-control" id="numero" name="numero" onChange={handleChange}/>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="volume" className={`${styles.label}`}>Quantidade de óleo a ser coletada </label> <br/>
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input
                            type="radio"
                            className="btn-check"
                            name="volume"
                            id="volume1"
                            onChange={setVolume}
                            value="0-10 litros"
                        />
                        <label className="btn btn-outline-success" htmlFor="volume1">0 - 10 Litros</label>
                        <input
                            type="radio"
                            className="btn-check"
                            name="volume"
                            id="volume2"
                             onChange={setVolume}
                            value="0-200"
                            />
                        <label className="btn btn-outline-success" htmlFor="volume2">0 - 200 Litros</label>
                        <input
                            type="radio"
                            className="btn-check"
                            name="volume"
                            id="volume3"
                            onChange={setVolume}
                            value="0 - 500+"
                            />
                        <label className="btn btn-outline-success" htmlFor="volume3">0 - 500+ Litros</label>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="frequencia" className={`${styles.label}`}>Frequencia de coleta</label>
                        <div className="form-check mb-3">
                            <input 
                            className="form-check-input" 
                            type="radio" 
                            name="flexRadioDefault" 
                            id="1" 
                            value="Coleta somente esta vez"
                            onChange={setFrequencia}
                            />
                            <label className="form-check-label" htmlFor="1">
                                Coleta somente esta vez
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input 
                            className="form-check-input" 
                            type="radio" 
                            name="flexRadioDefault" 
                            id="2" 
                            value="Coleta regular"
                            onChange={setFrequencia}
                            />
                            <label className="form-check-label" htmlFor="2">
                                Coleta regular
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input 
                            className="form-check-input" 
                            type="radio" 
                            name="flexRadioDefault" 
                            id="3" 
                            value="Não sei, gostaria de mais informações"
                            onChange={setFrequencia}
                            />
                            <label className="form-check-label" htmlFor="3">
                                Não sei, gostaria de mais informações
                            </label>
                        </div>

                        <div className="form-floating">
                            <textarea
                                className="form-control"
                                placeholder="Observações"
                                id="floatingTextarea2"
                                style={{ height: '100px' }}
                                name="comentario"

                                onChange={handleChange}
                            />
                            <label htmlFor="floatingTextarea2">Observações</label>
                        </div>
                    </div>


                </div>

                <input type="submit" className={`${styles.button}`} value="Enviar Mensagem"/>

            
            </form>      
        </>
    )
}

export default FormContato