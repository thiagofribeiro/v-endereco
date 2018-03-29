<template>
	<modal v-if="showModal" @close="showPesquisa" ref="pesquisaEndereco">
		<div slot="header">
			Pesquisa de Endereço
		</div>
		
		<div class="row">
			<div class="col-md-4">
				<div class="form-group">
					<label for="cep">UF:</label>
					<select class="form-control" v-model="ufSigla">
						<option v-for="ufOption in ufs" :key="ufOption.ufSigla" :value="ufOption.ufSigla" >{{ufOption.ufSigla}} - {{ufOption.ufNome}}</option>
					</select>
				</div>
			</div>

			<div class="col-md-8">
				<div class="form-group">
					<label for="cep">Cidade:</label>
					<select class="form-control" v-model="localidade">
						<option v-for="l in localidades" :key="l.localidade" :value="l.localidade" :selected="l.localidade === localidade">{{l.localidade}}</option>
					</select>
				</div>
			</div>
		</div>


		<div class="row">
			<div class="col-md-12">
				<div class="form-group">
					<label for="logradouro">Logradouro:</label>
					<input id="logradouro" class="form-control" v-model="logradouro" > 
				</div>
			</div>
		</div>

		<hr>

		<p v-for="l in logradouros" :key="l.idCep"><a href="#" @click="selectLogradouro(l)">{{l.tipoLogradouro}} {{l.logradouro}} - {{l.cep}} - {{l.bairro}} - {{l.localidade}} - {{l.ufSigla}}</a></p>

		<div slot="footer">
			<button class="" @click="closePesquisa">Fechar</button>
		</div>
	</modal>
</template>

<script>
	import Modal from './components/modal.vue';

	export default {
		components: { Modal },

		data() {
			return {
				baseURL: 'https://api.sorocaba.sp.gov.br/COMDATA/endereco',
				idLocalidade: null,
				localidade: null,
				localidades: [],
				logradouro: null,
				logradouros: [],
				logradouroTimeout: null,
				ufs: [],
				ufSigla: null,
				showModal: false
			};
		},

		mounted() {
			this.listarUfs();
		},

		watch: {
			ufSigla: 'listarLocalidades',
			logradouro: 'pesquisarLogradouro'
		},

		methods: {
			showPesquisa() {
				this.showModal = true;
			},

			closePesquisa() {
				this.showModal = false;
			},

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
						} else {
							this.ufs;
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
							} else {
								this.localidades = null;
							}
						});
				}
			},

			pesquisarLogradouro() {
				// clearTimeout(this.logradouroTimeout);

				// this.logradouroTimeout = setTimeout(() => {
				fetch(`${this.baseURL}/pesquisarPorCepOuLogradouroFuzzy?localidade=${this.localidade}&logradouro=${this.logradouro}`)
						.then((res) => {
							if (res && res.ok) {
								return res.json();
							} else {
								return null;
							}
						})
						.then((logradouros) => {
							this.logradouros = logradouros;
						});	
				// }, 400);

			},

			selectLogradouro(logradouro) {
				this.closePesquisa();
				this.$emit('logradouroSelecionado', logradouro);
			}
		}
	};
</script>

<style>

</style>
