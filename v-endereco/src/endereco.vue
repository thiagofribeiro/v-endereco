<template>
	<div>
		<div class="row">
			<div :class="colsize.cep">
				<div class="form-group">
					<label for="cep">CEP:</label>
					<div class="input-group">
						<input type="text" class="form-control" id="cep" v-model="endereco.cep" placeholder="" v-mask="'#####-###'">
						<span class="input-group-btn">
        					<button class="btn btn-default" type="button" @click="limparDados"><b>&times;</b></button>
      					</span>
    				</div><!-- /input-group -->
				</div>
			</div>
			<div :class="colsize.uf">
				<div class="form-group">
					<label for="cep">UF:</label>
					<select class="form-control" :disabled="endereco.idCep || localidadeFixa" v-model="endereco.ufSigla">
						<option :value="null">-- Selecione --</option>
						<option v-for="uf in ufs" :key="uf.ufSigla" :value="uf.ufSigla">{{uf.ufSigla}}{{!['md', 'sm'].includes(size) ? ` - ${uf.ufNome}` : ''}}</option>
					</select>
				</div>
			</div>

			<div :class="colsize.localidade">
				<div class="form-group">
					<label for="cep">Localidade:</label>
					<select v-if="localidades.length > 0" class="form-control" :disabled="endereco.idCep || localidadeFixa" v-model="endereco.idLocalidade" >
						<option :value="null" selected>-- Selecione uma localidade --</option>
						<option v-for="l in localidades" :key="l.idLocalidade" :value="l.idLocalidade" :selected="l.idLocalidade == endereco.idLocalidade">{{l.localidade}}</option>
					</select>
					<select v-else-if="endereco.ufSigla" class="form-control" :disabled="true" >
						<option :value="null" selected="true">Carregando...</option>
					</select>
					<select v-else class="form-control" :disabled="true">
						<option :value="null" selected="true">-- Selecione uma unidade federativa --</option>
					</select>
				</div>
			</div>
		</div>
		<div class="row">
			<div :class="colsize.logradouro">
				<div class="form-group">
					<label for="logradouro">Logradouro:</label>
					<logradouro v-model="logradouro" @hit="logradouroSelecionado" :disabled="endereco.idCep" :localidade="endereco.localidade" />
				</div>
			</div>

			<div :class="colsize.numero">
				<div class="form-group">
					<label for="cep">Número:</label>
					<input class="form-control" id="cep" v-model="endereco.numero">
				</div>
			</div>

			<div :class="colsize.complemento">
				<div class="form-group">
					<label for="cep">Complemento:</label>
					<input class="form-control" id="cep" v-model="endereco.complemento">
				</div>
			</div>

			<div :class="colsize.bairro">
				<div class="form-group">
					<label for="cep">Bairro:</label>
					<input class="form-control" id="cep" v-model="endereco.bairro" :disabled="endereco.idCep">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Logradouro from './logradouro.vue';
	import {mask} from 'vue-the-mask';

	let count = 0;

	export default {
		components: {Logradouro},
		directives: {mask},

		props: {
			localidadePadrao: null,
			localidadeFixa: null,
			value:  {},
			comdataUrl: {
				default: 'https://api.sorocaba.sp.gov.br/COMDATA/endereco'
			},
			size: {
				default: 'lg'
			},
		},

		data() {
			let endereco = Object.assign({}, this.enderecoVazio(), this.value);
			return {
				endereco,
				ufs: [],
				localidades: [],
			};
		},

		computed: {
			logradouro: {
				get() {
					if (this.endereco.idCep && this.endereco.tipoLogradouro) {
						return `${this.endereco.tipoLogradouro} ${this.endereco.logradouro}`;
					} else {
						return this.endereco.logradouro;
					}
				},

				set(logradouro) {
					this.endereco.logradouro = logradouro;
				}
			},

			colsize() {
				if (this.size==="lg") {
					return {
						cep: 'col-md-3',
						uf:  'col-md-2',
						localidade:  'col-md-7',
						logradouro: 'col-md-5',
						numero: 'col-md-1',
						complemento: 'col-md-2',
						bairro: 'col-md-4',
					}
				} else if (this.size === 'md') {
					return {
						cep: 'col-md-4',
						uf:  'col-md-2',
						localidade:  'col-md-6',
						logradouro: 'col-md-6',
						numero: 'col-md-6',
						complemento: 'col-md-6',
						bairro: 'col-md-6',
					}
				} else if (this.size === 'sm') {
					return {
						cep: 'col-md-8',
						uf:  'col-md-4',
						localidade:  'col-md-12',
						logradouro: 'col-md-12',
						numero: 'col-md-6',
						complemento: 'col-md-6',
						bairro: 'col-md-12',
					}
				} else if (this.size === 'xs') {
					return {
						cep: 'col-md-12',
						uf:  'col-md-12',
						localidade:  'col-md-12',
						logradouro: 'col-md-12',
						numero: 'col-md-12',
						complemento: 'col-md-12',
						bairro: 'col-md-12',
					}
				}
			}
		},

		watch: {
			value(endereco) {
				if (endereco !== this.endereco) {
					this.endereco = Object.assign({}, this.enderecoVazio(), endereco);
				}
			},

			endereco: {
				deep: true,
				handler(endereco) { 
					this.$emit('input', endereco); 
				}
			},

			'endereco.cep': 'consultaCep',
			'endereco.idCep'(idCep) {
				if (idCep) {
					this.endereco.cep = idCep; 	
				}
			},

			'endereco.ufSigla'(ufSigla) {
				this.listarLocalidades();
			},

			'endereco.idLocalidade'(idLocalidade, old) {
				if(idLocalidade) {
					let localidade = this.localidades.find((l) => l.idLocalidade === idLocalidade);
					if (localidade && localidade.localidade) {
						this.endereco.localidade = localidade && localidade.localidade;
					}
				} else {
					if (this.endereco.localidade && !this.endereco.idLocalidade) {	
						this.endereco.idLocalidade = this.localidades.find((l) => l.localidade === this.endereco.localidade).idLocalidade;
					}
				}
			},
			
			'endereco.localidade'(localidade) {
				if (localidade && !this.endereco.idLocalidade) {
					this.endereco.idLocalidade = localidades.find((l) => l.localidade === this.endereco.localidade).idLocalidade;
				}
			}
		},

		mounted() {
			this.listarUfs();
		},

		methods: {
			listarUfs() {
				fetch(`${this.comdataUrl}/listarUfs`).then((res) => res && res.ok? res.json() : null)
					.then((ufs) => {
						if (ufs && ufs.length > 0) {
							this.ufs = ufs;
							this.listarLocalidades()
						} 
					});
			},

			listarLocalidades() {
				if (this.endereco.ufSigla) {
					fetch(`${this.comdataUrl}/listarLocalidades?uf=${this.endereco.ufSigla}`).then((res) => res && res.ok? res.json() : null)
						.then((localidades) => {
							if (localidades && localidades.length > 0) {
								this.localidades = localidades;
								
								if (this.endereco && this.endereco.localidade && !this.endereco.idLocalidade) {
									this.endereco.idLocalidade = localidades.find((l) => l.localidade === this.endereco.localidade).idLocalidade;
								} else if (this.endereco && this.endereco.idLocalidade) {
									if(!localidades.find((l) => l.idLocalidade === this.endereco.idLocalidade)) {
										this.endereco.idLocalidade = null;
										this.endereco.localidade = null;
									}
								}
							} else {
								this.localidades = null;
							}
						});
				} else {
					this.localidades = [];
				}
			},

			limparDados() {
				this.endereco = this.enderecoVazio();
			},

			logradouroSelecionado(logradouro) {
				this.endereco.cep = logradouro.idCep;
			},
			
			limparCEP() {
				this.endereco.cep = '';
			},


			enderecoVazio(endereco) {
				let localidadePadrao = [];
			
				if (this.localidadePadrao) {
					localidadePadrao = this.localidadePadrao.split('/');
				}

				let [localidade, ufSigla] = localidadePadrao;


				let enderecoVazio = {
					idCep: null,
					cep: null,
					ufSigla: ufSigla || null,
					idLocalidade: null,
					localidade: localidade || null,
					tipoLogradouro: null,
					logradouro: null,
					numero: null,
					complemento: null,
					bairro: null,
					idBairro: null
				};

				return Object.assign({}, enderecoVazio, endereco);

			},

			consultaCep(cep, old) {
				cep = cep && cep.toString().replace('-', '');
				old = old && old.toString().replace('-', '');
				if (cep && cep !== old && cep.length === 8) {
					fetch(`${this.comdataUrl}/pesquisarPorCep?cep=${cep}`)
						.then((res) => res && res.ok? res.json() : null)
						.then((endereco) => {
							if (endereco && endereco.length > 0) {
								let enderecoNormalizado = endereco[0];
								this.endereco = Object.assign({}, this.endereco, enderecoNormalizado);
							} else {
								this.endereco.idCep = null;
							}
						});
				} else if(!cep) {
					this.endereco = this.enderecoVazio({numero: this.endereco.numero, complemento: this.endereco.complemento });
				} else if(cep.length !== 8){
					this.endereco.idCep = null;
				}
			}
		}
	};
</script>

<style>
</style>
