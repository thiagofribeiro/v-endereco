/*jshint esversion: 6 */
export default {
	data () {
		return {
			items: [],
			query: '',
			current: -1,
			loading: false,
			selectFirst: false,
			queryParamName: 'q'
		};
	},

	computed: {
		hasItems () {
			return this.items.length > 0;
		},

		isEmpty () {
			return !this.query;
		},

		isDirty () {
			return !!this.query;
		}
	},

	methods: {
		update () {
			this.cancel();

			if (!this.query) {
				return this.reset();
			}

			if (this.minChars && this.query.length < this.minChars) {
				return;
			}

			this.loading = true;

			this.fetch().then((res) => res && res.ok? res.json() : null)
				.then((response) => {
					if (response && this.query) {
						let data = this.prepareResponseData ? this.prepareResponseData(response) : response;
						this.items = this.parse(data);
						this.current = -1;
						this.loading = false;

						if (this.selectFirst) {
							this.down();
						}
					}
				});
		},

		fetch (fuzzy = true) {
			this.query = this.query.trim();
			if (!this.src) {
				return console.warn('You need to set the `src` property', this);
			}

			// const src = this.queryParamName ? this.src : this.src + this.query;
			
			// const params = Object.assign({}, this.params, this.queryParamName ? Object.assign({ [this.queryParamName]: this.query }, this.data) : this.data);
			

			let cancel = new Promise((resolve) => this.cancel = resolve);
			// let request = fetch(`${src}?${ this.toQuery(params) }`);

			if(fuzzy) {
				this.query = this.query.split(' ').map(a => a && a.slice(-1) !== '~' ? a + '~' : a).join(' ');
			}

			
			let query = `${this.ufSigla ? `UF_SIGLA:${this.ufSigla} AND` : ''} ${this.localidade ? `LOCALIDADE:"${this.localidade}" AND` : ''} ${this.query}*`;
			let params = {
				'query': {
					'query_string':  {
						'fields' : ['LOGRADOURO', 'TIPO_LOGRADOURO'],
						query
					}
				},
				sort: [
					'_score',
					'_id'
				]
			};

			let request = fetch(this.src, {
				method: 'POST',
				body: JSON.stringify(params),
				headers: new Headers({
					'Content-Type': 'application/json'
				})
			});

			return Promise.race([cancel, request]);
		},

		cancel () {
			// used to 'cancel' previous searches
		},

		reset () {
			this.items = [];
			this.loading = false;
		},

		setActive (index) {
			this.current = index;
		},

		activeClass (index) {
			return {
				active: this.current === index
			};
		},

		hit () {
			if (this.current !== -1) {
				this.onHit(this.items[this.current]);
			}
		},

		up () {
			if (this.current > 0) {
				this.current--;
			} else if (this.current === -1) {
				this.current = this.items.length - 1;
			} else {
				this.current = -1;
			}
		},

		down () {
			if (this.items.length === 0 ) {
				this.update();
			} else if (this.current < this.items.length - 1) {
				this.current++;
			} else {
				this.current = -1;
			}
		},

		onHit () {
			console.warn('You need to implement the `onHit` method', this);
		},

		toQuery(params) {
			var esc = encodeURIComponent;
			return  Object.keys(params)
				.map(k => `${esc(k)}=${esc(params[k])}`)
				.join('&');
		},

		highlighting(item) {
			return item.toString().replace(new RegExp(`(${this.query})`, 'gi'), '<span class="query">$1</span class="query">');
		},
	}
};