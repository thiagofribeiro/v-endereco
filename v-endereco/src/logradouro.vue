<template>
	<div class="Typeahead">
		<i class="fa fa-spinner fa-spin" v-if="loading"></i>
		<template>
			<i class="fa fa-search" v-show="isEmpty"></i>
			<i class="fa fa-times" v-show="isDirty" @click="reset"></i>
		</template>
		<input 
			type="text"
			class="Typeahead__input form-control"
			placeholder=""
			autocomplete="off"
			v-model="valor"
			@keydown.down="down"
			@keydown.up="up"
			@keydown.enter="hit"
			@keydown.esc="reset"
			@blur="reset"
			@input="update"
			:disabled="disabled"
		/>   
		<ul v-show="hasItems">
			<li v-for="(item, $item) in items" :key="$item" :class="activeClass($item)" @mousedown="hit" @mousemove="setActive($item)">
				<div class="first-line" v-html="highlighting(`${item.tipoLogradouro} ${item.logradouro}`)"></div>
				<div class="second-line">{{detalhes(item)}}</div>
				<!-- <pre>{{item}}</pre> -->
			</li>
		</ul>
	</div>
</template>



<script>
import VueTypeahead from './vue-typeahead'
export default {
	extends: VueTypeahead,

	props: ['value', 'disabled', 'localidade'],

	data () {
		return {
			src: 'https://api.sorocaba.sp.gov.br/COMDATA/endereco/pesquisarPorCepOuLogradouroFuzzy',
			limit: 20,
			minChars: 3,
			params: {
				localidade: this.localidade
			},
			queryParamName: 'logradouro',
			query: null
		}
	},


	computed: {
		valor: {
			get() {
				return this.value;
			},

			set(value) {
				this.query = value;
				this.$emit('input', value);
			}
		}
	},

	watch: {
		localidade() {
			this.params = {
				localidade: this.localidade
			};
		},

		// value(val) {
		// 	this.query = this.value;
		// }
	},

	methods: {
		// onHit (item) {
		//   window.location.href = 'http://twitter.com/' + item.screen_name
		// }
		// prepareResponseData(data) {
		//     let res = data.map((l) => l.logradouro);
		//     console.log(res);
		//     return res;
		// }

		onHit (item) {
			// this.$emit('input', `${item.tipoLogradouro} ${item.logradouro}`);
			this.$emit('hit', item);
		},

		detalhes(item) {
			let detalhes = `${item.bairro} - ${item.cep}`;
			if (item.cepLado) {
				detalhes += ' - Lado: ';
				if (item.cepLado === 'A' ) {
					detalhes += 'Ambos';
				} else if (item.cepLado === 'I' ) {
					detalhes += 'Ímpar';
				} else if (item.cepLado === 'P' ) {
					detalhes += 'Par';
				}
			}

			if (item.cepNumeroInicial && item.cepNumeroFinal) {
				detalhes += ` - Número: De ${item.cepNumeroInicial} à ${item.cepNumeroFinal}`;
			} else if (item.cepNumeroInicial) {
				detalhes += ` - Número: À partir de ${item.cepNumeroInicial}`;
			} else if (item.cepNumeroFinal) {
				detalhes += ` - Número: Até ${item.cepNumeroInicial}`;
			}
			
			return detalhes 
		},
	}
}
</script>



<style scoped>
/* .Typeahead {
	position: relative;
}
.Typeahead__input {
	width: 100%;
	font-size: 14px;
	color: #2c3e50;
	line-height: 1.42857143;
	box-shadow: inset 0 1px 4px rgba(0,0,0,.4);
	-webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
	transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
	font-weight: 300;
	padding: 12px 26px;
	border: none;
	border-radius: 22px;
	letter-spacing: 1px;
	box-sizing: border-box;
}
.Typeahead__input:focus {
	border-color: #4fc08d;
	outline: 0;
	box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #4fc08d;
}
*/

ul {
	position: absolute;
	padding: 0;
	margin-top: 1px;
	min-width: 100%;
	background-color: #fff;
	list-style: none;
	border-radius: 4px;
	box-shadow: 0 0 10px rgba(0,0,0, 0.25);
	z-index: 1000;
}
li {
	padding: 10px 16px;
	border-bottom: 1px solid #ccc;
	cursor: pointer;
}
li:first-child {
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
}
li:last-child {
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	border-bottom: 0;
}
.active {
	background-color: #515ece;
	color: white;
}
.first-line {
	font-size: 20px;
}
.second-line {
	font-size: 10px
}
</style>