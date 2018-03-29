<template>
	<div>
		<div class="row">
			<div class="col-md-3">
				<div class="form-group">
					<label for="cep">CEP:</label>
					<div class="input-group">
						<input class="form-control" id="cep" v-model="cep" placeholder="">
						<span class="input-group-btn">
        					<button class="btn btn-default" type="button" @click="limparCEP"><b>&times;</b></button>
      					</span>
    				</div><!-- /input-group -->
				</div>
			</div>

			<div class="col-md-2">
				<div class="form-group">
					<label for="cep">UF:</label>
					<select class="form-control" :disabled="enderecoNormalizado || localidadeFixa" v-model="ufSigla">
						<option v-for="ufOption in ufs" :key="ufOption.ufSigla" :value="ufOption.ufSigla" :selected="ufSigla === ufOption.ufSigla">{{ufOption.ufSigla}} - {{ufOption.ufNome}}</option>
					</select>
				</div>
			</div>

			<div class="col-md-7">
				<div class="form-group">
					<label for="cep">Localidade ({{localidade}})):</label>
					<select class="form-control" :disabled="enderecoNormalizado || localidadeFixa" v-model="localidade">
						<option v-for="l in localidades" :key="l.idLocalidade" :value="l">{{l.localidade}}</option>
					</select>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-md-5">
				<div class="form-group">
					<label for="logradouro">Logradouro {{logradouro}}:</label>
					<!-- <input class="form-control" id="logradouro" v-model="logradouro" :disabled="enderecoNormalizado"> -->
					<!-- <type-ahead 
						:src="`${baseURL}/pesquisarPorCepOuLogradouroFuzzy?localidade=${localidade ? localidade.localidade : ''}&logradouro=:keyword`"
						:getResponse="respostaPesquisaLogradouro"
						:highlighting="highlighting"
						:render="renderTypeAhead"
						v-model="logradouro"
						:disabled="enderecoNormalizado"
					/> -->
					<logradouro 
						v-model="logradouro" 
						@hit="logradouroSelecionado"
						:disabled="enderecoNormalizado"
						:localidade="localidade.localidade"
					/>
				</div>
			</div>

			<div class="col-md-1">
				<div class="form-group">
					<label for="cep">Número:</label>
					<input class="form-control" id="cep">
				</div>
			</div>

			<div class="col-md-2">
				<div class="form-group">
					<label for="cep">Complemento:</label>
					<input class="form-control" id="cep">
				</div>
			</div>

			<div class="col-md-4">
				<div class="form-group">
					<label for="cep">Bairro:</label>
					<input class="form-control" id="cep" v-model="bairro" :disabled="enderecoNormalizado">
				</div>
			</div>

		</div>
		<!-- <pesquisa-endereco v-model="enderecoPesquisado" ref="pesquisaEndereco" @logradouroSelecionado="logradouroSelecionado" /> -->
		<!-- <pre>{{$data}}</pre> -->
	</div>
</template>

<script>
	import Logradouro from './logradouro.vue';

	export default {
		components: {Logradouro},

		props: ['localidadePadrao','localidadeFixa'],

		data() {
			let localidadePadrao = [];
			if (this.localidadePadrao) {
				localidadePadrao = this.localidadePadrao.split('/');
			}

			let [localidade, ufSigla] = localidadePadrao;
			console.log(localidade);
			return {
				cep: null,
				enderecoNormalizado: null,
				enderecoNaoNormalizado: {
					ufSigla,
					logradouro: null,
					localidade: { localidade: localidade }
				},
				enderecoPesquisado: {},
				ufs: [],
				localidades: [],
				baseURL: 'https://api.sorocaba.sp.gov.br/COMDATA/endereco'
			};
		},

		computed: {
			logradouro: {
				get() {
					if (this.enderecoNormalizado) {
						if (this.enderecoNormalizado.tipoLogradouro) {
							return `${this.enderecoNormalizado.tipoLogradouro} ${this.enderecoNormalizado.logradouro}`;
						} else {
							return this.enderecoNormalizado.logradouro;
						}
					}
					else {
						return this.enderecoNaoNormalizado.logradouro;
					}
				},
				set(logradouro) {
					this.enderecoNaoNormalizado.logradouro = logradouro;
				}
			},

			bairro: {
				get() {
					if (this.enderecoNormalizado) {
						return this.enderecoNormalizado.bairro;
					}
					else {
						return this._bairro;
					}
				},
				set(bairro) {
					this._bairro = bairro;
				}
			},

			ufSigla: {
				get() {
					if (this.enderecoNormalizado) {
						return this.enderecoNormalizado.ufSigla;
					}
					else {
						return this.enderecoNaoNormalizado.ufSigla;
					}
				},

				set(ufSigla) {
					this.enderecoNaoNormalizado.ufSigla = ufSigla;
				}
			},

			localidade: {
				get() {
					if (this.enderecoNormalizado) {
						return this.enderecoNormalizado.localidade;
					}
					else {
						return this.enderecoNaoNormalizado.localidade;
					}
				},

				set(localidade) {
					this.enderecoNaoNormalizado.localidade = localidade;
				}
			}
		},

		watch: {
			cep(cep) {
				fetch(`${this.baseURL}/pesquisarPorCep?cep=${cep}`)
					.then((res) => res && res.ok? res.json() : null)
					.then((endereco) => {
						this.limparDados();
						if (endereco && endereco.length > 0) {
							let enderecoNormalizado = endereco[0];
							
							enderecoNormalizado.localidade = {
								idLocalidade: enderecoNormalizado.idLocalidade,
								localidade: enderecoNormalizado.localidade
							};

							this.enderecoNormalizado = enderecoNormalizado;


						} else {
							this.enderecoNormalizado = null;
						}
					});
			},

			'enderecoNaoNormalizado.ufSigla'(ufSigla) {
				this.listarLocalidades();
			}
		},

		mounted() {
			this.listarUfs();
		},

		methods: {
			listarUfs() {
				fetch(`${this.baseURL}/listarUfs`)
					.then((res) => {
						if (res && res.ok) {
							return res.json();
						} else {
							return null;
						}
					})
					.then((ufs) => {
						if (ufs && ufs.length > 0) {
							this.ufs = ufs;
							this.listarLocalidades()
						} 
					});
			},

			listarLocalidades() {
				if (this.ufSigla) {
					fetch(`${this.baseURL}/listarLocalidades?uf=${this.ufSigla}`)
						.then((res) => {
							if (res && res.ok) {
								return res.json();
							} else {
								return null;
							}
						})
						.then((localidades) => {
							if (localidades && localidades.length > 0) {
								this.localidades = localidades;
								if (this.localidade && this.localidade.localidade && !this.localidade.idLocalidade) {
									this.localidade = localidades.find((l) => l.localidade === this.localidade.localidade);
								}
							} else {
								thisx.localidades = null;
							}
						});
				}
			},

			limparDados() {
				this.enderecoNormalizado = null;
				this.enderecoNaoNormalizado = {
					ufSigla: 'SP',
					localidade: '',
					logradouro: ''
				};
			},

			naoSeiMeuCEP() {
				this.$refs.pesquisaEndereco.showPesquisa();
			},
			
			logradouroSelecionado(logradouro) {
				this.cep = logradouro.idCep;
			},
			
			limparCEP() {
				this.cep = '';
			},

			respostaPesquisaLogradouro(res) {
				console.log(res)
				return res.data;
			},

			highlighting: function (item, vue) {
				return item.toString().replace(vue.query, `<b>${vue.query}</b>`)
			},

			renderTypeAhead(item) {
				return item.map(i => {
					return `${i.logradouro} yupi!`;
				});
			},

			onHit: function (item, vue, index) {
        		vue.query = item
      		},
		}
	};
</script>

<style>

</style>
